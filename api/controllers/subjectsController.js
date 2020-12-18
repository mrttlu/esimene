const subjectsService = require('../services/subjectsService');
const subjectsController = {};

// Endpoint for getting list of available subjects
// GET - subjects
// Required values: none
// Optional values: none
// Returns: status 200 - OK and list of subjects in response body
subjectsController.read = async (req, res) => {
  const userId = req.user;
  // Get list of subjects
  const subjects = await subjectsService.read(userId);
  // Return list of subjects
  res.status(200).json({
      success: true,
      subjects
  });
}

// Endpoint for getting subject specified by id
// GET - subjects
// Required: id
// Optional: none
// Returns: status 200 - OK and subject data in response body
subjectsController.readById = async (req, res) => {
  const id = req.params.id;
  const userId = req.user;
  const subject = await subjectsService.readById(id, userId);
  if (subject) {
  // Return subject with specified id
    res.status(200).json({
        success: true,
        subject
    });
  } else {
    // Return error
    res.status(400).json({
        success: false,
        message: 'No subject found'
    });
  }
}

// Endpoint for creating new subject
// POST - subjects
// Required values: name, lecturerId, userId
// Optional values: none
// Returns:
//  Success: status 201 - Created and lecturer data in response body
//  Fail: status 400 - Bad Request and error message in response body
subjectsController.create = async (req, res) => {
  // Check if provided data is expected type (typeof) and has length when whitespace is removed (.trim().length)
  const name = typeof(req.body.name) === 'string' && req.body.name.trim().length > 0 ? req.body.name : false;
  const lecturerId = typeof(req.body.lecturerId) === 'string' ? req.body.lecturerId : false;
  const userId = req.user;
  // Check if required data exists
  if (name && lecturerId) {
      // Create new json with user data
      const newSubject = {
          name,
          lecturerId
      };
      const subjectId = await subjectsService.create(newSubject, userId);
      // Return data
      res.status(201).json({
          success: true,
          subjectId
      });
  } else {
      // Return error message
      res.status(400).json({
          success: false,
          message: 'Required field(s) missing or invalid'
      });
  }
}

// Endpoint for updating subjects specified by id
// PUT - subjects
// Required: id
// Optional: name, lecturerId
// Returns:
//  Success: status 200 - OK and subject data in response body
//  Fail: status 400 - Bad Request and error message in response body
subjectsController.update = async (req, res) => {
  // Next lines checking if provided data is expected type (typeof) and has length when whitespace is removed (.trim().length)
  const id = typeof(req.body.id) === 'string' ? req.body.id : false;
  const name = typeof(req.body.name) === 'string' && req.body.name.trim().length > 0 ? req.body.name : false;
  const lecturerId = typeof(req.body.lecturerId) === 'string' ? req.body.lecturerId : false;
  const userId = req.user;
  // Check if required data exists
  if(id) {
      const subject = {
        id,
        name,
        lecturerId
      };
      const result = await subjectsService.update(subject, userId);
      if (result) {
        // Return success
        res.status(200).json({
            success: result
        });
      } else {
        res.status(400).json({
            success: false,
            message: 'Subject does not exists.'
        });
      }

  } else {
      // Return error message
      res.status(400).json({
          success: false,
          message: 'Required field(s) missing or invalid'
      });
  }
}

// Endpoint for deleting subject specified by id
// DELETE - subjects
// Required: id
// Optional: none
// Returns:
//  Success: status 200 - OK and { success: true } message
//  Fail: status 400 - Bad Request and error message in response body
subjectsController.delete = async (req, res) => {
  // Check if required data exists
  const id = typeof(req.body.id) === 'string' ? req.body.id : false;
  const userId = req.user;
  if(id) {
      const deleted = await subjectsService.delete(id, userId);
      if (deleted) {
        // Return success message
        res.status(200).json({
            success: deleted
        });
      } else {
        res.status(400).json({
            success: false,
            message: 'No subject found.'
        });
      }
  } else {
      // Return error message
      res.status(400).json({
          success: false,
          message: 'Required field(s) missing or invalid'
      });
  }
}

module.exports = subjectsController;