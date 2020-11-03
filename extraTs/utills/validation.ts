import validateEmail from './helpers';

export default function validateUsers(users: IUsers[]): void {
    const validUser = [];
    const invalidUser = [];
    users.forEach(userData => {
        const { traineeEmail, reviewerEmail } = userData;
        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            validUser.push(userData);
        } else {
            invalidUser.push(userData);
        }
    });
    console.log(`${validUser.length}  are valid users:`, validUser);
    console.log(`${invalidUser.length} are invalid users:`, invalidUser);
}
