import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import { config } from '../config' ;

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then(res => {
            if (res === 0) {
                console.log('Data seeding in progress');
                const rawPassword = config.password;
                const saltRounds = 10;
                const salt = bcrypt.genSaltSync(saltRounds);
                const hashedPassword = bcrypt.hashSync(rawPassword, salt);
                userRepository.createUser({
                    name: 'head-trainer',
                    email: 'headtrainer@successivetech',
                    role: 'head-trainer',
                    password: 'training@123'
                },"sumit");
                // userRepository.createUser({
                //     name: 'trainer',
                //     email: 'trainer@successivetech',
                //     role: 'trainer',
                //     password: 'training@123'
                // },undefined);
            }
        })
        .catch(err => console.log(err));
};