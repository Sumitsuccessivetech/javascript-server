import * as mongoose from 'mongoose';
import { DocumentQuery, Query } from 'mongoose';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private model: M;

    constructor(model) {
        this.model = model;
    }

    public static generateObjectId(): string {
        return String(mongoose.Types.ObjectId());
    }

    public count(query: any): Query<number> {
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.countDocuments(finalQuery);
    }
    public findAll(query: any, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.find(finalQuery, projection, options);
    }
    public invalidate(id: string): DocumentQuery<D, D> {
        const query: any = { originalId: id, deletedAt: { $exists: false } };
        const data: any = { deletedAt: Date.now() };
        return this.model.updateOne(query, data);
    }

    public findOne(query: any): DocumentQuery<D, D> {
        console.log(this.model);
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.findOne(finalQuery);
    }

    public async create(data: any, creator): Promise<D> {
        const id = VersionableRepository.generateObjectId();
        const modelData = {
            ...data,
            originalId: id,
            createdBy: creator,
            _id: id,
        };
        return await this.model.create(modelData);
    }

    public async get(data: any) {
        return await this.model.findOne(data);
    }
    public async getallTrainee(skipDefined: number, limitDefined: number, sort: boolean) {
        if ( sort ) {
        const fetchData = await this.model.find( { deletedAt : null})
        .skip(skipDefined)
        .limit(limitDefined)
        .sort({name: 1, email: 1});
        const count = await this.model.find( {deletedAt: null})
        .countDocuments();

        const arr = [fetchData, count];
        return arr;
        } else {
            const fetchData = await this.model.find({deletedAt: null})
            .skip(skipDefined)
            .limit(limitDefined)
            .sort({createdAt: -1});
            const count = await this.model.find({deletedAt: null})
            .countDocuments();
            const arr = [fetchData, count];
            return arr;
        }
        }

    public async update(data: any, updator: string): Promise<D> {
        const previous = await this.findOne({ originalId: data.id, deletedAt: undefined, });
        console.log('previous: ', previous);
        if (previous) {
            await this.invalidate(data.id);
        } else {
            return undefined;
        }
        const newData = Object.assign(JSON.parse(JSON.stringify(previous)), data);
        newData._id = VersionableRepository.generateObjectId();
        delete newData.deletedAt;
        newData.updatedAt = Date.now();
        newData.updatedBy = updator;
        newData.createdAt = Date.now();
        return this.model.create(newData);


    }

    public async delete(id: string, remover: string): Promise<D> {
        const previous = await this.findOne({ originalId: id, deletedAt: undefined });
        if (previous) {
            return await this.invalidate(id);
        } else {
            return undefined;
        }
    }
}
