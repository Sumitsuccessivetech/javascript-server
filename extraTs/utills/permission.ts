import { permissions } from '../constants';
export default function hasPermission(moduleName: string, role: string, permissionType: string): boolean {
    console.log(permissions);
    console.log(moduleName);
    const assent = permissions[moduleName];
    if (!assent || !assent[permissionType]) {
        return false;
        console.log(`User do not have access of  ${permissionType} type`);
    }
    if (!assent[permissionType].includes(role)) {
        return false;
        console.log(`${role} do not have access of ${permissionType} `);
    }
    return true;
}
