import jwt from 'jsonwebtoken';

export const generateToken = (hotel) => {
  return jwt.sign(
    {
      _id: hotel._id,
      dataBasic: hotel.dataBasic,
      surface: hotel.surface,
      location: hotel.location,
      mainFeatures: hotel.mainFeatures,
      generalFeatures: hotel.generalFeatures,
      otherEnvironments: hotel.otherEnvironments,
      installations: hotel.installations,
      services: hotel.services,
      multimedia: hotel.multimedia,
      additionalInformation: hotel.additionalInformation,
      contactOwner: hotel.contactOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};