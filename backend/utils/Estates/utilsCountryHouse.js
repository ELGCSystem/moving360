import jwt from 'jsonwebtoken';

export const generateToken = (countryHouse) => {
  return jwt.sign(
    {
      _id: countryHouse._id,
      dataBasic: countryHouse.dataBasic,
      surface: countryHouse.surface,
      location: countryHouse.location,
      mainFeatures: countryHouse.mainFeatures,
      generalFeatures: countryHouse.generalFeatures,
      otherEnvironments: countryHouse.otherEnvironments,
      installations: countryHouse.installations,
      services: countryHouse.services,
      multimedia: countryHouse.multimedia,
      additionalInformation: countryHouse.additionalInformation,
      contactOwner: countryHouse.contactOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
