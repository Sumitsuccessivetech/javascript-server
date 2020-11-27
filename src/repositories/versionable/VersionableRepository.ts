import * as mongoose from 'mongoose';
import { DocumentQuery } from 'mongoose';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private model: M;

    constructor(model) {
        this.model = model;
    }

    public static generateObjectId(): string {
        return String(mongoose.Types.ObjectId());
    }

    public async count() {
        return await this.model.countDocuments();
    }
    public findAll(query: any, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.find(finalQuery, projection, options);
    }
    public invalidate(id: string): DocumentQuery<D, D> {
        const query: any = { originalId: id, deletedAt: { $exists: false} };
        const data: any = { deletedAt: Date.now() };
        return this.model.updateOne(query, data);
    }

    public async findOne(query: object) {
        return await this.model.findOne(query).lean();
    }

    public async createUser(data: any, creator): Promise<D> {
        const id = VersionableRepository.generateObjectId();

        const modelData = {
            ...data,
            originalId: id,
            createdBy: creator,
            _id: id,
        };

        return await this.model.create(modelData);
    }

    public async getUser(data: any) {
        return await this.model.findOne(data);
    }

    public async update(id: string, dataToUpdate: any, updator) {

        let originalData;
        // console.log()
        await this.findOne({ _id: id, updatedAt: undefined, deletedAt: undefined })
            .then((data) => {
                if (data === null) {
                    throw '';
                }
                originalData = data;
                const newId = VersionableRepository.generateObjectId();
                const oldId = originalData._id;
                const oldModel = {
                    ...originalData,
                    updatedAt: Date.now(),
                    updatedBy: updator,
                    deletedAt: Date.now(),
                    deletedBy: updator,
                };

                const newData = Object.assign(JSON.parse(JSON.stringify(originalData)), dataToUpdate);

                newData._id = newId;
                newData.createdAt = Date.now();

                this.model.updateOne({ _id: oldId }, oldModel)
                    .then((res) => {
                        if (res === null) {
                            throw '';
                        }
                        else
                            return res;
                    });

                this.model.create(newData);


            });
    }

    public async delete(id: string, remover: string) {

        let originalData;

        await this.findOne({ _id: id, deletedAt: null })
            .then((data) => {
                if (data === null) {
                    throw '';
                }

                originalData = data;
                const oldId = originalData._id;

                const modelDelete = {
                    ...originalData,
                    deletedAt: Date.now(),
                    deletedBy: remover,
                };

                this.model.updateOne({ _id: oldId }, modelDelete)
                    .then((res) => {
                        if (res === null) {
                            throw '';
                        }
                    });

            });
    }
}