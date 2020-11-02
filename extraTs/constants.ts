export const permissions: IPermissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [ ],
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
