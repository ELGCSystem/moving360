import jwt from 'jsonwebtoken';

export const generateToken = (terrain) => {
  return jwt.sign(
    {
      _id: terrain._id,
      dataBasic: terrain.dataBasic,
      dataEntrepreneurship: terrain.dataEntrepreneurship,
      dataCountry: terrain.dataCountry,
      surface: terrain.surface,
      location: terrain.location,
      generalFeatures: terrain.generalFeatures,
      installations: terrain.installations,
      services: terrain.services,
      multimedia: terrain.multimedia,
      additionalInformation: terrain.additionalInformation,
      contactOwner: terrain.contactOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};