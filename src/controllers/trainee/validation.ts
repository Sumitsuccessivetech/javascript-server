const config = {
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid'
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid'
        }
    },
    create: {
        name: {
            required: true,
            regex: '',
            in: ['body'],
            errorMessage: 'Name is required'
        },
        email: {
            required: true,
            regex: /\w+[@]\w+[.]\w+$/,
            in: ['body'],
            errorMessage: 'Email is required'
        },
        role: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Role is required'
        },
        password: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Password is required'
        }
    },
    Delete: {
        id: {
            required: true,
            errorMessage: 'Id is required',
            in: ['params']
        }
    },
    update: {
        originalId: {
            required: true,
            string: true,
            in: ['body']
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
        }
    }
};

export default config;
