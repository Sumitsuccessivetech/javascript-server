 import { IPermissions, IUsers } from './interface';

export const key='qwertyuiopasdfghjklzxcvbnm123456';
export const Permission: IPermissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: [ ],
    },
    

};

export const user: IUsers[] = [
    {
        traineeEmail : 'sumit.upadhyay@successive.tech',
        reviewerEmail : 'chirag.arora@successive.tech'
    },
    {
        traineeEmail : '@sumitsuccesive.tech',
        reviewerEmail : '@chiragsuccesive.tech'
    }
];
