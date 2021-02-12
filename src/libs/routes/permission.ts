import { Permission } from '../../libs/routes/constants';

export default function hasPermission(moduleName: string, role: string, permissionType: string): boolean {

    // const assent = Permission[moduleName];
    // if (!assent || !assent[permissionType]) {
    //     console.log(`${role}  have access of  ${permissionType} type`);
    //     return false;
    // }
    // if (!assent[permissionType].includes(role)) {
    //     console.log(`${role} do not have access of ${permissionType} `);
    //     return false;
    // }
    // return true;
    Permission[moduleName].read.push(Permission[moduleName].all[0]);
    Permission[moduleName].write.push(Permission[moduleName].all[0]);
    Permission[moduleName].Delete.push(Permission[moduleName].all[0]);
    return (Permission[moduleName][permissionType].includes(role));
}