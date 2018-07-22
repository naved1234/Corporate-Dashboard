import mongoose from 'mongoose';

const { Schema } = mongoose;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  technology: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model('Student', StudentSchema);