let d;
let permissions = {
    'getUsers': {
    all: ['head-trainer'],
    rEAD : ['trainee', 'trainer'],
    wRITE: ['trainer'],
    dELETE: [],
    }
    }
const {getUsers} = permissions;

let f;
function hasPermission(moduleName, role, permissionType)
{
    const {all,rEAD,wRITE,dELETE}=moduleName;
     f= all.includes(role)
    if(f==true)
    {
        return true;
    }
    else{
         if(permissionType == 'rEAD')
         {
            f = rEAD.includes(role);
             return f;
         }
         else if(permissionType == 'wRITE'){
             f= wRITE.includes(role)
             return f;
         }
         else if (permissionType == 'dELETE'){
             f= dELETE.includes(role)
             return f;
         }
    }

 }
d = hasPermission(getUsers,'trainee','rEAD' ) 
console.log(d);
d = hasPermission(getUsers,'trainer','wRITE' ) 
console.log(d);