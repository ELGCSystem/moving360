import jwt from 'jsonwebtoken';

export const generateToken = (apartment) => {
  return jwt.sign(
    {
      _id: apartment._id,
      dataBasic: apartment.dataBasic,
      dataEntrepreneurship: apartment.dataEntrepreneurship,
      dataCountry: apartment.dataCountry,
      surface: apartment.surface,
      location: apartment.location,
      mainFeatures: apartment.mainFeatures,
      generalFeatures: apartment.generalFeatures,
      otherEnvironments: apartment.otherEnvironments,
      installations: apartment.installations,
      services: apartment.services,
      building: apartment.building,
      multimedia: apartment.multimedia,
      additionalInformation: apartment.additionalInformation,
      contactOwner: apartment.contactOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
