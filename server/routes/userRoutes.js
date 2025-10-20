import express from 'express';
// We will create this controller file next
import { registerUser } from '../controllers/userController.js';

const router = express.Router();

// When a POST request is made to '/api/users/register', run the registerUser function
router.post('/register', registerUser);

export default router;
