import validateEmail from './helpers'

export default function validateUsers(userData : IUsers []) : void {
    let validUser = [];
    let invalidUser = [];
    userData.forEach(userData => {
        const { traineeEmail, reviewerEmail } = userData;
        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            validUser.push(userData);
        } else {
            invalidUser.push(userData);
        }
    });
    console.log([validUser.length] + " are valid users:", validUser);
    console.log([invalidUser.length] + " are  invalid users:", invalidUser);
}

