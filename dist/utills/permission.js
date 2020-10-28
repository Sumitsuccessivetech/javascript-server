"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function hasPermission(moduleName, role, permissionType) {
    return (constants_1.permissions[moduleName][permissionType].includes(role));
}
exports.default = hasPermission;
const result1 = hasPermission('getUsers', "trainer", "read");
console.log(result1);
const result2 = hasPermission('getUsers', "trainee", "write");
console.log(result2);
//# sourceMappingURL=permission.js.map