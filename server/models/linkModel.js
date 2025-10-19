import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  // This creates a relationship between the link and the user who owns it
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true, 
    ref: 'User' // Establishes a connection to our 'User' model
  },
  title: { 
    type: String, 
    required: true,
    trim: true
  },
  url: { 
    type: String, 
    required: true,
    trim: true
  },
  clicks: { 
    type: Number, 
    default: 0 
  }
}, { 
  timestamps: true 
});

const Link = mongoose.model('Link', linkSchema);

export default Link;