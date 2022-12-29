import jwt from 'jsonwebtoken';

export const generateToken = (date) => {
  return jwt.sign(
    {
      _id: date._id,
      date: date.name,
      time: date.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
