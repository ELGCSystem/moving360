import jwt from 'jsonwebtoken';

export const generateToken = (admin) => {
  return jwt.sign(
    {
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      dni: admin.dni,
      tel: admin.tel,
      mobile: admin.mobile,
      isAdmin: admin.isAdmin,
      isBuyer: admin.isBuyer,
      isOwner: admin.isOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
