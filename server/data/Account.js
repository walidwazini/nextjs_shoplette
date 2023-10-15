const bcrypt = require('bcrypt')

export const dummy_account = [
  {
    id: 'xx1',
    name: 'Ava',
    username: 'avava123',
    email:'ava@email.com',
    password: bcrypt.hashSync('ava123', 5)
  },
  {
    id: 'xx2',
    name: 'User',
    username: 'user2020',
    email:'user@email.com',
    password: bcrypt.hashSync('user123', 5)
  },
]
