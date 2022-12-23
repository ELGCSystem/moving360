import jwt from 'jsonwebtoken';

export const generateToken = (conversation) => {
  return jwt.sign(
    {
      members: [ conversation.senderId, conversation.receiverId ],
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};