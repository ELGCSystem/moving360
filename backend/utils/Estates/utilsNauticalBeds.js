import jwt from 'jsonwebtoken';

export const generateToken = (nauticalBeds) => {
  return jwt.sign(
    {
      _id: nauticalBeds._id,
      dataBasic: nauticalBeds.dataBasic,
      dataCountry: nauticalBeds.dataCountry,
      surface: nauticalBeds.surface,
      location: nauticalBeds.location,
      mainFeatures: nauticalBeds.mainFeatures,
      generalFeatures: nauticalBeds.generalFeatures,
      installations: nauticalBeds.installations,
      services: nauticalBeds.services,
      multimedia: nauticalBeds.multimedia,
      additionalInformation: nauticalBeds.additionalInformation,
      contactOwner: nauticalBeds.contactOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
