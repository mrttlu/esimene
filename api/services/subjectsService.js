const db = require('../../db');

const subjectsService = {};

subjectsService.read = () => {
  return subjects;
}

subjectsService.readById = (id) => {
  return subjects[id];
}

subjectsService.create = async (subject, email) => {
  await db.collection('users').doc(email).collection('subjects').doc().set(subject);
  return subject;
}

subjectsService.update = (subject) => {
  // Check if optional data exists
  if (subject.name) {
    // Change user data in 'database'
    subjects[subject.id].name = subject.name;
  }
  // Check if optional data exists
  if ((subject.lecturerId || subject.lecturerId === 0)) {
      // Change user data in 'database'
      subjects[subject.id].lecturerId = subject.lecturerId;
  }
  return subjects[subject.id];
}

subjectsService.delete = (id) => {
  subjects.splice(id, 1);
  return true;
}

module.exports = subjectsService;