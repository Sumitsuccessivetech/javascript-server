import { diamond , equilateral } from './patterns'
import { hasPermission , validateUsers } from './utills'
import { users } from './constants'

diamond(5)
equilateral(10)

console.log(hasPermission('getUsers', 'head-tainer', 'all'));
console.log(hasPermission('getUsers', 'tainer', 'read'));
console.log(hasPermission('getUsers', 'head-trainee', 'write'));

validateUsers(users);
