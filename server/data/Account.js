const bcrypt = require('bcrypt')

const dummy_account = [
  {
    // _id: 'xx1',
    name: 'Ava',
    username: 'avava123',
    email:'ava@email.com',
    password: bcrypt.hashSync('ava123', 5)
  },
  {
    // _id: 'xx2',
    name: 'User',
    username: 'user2020',
    email:'user@email.com',
    password: bcrypt.hashSync('user123', 5)
  },
]

module.exports = dummy_account