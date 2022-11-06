import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    isAdmin: { type: Schema.ObjectId, ref: 'admin' },
    isOwner: { type: Schema.ObjectId, ref: 'owner' },
    isBuyer: { type: Schema.ObjectId, ref: 'buyer' },
    isSeller: { type: Schema.ObjectId, ref: 'seller' },
  },
  {
    timestamps: true,
  }
);

const adminSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  secondName: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, trim: true, required: true },
  dni: { type: String, trim: true, required: true },
  tel: { type: String, trim: true, required: true },
  mobile: { type: String, required: true },
});

const admin = mongoose.model('admin', adminSchema);

const ownerSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  secondName: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, trim: true, required: true },
  dni: { type: String, trim: true, required: true },
  tel: { type: String, trim: true, required: true },
  mobile: { type: String, required: true },
});

const owner = mongoose.model('owner', ownerSchema);

const buyerSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  secondName: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, trim: true, required: true },
  dni: { type: String, trim: true, required: true },
  tel: { type: String, trim: true, required: true },
  mobile: { type: String, required: true },
});

const buyer = mongoose.model('buyer', buyerSchema);

const sellerSchema = new mongoose.Schema({
  nameEnterprise: { type: String, trim: true, required: true },
  nameBroker: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, trim: true, required: true },
  dni: { type: String, trim: true, required: true },
  cuit: { type: String, trim: true, required: true },
  numTuition: { type: String, trim: true, required: true },
  address: { type: Schema.ObjectId, ref: 'address' },
  tel: { type: String, trim: true, required: true },
  mobile: { type: String, required: true },
  numberClient: { type: String, trim: true, required: true },
  state: { type: String, trim: true, required: true },
  namePrincipal: { type: String, trim: true, required: true },
  attribClient: { type: String, trim: true, required: true },
});

const seller = mongoose.model('seller', sellerSchema);

const addressSchema = new mongoose.Schema({
  street: { type: String, trim: true, required: true },
  number: { type: String, trim: true, required: true },
  flat: { type: String, trim: true, required: true },
  department: { type: String, trim: true, required: true },
  number: { type: String, trim: true, required: true },
  neighborhood: { type: String, trim: true, required: true },
  number: { type: String, trim: true, required: true },
  location: { type: String, trim: true, required: true },
  district: { type: String, trim: true, required: true },
  number: { type: String, trim: true, required: true },
  province: { type: String, trim: true, required: true },
  attrib: { type: Schema.ObjectId, ref: 'attrib' },
});

const address = mongoose.model('address', addressSchema);

const attribSchema = mongoose.Schema({
  payment: { type: String, trim: true, required: true },
  method: { type: String, trim: true, required: true },
  billing: { type: String, trim: true, required: true },
  type: { type: String, trim: true, required: true },
});

const attrib = mongoose.model('attrib', attribSchema);

const User = mongoose.model('User', userSchema);
export default User;
