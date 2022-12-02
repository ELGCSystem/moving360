import jwt from 'jsonwebtoken';

export const generateToken = (house) => {
  return jwt.sign(
    {
      _id: house._id,
      dateBasic: house.dateBasic,
      surface: house.surface,
      location: house.location,
      mainFeatures: house.mainFeatures,
      general: house.general,
      otherEnvironments: house.otherEnvironments,
      installations: house.installations,
      services: house.services,
      multimedia: house.multimedia,
      additionalInformation: house.additionalInformation,
      contactOwner: house.contactOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
