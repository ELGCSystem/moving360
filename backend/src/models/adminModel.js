import mongoose, { Schema } from 'mongoose';

const adminSchema = new mongoose.Schema(
[  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true },
    dni: { type: String, trim: true, required: true },
    tel: { type: String, trim: true, required: true },
    mobile: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    isBuyer: { type: Boolean, required: true, default: false },
    isOwner: { type: Boolean, required: true, default: false },
  }],
  {
    timestamps: true,
  }
);  

const Admin = mongoose.model('admins', adminSchema);
export default Admin;
