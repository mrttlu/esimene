const hashService = require('./hashService');
const db = require('../../db');

usersService = {};

// Return list of users
usersService.read = async () => {
  const usersRef = db.collection('users');
  const snapshot = await usersRef.get();
  const users = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return users;
}

usersService.readByEmail = async (email) => {
  const usersRef = db.collection('users');
  const snapshot = await usersRef.where('email', '==', email).get();
  if (snapshot.empty) {
    console.log('No matching user.');
    return;
  }
  const user = snapshot.docs[0].data();
  return user;
}

// Return user by id
usersService.readById = (userId) => {
  return users[userId];
}

// Create user
usersService.create = async (user) => {
  user.password = await hashService.hash(user.password);
  // Add user to 'database'
  await db.collection('users').doc(user.email).set(user);
  // Create new json from newUser for response
  const userToReturn = { ... user };
  // Remove password from user data
  delete userToReturn.password;
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