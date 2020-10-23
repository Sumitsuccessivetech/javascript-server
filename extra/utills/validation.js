const users = [
    {
        traineeEmail: 'sumit.upadhyay@successive.tech',
        reviewerEmail: 'chirag.arora@successive.tech',
    },
    {
        traineeEmail: '@sumitsuccessive.tech',
        reviewerEmail: '@chiragsuccesive.tech',
    },
];

function validateEmail(email) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return (pattern.test(email))


}
function validateUsers(userData) {
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
validateUsers(users);

