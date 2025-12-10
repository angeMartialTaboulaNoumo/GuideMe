const express = require('express');
const router  = express.Router();
const userConroller  = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Definition des routes 

router.get('/', userController.getAllUsers);
