import {permissions} from '../constants';
export default function hasPermission( moduleName: string , role: string , permissionType: string) : boolean
{
    console.log(permissions);
    console.log(moduleName);
    const assent = permissions[moduleName];
    if(!assent || !assent[permissionType]){
        return false;
        console.log("user has no access of this type");
    }
    if(!assent[permissionType].includes(role)){
        return false;
        console.log("user has no access of this type");
    }
    return true;
}
