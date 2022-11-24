import jwt from 'jsonwebtoken';

export const generateToken = (owner) => {
  return jwt.sign(
    {
      _id: owner._id,
      name: owner.name,
      email: owner.email,
      dni: owner.dni,
      tel: owner.tel,
      mobile: owner.mobile,
      isAdmin: owner.isAdmin,
      isBuyer: owner.isBuyer,
      isOwner: owner.isOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
