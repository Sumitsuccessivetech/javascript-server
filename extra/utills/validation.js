const permissions =
{
'getUsers': {
all: ['head-trainer'],
read : ['trainee', 'trainer'],
write : ['trainer'],
Delete: [],
}
}

function hasPermission(moduleName,role,permissionType)
{
console.log(permissions[moduleName][permissionType].includes(role)); //using bracket operator

}

hasPermission('getUsers',"trainer","read");
hasPermission('getUsers',"trainee","write");
