import UserRepository from '../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then(res => {
            if (res === 0) {
                console.log('Data seeding in progress');

                userRepository.create({
                    _id: '1',
                    name: 'head-trainer',
                    email: 'headtrainer@successivetech',
                    role: 'head-trainer',
                    password: 'training@123'
                },undefined);
                userRepository.create({
                    name: 'trainer',
                    email: 'trainer@successivetech',
                    role: 'trainer',
                    password: 'training@123'
                },undefined);
            }
        })
        .catch(err => console.log(err));
};