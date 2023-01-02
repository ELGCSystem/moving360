import jwt from 'jsonwebtoken';

export const generateToken = (phApartment) => {
  return jwt.sign(
    {
      _id: phApartment._id,
      dataBasic: phApartment.dataBasic,
      dataEntrepreneurship: phApartment.dataEntrepreneurship,
      dataCountry: phApartment.dataCountry,
      surface: phApartment.surface,
      location: phApartment.location,
      mainFeatures: phApartment.mainFeatures,
      generalFeatures: phApartment.generalFeatures,
      otherEnvironments: phApartment.otherEnvironments,
      installations: phApartment.installations,
      services: phApartment.services,
      multimedia: phApartment.multimedia,
      additionalInformation: phApartment.additionalInformation,
      contactOwner: phApartment.contactOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
