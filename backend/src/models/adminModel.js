import mongoose, { Schema } from 'mongoose';

const adminSchema = new mongoose.Schema(
  [
    {
      name: { type: String, trim: true, required: true },
      email: { type: String, trim: true, required: true, unique: true },
      emailToken: { type: String, trim: true, required: false, unique: true },
      password: { type: String, trim: true, required: true },
      dni: { type: String, trim: true, required: true },
      tel: { type: String, trim: true, required: true },
      mobile: { type: String, required: true },
      isAdmin: { type: Boolean, required: true, default: false },
      isBuyer: { type: Boolean, required: true, default: false },
      isOwner: { type: Boolean, required: true, default: false },
      verified: { type: Boolean, required: true, default: false },
    },
  ],
  {
    timestamps: true,
  }
);

const Admin = mongoose.models.users || mongoose.model('users', adminSchema);
export default Admin;
