import { Request } from 'express';
export default interface IRequest extends Request {
    headers: any;
    body: any;
    query: any;
    params: any;
    userData: any;
}