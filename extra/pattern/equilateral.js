// let a,b;
// equilateral(5)
// function equilateral(a)
// {
//     console.log("print a equilateral triangle "+a);

//     if(a<2 && a>10)
//         return(0);

//     for(let i=1; i<=a; i++)
//     {
//         b=" ";
//     for(let j=i; j<=a; j++)
//     {
//         b+=" ";
//     }
//     for (let k=i; k>0; k--){
//         b+="* ";
//         }
//         console.log(b);
//     }
// }
let x,a
n=process.argv[2];
diamond(n);

function diamond(x)
{
console.log("print a diamond with rows "+x);
if( x<2 && x>10 )
return(0);

for(let i=1; i<x; i++)
{
a="";

for(let j=i; j<x-1; j++)
a+=" ";

for (let z=i; z>=0; z--)
a+="* ";

console.log(a);

}
for(let i=0; i<x; i++)
{
a="";

for(let j=i; j>0; j--)
a+=" ";

for(let z=i; z<x; z++)
a+="* ";
console.log(a);

}