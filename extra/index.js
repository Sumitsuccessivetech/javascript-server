import { diamond, equilateral } from './patterns';
import { hasPermission } from './utills';
import { validateUsers } from './utills';

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


hasPermission('getUsers', "trainer", "read");
validateUsers(users);
diamond(5);
equilateral(5);