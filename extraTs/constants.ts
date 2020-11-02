export const permissions : IPermissions =
{
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [ ],
    }
}

export const users : IUsers[] = [
    {
        traineeEmail : 'sumit.upadhyay@successive.tech',
        reviewerEmail : 'chirag.arora@succesive.tech'
    },
    {
        traineeEmail : '@sumit.upadhyaysucesive.tech',
        reviewerEmail : 'chirag.arora@successive.tech'
    }
]