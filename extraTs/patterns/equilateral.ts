export default function equilateral(n : number) : void{
    // Using for white space
    let s = "";

    // using for rows
    let j = n;
    for(let i=1;i<=n;i++){
        s = " ".repeat(j);
        console.log(s,'* '.repeat(i));
        s="";
        j--;
    }
}