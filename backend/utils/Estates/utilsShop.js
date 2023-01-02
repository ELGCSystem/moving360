import jwt from 'jsonwebtoken';

export const generateToken = (shop) => {
  return jwt.sign(
    {
      _id: shop._id,
      dataBasic: shop.dataBasic,
      dataEntrepreneurship: shop.dataEntrepreneurship,
      dataCountry: shop.dataCountry,
      surface: shop.surface,
      location: shop.location,
      mainFeatures: shop.mainFeatures,
      generalFeatures: shop.generalFeatures,
      otherEnvironments: shop.otherEnvironments,
      installations: shop.installations,
      services: shop.services,
      multimedia: shop.multimedia,
      additionalInformation: shop.additionalInformation,
      contactOwner: shop.contactOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};