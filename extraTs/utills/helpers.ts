export default function validateEmail(email : string) : boolean{
    const regex = /\w+.\w+@successive.tech$/i;
    if(regex.test(email))
    {
        return true;
    }
    else{
        return false;
    }
}