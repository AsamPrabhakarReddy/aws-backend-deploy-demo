const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

// Get all users
router.get('/', getUsers);

// Create a new user
router.post('/createUser', createUser);

module.exports = router;
