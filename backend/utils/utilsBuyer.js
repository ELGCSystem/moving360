import jwt from 'jsonwebtoken';

export const generateToken = (buyer) => {
  return jwt.sign(
    {
      _id: buyer._id,
      name: buyer.name,
      email: buyer.email,
      dni: buyer.dni,
      tel: buyer.tel,
      mobile: buyer.mobile,
      isAdmin: buyer.isAdmin,
      isBuyer: buyer.isBuyer,
      isOwner: buyer.isOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
