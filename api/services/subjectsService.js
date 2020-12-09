const db = require('../../db');

const subjectsService = {};

subjectsService.read = async (userId) => {
  const snapshot = await db.collection('users').doc(userId).collection('subjects').get();
  const subjects = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return subjects;
}

subjectsService.readById = async (id, userId) => {
  const doc = await db.collection('users').doc(userId).collection('subjects').doc(id).get();
  if (!doc.exists) {
    console.log('No such document!');
    return false;
  }
  const subject = doc.data();
  return subject;
}

subjectsService.create = async (subject, userId) => {
  await db.collection('users').doc(userId).collection('subjects').doc().set(subject);
  return subject;
}

subjectsService.update = async (subject, userId) => {
  const update = {};
  if (subject.lecturerId) {
    update.lecturerId = subject.lecturerId;
  }
  if (subject.name) {
    update.name = subject.name;
  }
  const snapshot = await db.collection('users').doc(userId).collection('subjects').doc(subject.id).get();
  if (snapshot.empty) {
    console.log('No matching subject.');
    return false;
  }
  await db.collection('users').doc(userId).collection('subjects').doc(subject.id).update(update);
  return true;
}

subjectsService.delete = async (id, userId) => {
  const snapshot = await db.collection('users').doc(userId).collection('subjects').doc(id).get();
  if (snapshot.empty) {
    console.log('No matching subject.');
    return false;
  }
  await db.collection('users').doc(userId).collection('subjects').doc(id).delete();
  return true;
}

module.exports = subjectsService;