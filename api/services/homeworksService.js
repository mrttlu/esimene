const { collection } = require('../../db');
const db = require('../../db');
const homeworksService = {};

homeworksService.read = async (userId) => {
  const snapshot = await db.collection('users').doc(userId).collection('subjects').get();
  const subjects = [];
  for (const doc of snapshot.docs) {
    subjects.push({
      id: doc.id,
      ...doc.data()
    });
  }
  const homeworks = [];
  for (const subject of subjects) {
    const snaps = await db.collection('users').doc(userId).collection('subjects').doc(subject.id).collection('homeworks').get();
    for (const doc of snaps.docs) {
      homeworks.push({
        id: doc.id,
        ...doc.data()
      });
    }
  }
  return homeworks;
}


homeworksService.readById = async (id, userId) => {
  const subjects = await db.collection('users').doc(userId).collection('subjects').get();
  let homework = null;
  for (const subject of subjects.docs) {
    const doc = await db.collection('users').doc(userId).collection('subjects').doc(subject.id).collection('homeworks').doc(id).get();
    if(doc.exists) {
      homework = doc.data();
    }
  }
  if (!homework) {
    console.log('No such document!');
    return false;
  }
  return homework;
}

homeworksService.create = async (homework, userId, subjectId) => {
  await db.collection('users').doc(userId)
    .collection('subjects').doc(subjectId)
    .collection('homeworks').doc().set(homework);
  return homework;
}

homeworksService.update = async (homework) => {
  // Check if optional data exists
  if (homework.description) {
    // Change user data in 'database'
    homeworks[homework.id].description = homework.description;
  }
  // Check if optional data exists
  if ((homework.subjectId || homework.subjectId === 0)) {
    // Change user data in 'database'
    homeworks[homework.id].subjectId = homework.subjectId;
  }
  return homeworks[homework.id];
}

homeworksService.delete = async (id) => {
  homeworks.splice(id, 1);
  return true;
}

module.exports = homeworksService;