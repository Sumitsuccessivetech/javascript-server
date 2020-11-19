import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';

export default class UserRepository extends
    VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    public static generateObjectID() {
        return String(mongoose.Types.ObjectId());
    }
    constructor() {
        super(userModel);
    }
    public static readOne(query): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
        return userModel.findOne(query);
    }

    public create(data): Promise<IUserModel> {
        console.log('UserRepository create', data);
        const id = UserRepository.generateObjectID();
        const model = new userModel({
            _id: id,
            ...data,
            originalId: id,
        });
        return model.save();
    }

     public async count() {
        return await userModel.countDocuments();
    }
    public countFetched(query) {
        return super.count(query);
    }
}