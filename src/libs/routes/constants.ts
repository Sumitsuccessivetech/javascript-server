 
import { IPermissions, IUsers } from './interface';
export const Permission: IPermissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: [ ],
    }
};

export const users: IUsers[] = [
    {
        traineeEmail : 'sumit.upadhyay@successive.tech',
        reviewerEmail : 'chirag.arora@successive.tech'
    },
    {
        traineeEmail : '@sumitsuccesive.tech',
        reviewerEmail : '@chiragsuccesive.tech'
    }
];
