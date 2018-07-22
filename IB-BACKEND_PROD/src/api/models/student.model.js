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
  }
});

export default mongoose.model('Student', StudentSchema);