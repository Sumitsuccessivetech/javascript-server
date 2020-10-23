
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
    let inc=(permissions[moduleName][permissionType].includes(role))
    if(inc===true){
        return true;
    }else{
        return false;
    }
   
}

let ret=hasPermission('getUsers',"trainer","read");
console.log(ret);
ret=hasPermission('getUsers',"trainee","write");
console.log(ret);

