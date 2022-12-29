import jwt from 'jsonwebtoken';

export const generateToken = (garage) => {
  return jwt.sign(
    {
      _id: garage._id,
      dataBasic: garage.dataBasic,
      dataEntrepreneurship: garage.dataEntrepreneurship,
      dataCountry: garage.dataCountry,
      surface: garage.surface,
      location: garage.location,
      mainFeatures: garage.mainFeatures,
      multimedia: garage.multimedia,
      additionalInformation: garage.additionalInformation,
      contactOwner: garage.contactOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
