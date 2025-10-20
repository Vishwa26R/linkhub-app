import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
// Import the new user routes
import userRoutes from './routes/userRoutes.js';

dotenv.config();
connectDB();
const app = express();

// Middleware to parse JSON bodies
// This MUST be before your routes are defined
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Tell the app to use the userRoutes for any URL that starts with '/api/users'
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));