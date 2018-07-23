import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

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
StudentSchema.plugin(mongoosePaginate);
export default mongoose.model('Student', StudentSchema);