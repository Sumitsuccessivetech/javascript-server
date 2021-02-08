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

    public Update(id, data) {
        if ('password' in data) {
            const rawPassword = data.password;
            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(rawPassword, salt);
            data.password = hashedPassword;
        }
        return super.update(id, data);
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