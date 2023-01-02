import jwt from 'jsonwebtoken';

export const generateToken = (goodwill) => {
  return jwt.sign(
    {
      _id: goodwill._id,
      dataBasic: goodwill.dataBasic,
      dataCountry: goodwill.dataCountry,
      surface: goodwill.surface,
      location: goodwill.location,
      mainFeatures: goodwill.mainFeatures,
      generalFeatures: goodwill.generalFeatures,
      otherEnvironments: goodwill.otherEnvironments,
      multimedia: goodwill.multimedia,
      additionalInformation: goodwill.additionalInformation,
      contactOwner: goodwill.contactOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
