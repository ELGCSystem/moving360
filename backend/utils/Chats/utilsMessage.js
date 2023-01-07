import jwt from 'jsonwebtoken';

export const generateToken = (message) => {
  return jwt.sign(
    {
      chatId: message.chatId,
      sender: message.sender,
      text: message.text,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};