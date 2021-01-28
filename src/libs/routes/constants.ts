import { IPermissions, IUsers } from './interface';

export const key= 'qwertyuiopasdfghjklzxcvbnm123456';
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
        traineeEmail: 'sumit.upadhyay@successive.tech',
        reviewerEmail: 'chirag.arora@successive.tech'
    },
    {
        traineeEmail: '@sumitsuccesive.tech',
        reviewerEmail: '@chiragsuccesive.tech'
    }
];
export const payLoad = {
    'iss': 'Successive Technologies',
    'aud': 'www.successive.in',
    'sub': 'Learn and Implement',
    'email': ''
};
export const seedData1 = {
    name: 'head-trainer',
    email: 'headtrainer@successivetech',
    role: 'head-trainer',
    password: 'training@123'
};

export const seedData2 = {
    name: 'trainer',
    email: 'trainer@successivetech',
    role: 'trainer',
    password: 'training@123'
};
