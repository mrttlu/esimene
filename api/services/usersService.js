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
  const snapshot = await db.collection('users').where('email', '==', email).get();
  if (snapshot.empty) {
    console.log('No matching user.');
    return;
  }
  const user = {
    id: snapshot.docs[0].id,
    ...snapshot.docs[0].data()
  };
  return user;
}

// Return user by id
usersService.readById = async (userId) => {
  const doc = await db.collection('users').doc(userId).get();
  if (!doc.exists) {
    console.log('No such document!');
    return false;
  }
  const user = doc.data();
  return user;
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

usersService.update = async (user) => {
  let update = {};
    // Check if optional data exists
    if (user.firstName) {
        // Change user data in 'database'
        update.firstName = user.firstName;
    }
    // Check if optional data exists
    if (user.lastName) {
        // Change user data in 'database'
        update.lastName = user.lastName;
    }
    // Check if optional data exists
    if (user.email) {
        // Change user data in 'database'
        update.email = user.email;
    }
    // Check if optional data exists
    if (user.password) {
        // Change user data in 'database'
        update.password = await hashService.hash(user.password);
    }
    await db.collection('users').doc(user.id).update(update);
    return true;
}

usersService.delete = async (id) => {
  await db.collection('users').doc(id).delete();
  return true;
}

module.exports = usersService;