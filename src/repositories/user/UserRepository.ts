import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';
import * as bcrypt from 'bcrypt';
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

    public Update(data, updator) {
        console.log(data, updator);
        if ('password' in data.dataToUpdate) {
            const rawPassword = data.dataToUpdate.password;
            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(rawPassword, salt);
            data.dataToUpdate.password = hashedPassword;
        }
        return super.update(data, updator);
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

    public getallTrainee(skip, limit, sort) {
        return super.getallTrainee(skip, limit, sort);
    }
}