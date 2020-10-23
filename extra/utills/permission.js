
// const permissions =
// {
//     'getUsers': {
//         all: ['head-trainer'],
//         read: ['trainee', 'trainer'],
//         write: ['trainer'],
//         Delete: [],
//     }
// }
import {permissions} from '../constants';
export default function hasPermission(moduleName, role, permissionType) {
    
    return (permissions[moduleName][permissionType].includes(role))
}

const result1=hasPermission('getUsers', "trainer", "read");
console.log(result1);
const result2 =hasPermission('getUsers', "trainee", "write");
console.log(result2);

