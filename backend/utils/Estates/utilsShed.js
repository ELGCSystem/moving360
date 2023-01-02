import jwt from 'jsonwebtoken';

export const generateToken = (shed) => {
  return jwt.sign(
    {
      _id: shed._id,
      dataBasic: shed.dataBasic,
      surface: shed.surface,
      location: shed.location,
      mainFeatures: shed.mainFeatures,
      generalFeatures: shed.generalFeatures,
      otherEnvironments: shed.otherEnvironments,
      installations: shed.installations,
      services: shed.services,
      multimedia: shed.multimedia,
      additionalInformation: shed.additionalInformation,
      contactOwner: shed.contactOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};