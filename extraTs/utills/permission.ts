import {permissions} from '../constants';
export default function hasPermission( moduleName: string , role: string , permissionType: string) : boolean
{
    console.log(permissions);
    console.log(moduleName);
    const temp = permissions[moduleName];
    if(!temp || !temp[permissionType]){
        return false;
    }
    if(temp['all'].includes(role)){
        return true;
    }
    if(!temp[permissionType].includes(role)){
        return false;
    }
    return true;
}
