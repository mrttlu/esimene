const homeworksService = require('../services/homeworksService');

const homeworksController = {};

// Endpoint for getting list of available homeworks
// GET - homeworks
// Required values: none
// Optional values: none
// Returns: status 200 - OK and list of homeworks in response body
homeworksController.read = async (req, res) => {
  const userId = req.user;
  const homeworks = await homeworksService.read(userId);
  // Return list of homeworks
  res.status(200).json({
      success: true,
      homeworks
  });
}

// Endpoint for getting homework specified by id
// GET - homeworks
// Required: id
// Optional: none
// Returns: status 200 - OK and homework data in response body
homeworksController.readById = async (req, res) => {
  const id = req.params.id;
  const userId = req.user;
  const homework = await homeworksService.readById(id, userId);
  // Return homework with specified id
  res.status(200).json({
      success: true,
      homework
  });
}

// Endpoint for creating new homework
// POST - homeworks
// Required values: description, dueDate, subjectId, userId
// Optional values: none
// Returns:
//  Success: status 201 - Created and homework data in response body
//  Fail: status 400 - Bad Request and error message in response body
homeworksController.create = async (req, res) => {
  // Check if provided data is expected type (typeof) and has length when whitespace is removed (.trim().length)
  const description = typeof(req.body.description) === 'string' && req.body.description.trim().length > 0 ? req.body.description : false;
  const dueDate = new Date();
  const subjectId = typeof(req.body.subjectId) === 'string' ? req.body.subjectId : false;
  const userId = req.user;
  // Check if required data exists
  if (description && dueDate && subjectId && userId) {
      // Create new json with user data
      const newHomework = {
          description,
          dueDate
      };
      const homework = await homeworksService.create(newHomework, userId, subjectId);

      // Return data
      res.status(201).json({
          success: true,
          homework
      });
  } else {
      // Return error message
      res.status(400).json({
          success: false,
          message: 'Required field(s) missing or invalid'
      });
  }
}

// Endpoint for updating homework specified by id
// PUT - homeworks
// Required: id
// Optional: description, dueDate, subjectId
// Returns:
//  Success: status 200 - OK and subject data in response body
//  Fail: status 400 - Bad Request and error message in response body
homeworksController.update = async (req, res) => {
  // Next lines checking if provided data is expected type (typeof) and has length when whitespace is removed (.trim().length)
  const id = typeof(req.body.id) === 'number' ? req.body.id : false;
  const description = typeof(req.body.description) === 'string' && req.body.description.trim().length > 0 ? req.body.description : false;
  const dueDate = new Date();
  const subjectId = typeof(req.body.subjectId) === 'number' ? req.body.subjectId : false;
  const userId = req.user;
  // Check if required data exists
  if(id) {
    const homework = {
      id,
      description,
      subjectId
    }
    const result = await homeworksService.update(homework, userId);
    // Return updated user data
    res.status(200).json({
        success: result
    });
  } else {
      // Return error message
      res.status(400).json({
          success: false,
          message: 'Required field(s) missing or invalid'
      });
  }
}

// Endpoint for deleting homework specified by id
// DELETE - homeworks
// Required: id
// Optional: none
// Returns:
//  Success: status 200 - OK and { success: true } message
//  Fail: status 400 - Bad Request and error message in response body
homeworksController.delete = async (req, res) => {
  // Check if required data exists
  const id = typeof(req.body.id) === 'number' ? req.body.id : false;
  const userId = req.user;
  if(id) {
    const deleted = await homeworksService.delete(id);
    // Return success message
    res.status(200).json({
        success: deleted
    });
  } else {
      // Return error message
      res.status(400).json({
          success: false,
          message: 'Required field(s) missing or invalid'
      });
  }
}

module.exports = homeworksController;