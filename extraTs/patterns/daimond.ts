let x;
export default function diamond(x)
{
let a= " "
console.log("print a diamond with rows "+x);

for(let i=0; i<x; i++) {
a="";

for(let j=i; j<x-1; j++)
a+=" ";

for (let z=i; z>=0; z--)
a+="* ";
console.log(a);
}
for(let i=0; i<x; i++){
a="";

for(let j=i; j>0; j--)
a+=" ";

for(let z=i; z<x; z++)
a+="* ";
console.log(a);
}
}