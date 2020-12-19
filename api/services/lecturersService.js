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
      console.log('No such lecturer!');
      return false;
    }
    const lecturer = doc.data();
    return lecturer;
  },
  create: async (lecturer) => {
    if(!lecturer) {
      console.log('Missing data');
      return false;
    };
    const doc = await db.collection('lecturers').add(lecturer);
    if(!doc.id) return false;
    return doc.id;
  },
  update: async (lecturer, userId) => {
    if (!lecturer || !userId) {
      console.log('Missing data.')
      return false
    };
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
    const doc = await db.collection('lecturers').doc(lecturer.id).get();
    if (!doc.data() || (doc.data().userId !== userId)) {
      console.log('No matching lecturer.');
      return false;
    }
    await db.collection('lecturers').doc(lecturer.id).update(update);
    return true;
  },
  delete: async (id, userId) => {
    if(!id || !userId) {
      console.log('Missing data.');
      return false;
    }
    const doc = await db.collection('lecturers').doc(id).get();
    if (!doc.data() || (doc.data().userId !== userId)) {
      console.log('No matching lecturer.');
      return false;
    }
    await db.collection('lecturers').doc(id).delete();
    return true;
  }
};


module.exports = lecturersService;