import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';
import { query } from 'express';

export default class UserRepository extends
    VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    public static generateObjectID() {
        return String(mongoose.Types.ObjectId());
    }
    constructor() {
        super(userModel);
    }

    public create(data, creator) {
        return super.create(data, creator);
    }

    public update(id, updator) {
        return super.update(id, updator);
    }

    public get(data) {
        return super.get(data);
    }

    public delete(id, remover) {
        return super.delete(id, remover);
    }

    public findone(data) {
        return super.findOne(data);
    }

    public count() {
        return super.count(query);
    }
}