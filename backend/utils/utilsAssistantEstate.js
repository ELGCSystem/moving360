import jwt from 'jsonwebtoken';

export const generateToken = (assistant) => {
  return jwt.sign(
    {
      _id: assistant._id,
      name: assistant.name,
      email: assistant.email,
      dni: assistant.dni,
      tel: assistant.tel,
      mobile: assistant.mobile,
      isAdmin: assistant.isAdmin,
      isBuyer: assistant.isBuyer,
      isOwner: assistant.isOwner,
      isAssistant: assistant.isAssistant,
      estate: assistant.estate
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
