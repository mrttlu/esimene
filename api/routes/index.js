const express = require('express');
const router = express.Router();
// Import controllers
const pingController = require('../controllers/pingController');
const usersController = require('../controllers/usersController');
const lecturersController = require('../controllers/lecturersController');
const subjectsController = require('../controllers/subjectsController');
const homeworksController = require('../controllers/homeworksController');
const authController = require('../controllers/authController');

const isLoggedIn = require('../middlewares/isLoggedIn');

// Routes
router.get('/api/ping', pingController.ping);
router.post('/api/login', authController.login);
router.post('/api/users', usersController.create);

router.use(isLoggedIn);

router.get('/api/users', usersController.read);
router.get('/api/users/:id', usersController.readById);
router.put('/api/users', usersController.update);
router.delete('/api/users', usersController.delete);

router.get('/api/lecturers', lecturersController.read);
router.get('/api/lecturers/:id', lecturersController.readById);
router.post('/api/lecturers', lecturersController.create);
router.put('/api/lecturers', lecturersController.update);
router.delete('/api/lecturers', lecturersController.delete);

router.get('/api/subjects', subjectsController.read);
router.get('/api/subjects/:id', subjectsController.readById);
router.post('/api/subjects', subjectsController.create);
router.put('/api/subjects', subjectsController.update);
router.delete('/api/subjects', subjectsController.delete);

router.get('/api/homeworks', homeworksController.read);
router.get('/api/homeworks/:id', homeworksController.readById);
router.post('/api/homeworks', homeworksController.create);
router.put('/api/homeworks', homeworksController.update);
router.delete('/api/homeworks', homeworksController.delete);

module.exports = router;