import jwt from 'jsonwebtoken';

export const generateToken = (office) => {
  return jwt.sign(
    {
      _id: office._id,
      dataBasic: office.dataBasic,
      dataEntrepreneurship: office.dataEntrepreneurship,
      dataCountry: office.dataCountry,
      surface: office.surface,
      location: office.location,
      mainFeatures: office.mainFeatures,
      generalFeatures: office.generalFeatures,
      otherEnvironments: office.otherEnvironments,
      installations: office.installations,
      services: office.services,
      building: office.building,
      multimedia: office.multimedia,
      additionalInformation: office.additionalInformation,
      contactOwner: office.contactOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};