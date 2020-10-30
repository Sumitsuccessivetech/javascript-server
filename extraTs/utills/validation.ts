import validateEmail from './helpers'

export default function validateUsers(users : IUsers []) : void {
    let a : string[] = [];
    let b : string[] = [];
    let countValid : number = 0;
    let countInValid : number = 0;
    users.forEach(function(item){
        const {traineeEmail, reviewerEmail} = item;
        if(validateEmail(traineeEmail)){
            a.push(traineeEmail);
            countValid++;
        }
        else{
            b.push(traineeEmail);
            countInValid++;
        }
        if(validateEmail(reviewerEmail)){
            a.push(reviewerEmail);
            countValid++;
        }
        else{
            b.push(reviewerEmail);
            countInValid++;
        }
    })
    console.log("valid id :"+a);
    console.log("Invalid is :"+b);
    console.log("valid :"+countValid+", Invalid:"+countInValid);    
};

