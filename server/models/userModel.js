import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true // Removes whitespace from both ends
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true
  },
  password: { 
    type: String, 
    required: true 
  },
  // Customization fields for their page
  profileTitle: { 
    type: String, 
    default: 'Welcome to my page!' 
  },
  theme: { 
    type: String, 
    default: 'light' // e.g., 'light', 'dark', 'pink'
  }
}, { 
  timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
});

const User = mongoose.model('User', userSchema);

export default User;