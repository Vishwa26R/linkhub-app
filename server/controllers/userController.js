import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

// @desc   Register a new user
// @route  POST /api/users/register
// @access Public
export const registerUser = async (req, res) => {
  // We'll need to read data from the request body, which requires a middleware
  const { username, email, password } = req.body;

  try {
    // 1. Check if the user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      // If the user exists, send an error response
      return res.status(400).json({ message: 'User already exists' });
    }

    // 2. Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Create the new user in the database
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // 4. If user creation is successful, send back some user data
    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        message: 'User registered successfully!',
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};