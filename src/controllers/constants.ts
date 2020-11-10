import { IUsers, IPermissions } from './interface';
const permissions: IPermissions = {
  'getUsers': {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    Delete: []
  },
  'getDetails': {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    Delete: []
  }
}

const users: IUsers[] =
  [
    {
      traineeEmail: 'trainee1@successive.tech',
      reviewerEmail: 'reviewer1@successive.tech',
    },

    {
      traineeEmail: 'traineee2@successive.tech',
      reviewerEmail: 'reviewer.der@successive.tech',
    }
  ]
let { getUsers, getDetails } = permissions;
export { getUsers, getDetails, users }