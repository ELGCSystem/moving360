import jwt from 'jsonwebtoken';

export const generateToken = (chat) => {
  return jwt.sign(
    {
      members: [ chat.senderId, chat.receiverId ],
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};