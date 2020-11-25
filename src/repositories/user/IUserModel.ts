import * as mongoose from 'mongoose';

export default interface IUserModel extends mongoose.Document{
    _id: string;
    id: string;
    name:string;
    email:string;
    role:string;
    password:string;
}