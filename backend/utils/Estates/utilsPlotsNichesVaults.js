import jwt from 'jsonwebtoken';

export const generateToken = (plotsNichesVaults) => {
  return jwt.sign(
    {
      _id: plotsNichesVaults._id,
      dataBasic: plotsNichesVaults.dataBasic,
      surface: plotsNichesVaults.surface,
      location: plotsNichesVaults.location,
      mainFeatures: plotsNichesVaults.mainFeatures,
      generalFeatures: plotsNichesVaults.generalFeatures,
      multimedia: plotsNichesVaults.multimedia,
      additionalInformation: plotsNichesVaults.additionalInformation,
      contactOwner: plotsNichesVaults.contactOwner,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};