const db = require('../../db');
const lecturersService = {
  read: async (userId) => {
    const snapshot = await db.collection('lecturers').where("userId", "==", userId).get();
    const lecturers = [];
    for (const doc of snapshot.docs) {
      lecturers.push({
        id: doc.id,
        ...doc.data()
      });
    }
    return lecturers;
  },
  readById: async (id) => {
    const doc = await db.collection('lecturers').doc(id).get();
    if (!doc.exists) {
      console.log('No such document!');
      return false;
    }
    const lecturer = doc.data();
    return lecturer;
  },
  create: async (lecturer) => {
    await db.collection('lecturers').doc().set(lecturer);
    return lecturer;
  },
  update: async (lecturer, userId) => {
    const update = {};
    if (lecturer.firstName) {
      update.firstName = lecturer.firstName;
    }
    if (lecturer.lastName) {
      update.lastName = lecturer.lastName;
    }
    if (lecturer.email) {
      update.email = lecturer.email;
    }
    const snapshot = await db.collection('lecturers').doc(lecturer.id).get();
    if (snapshot.empty || (snapshot.data().userId !== userId)) {
      console.log('No matching lecturer.');
      return false;
    }
    await db.collection('lecturers').doc(lecturer.id).update(update);
    return update;
  },
  delete: async (id, userId) => {
    const snapshot = await db.collection('lecturers').doc(id).get();
    if (snapshot.empty || (snapshot.data().userId !== userId)) {
      console.log('No matching lecturer.');
      return false;
    }
    await db.collection('lecturers').doc(id).delete();
    return true;
  }
};


module.exports = lecturersService;