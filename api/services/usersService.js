const hashService = require('./hashService');
const users = [
  {
      id: 0,
      firstName: 'Juku',
      lastName: 'Juurikas',
      email: 'juku@juurikas.ee',
      password: '$2b$10$0Ij/HJQO1UIejaqBMJMH/OHWgkThGm/QsEiLZbU3n.aU/q9qFVTL6' // password: johndoe
  },
  {
      id: 1,
      firstName: 'Juhan',
      lastName: 'Juurikas',
      email: 'juhan@juurikas.ee',
      password: '$2b$10$0Ij/HJQO1UIejaqBMJMH/OHWgkThGm/QsEiLZbU3n.aU/q9qFVTL6'
  }
];

usersService = {};

// Return list of users
usersService.read = () => {
  return users;
}

// Return user by id
usersService.readById = (userId) => {
  return users[userId];
}

// Create user
usersService.create = async (user) => {
  user.id = users.length;
  user.password = await hashService.hash(user.password);
  // Add user to 'database'
  users.push(user);

  // Create new json from newUser for response
  const userToReturn = { ... user };
  // Remove password from user data
  // delete userToReturn.password;

  return userToReturn;
}

usersService.update = (user) => {
    // Check if optional data exists
    if (user.firstName) {
        // Change user data in 'database'
        users[user.id].firstName = user.firstName;
    }
    // Check if optional data exists
    if (user.lastName) {
        // Change user data in 'database'
        users[user.id].lastName = user.lastName;
    }
    // Check if optional data exists
    if (user.email) {
        // Change user data in 'database'
        users[user.id].email = user.email;
    }
    // Check if optional data exists
    if (user.password) {
        // Change user data in 'database'
        users[user.id].password = user.password;
    }

    const updatedUser = { ... users[user.id]};
    delete updatedUser.password;
    return updatedUser;
}

usersService.delete = (id) => {
  users.splice(id, 1);
  return true;
}

module.exports = usersService;