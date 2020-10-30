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
        traineeEmail : 'shashank.baranwal@gmail.com',
        reviewerEmail : 'naman.parashar@gmail.com'
    },
    {
        traineeEmail : 'shashank.baranwal@successive.tech',
        reviewerEmail : 'naman.parashar@succesive.tech'
    }
]