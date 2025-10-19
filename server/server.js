import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// Initialize our Express app
const app = express();

// A simple test route to make sure the server is working
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Get the port from our environment variables, or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server and listen for requests on the specified port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));