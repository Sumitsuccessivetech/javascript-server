 
import { IPermissions, IUsers } from './interface';
export const Permission: IPermissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: [ ],
    }
}
let{getUsers}=Permission;
export {getUsers}