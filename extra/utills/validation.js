
let users = [
    {
    TraineeEmail : 'sumit.upadhyay@successive.tech',
    ReviewerEmail: 'chirag.arora@successive.tech',
    TraineeEmail1: '@sumit.successive.technologies',
    ReviewerEmail1: '@chirag.successive.technologies'
    }
    ]
    console.log(validateEmail(users[0]["ReviewerEmail"]))
    console.log(validateEmail(users[0]["TraineeEmail"]))
    console.log(validateEmail(users[0]["TraineeEmail1"]))
    console.log(validateEmail(users[0]["ReviewerEmail1"]))

function validateEmail(email){      
    let emailPattern = /^([a-zA-Z0-9\.-]+)@(successive)(.tech)$/
    return emailPattern.test(email); 
  } 

    
function validateUsers(users){
    let valid=0;
    let invalid=0;
    users.forEach(element => {
        if(validateEmail(element.TraineeEmail)==true )
        {
            valid=valid+1;
        }
        else{
            invalid=invalid+1
        }
        if(validateEmail(element.ReviewerEmail)==true)
        {
            valid=valid+1
        }
        else
        {
            invalid=invalid+1
        }
        if(validateEmail(element.TraineeEmail1)==true )
        {
            valid=valid+1;
        }
        else{
            invalid=invalid+1
        }
        if(validateEmail(element.ReviewerEmail1)==true)
        {
            valid=valid+1
        }
        else
        {
            invalid=invalid+1
        }
    });

    console.log("total valid No.", valid);
    console.log("total invalid No.", invalid);
    
}
validateUsers(users);
