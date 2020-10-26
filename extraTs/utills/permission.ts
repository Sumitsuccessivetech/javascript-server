
import {permissions} from '../constants';
export default function hasPermission(moduleName : String, role : String , permissionType : String) : boolean {
    
    return (permissions[moduleName][permissionType].includes(role))
}

const result1=hasPermission('getUsers', "trainer", "read");
console.log(result1);
const result2 =hasPermission('getUsers', "trainee", "write");
console.log(result2);

