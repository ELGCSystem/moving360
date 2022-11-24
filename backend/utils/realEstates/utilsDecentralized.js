import jwt from 'jsonwebtoken';

export const generateToken = (decentralized) => {
  return jwt.sign(
    {
      _id: decentralized._id,
      nameFranchise: decentralized.nameFranchise,
      nameFranchisee: decentralized.nameFranchisee,
      nameEnterprise: decentralized.nameEnterprise,
      cuit: decentralized.cuit,
      nameBroker: decentralized.nameBroker,
      nameRunner: decentralized.nameRunner,
      numTuition: decentralized.numTuition,
      nameAdministration: decentralized.numTuition,
      mobileAdministration: decentralized.mobileAdministration,
      address: decentralized.address,
      nameAgent: decentralized.nameAgent,
      mobileAgent: decentralized.mobileAgent,
      emailAgent: decentralized.emailAgent,
      numClient: decentralized.numClient,
      state: decentralized.state,
      categoryAfip: decentralized.categoryAfip,
      namePrincipal: decentralized.namePrincipal,
      attrib: decentralized.attrib,
      role: decentralized.role,
      realEstate: decentralized.realEstate,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
