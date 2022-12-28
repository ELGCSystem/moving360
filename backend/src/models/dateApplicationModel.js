import mongoose, { Schema } from 'mongoose';

const dateSchema = new mongoose.Schema(
  {
    date: { type: String, trim: true, required: true },
    time: { type: String, trim: true, required: true },
  },
  {
    timestamps: true,
  }
);

const Date = mongoose.model('dates', dateSchema);
export default Date;
