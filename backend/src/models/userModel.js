import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true },
    name: { type: String, trim: true, required: true },
    dni: { type: String, trim: true, required: true },
    tel: { type: String, trim: true, required: true },
    mobile: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    isBuyer: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
export default User;
