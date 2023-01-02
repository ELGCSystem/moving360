import jwt from 'jsonwebtoken';

export const generateToken = (field) => {
  return jwt.sign(
    {
      _id: field._id,
      dataBasic: field.dataBasic,
      surface: field.surface,
      location: field.location,
      mainFeatures: field.mainFeatures,
      generalFeatures: field.generalFeatures,
      installations: field.installations,
      services: field.services,
      multimedia: field.multimedia,
      additionalInformation: field.additionalInformation,
      contactOwner: field.contactOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
