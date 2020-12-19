const hashService = require('./hashService');
const db = require('../../db');

usersService = {};

// Return list of users
usersService.read = async () => {
  const snapshot = await db.collection('users').get();
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
    console.log('No user found!');
    return false;
  }
  const user = doc.data();
  return user;
}

// Create user
usersService.create = async (user) => {
  user.password = await hashService.hash(user.password);
  // Add user to database
  const res = await db.collection('users').add(user);
  // Return new user ID
  return res.id;
}

usersService.update = async (user) => {
  const doc = await db.collection('users').doc(user.id).get();
  if (!doc.exists) {
    console.log('No matching user.');
    return false;
  }
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
    const res = await db.collection('users').doc(user.id).update(update);
    return true;
}

usersService.delete = async (id) => {
  const doc = await db.collection('users').doc(id).get();
  if (!doc.exists) {
    console.log('No matching user.');
    return false;
  }
  await db.collection('users').doc(id).delete();
  return true;
}

module.exports = usersService;