import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Faisal Ahmed',
        email: 'faisal@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Ridoy Khan',
        email: 'ridoy@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users