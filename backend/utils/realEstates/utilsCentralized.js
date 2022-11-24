import jwt from 'jsonwebtoken';

export const generateToken = (centralized) => {
  return jwt.sign(
    {
      _id: centralized._id,
      name: centralized.name,
      nameRunner: centralized.nameRunner,
      numTuition: centralized.numTuition,
      cuit: centralized.cuit,
      categoryAfip: centralized.categoryAfip,
      address: centralized.address,
      email: centralized.email,
      tel: centralized.tel,
      mobile: centralized.mobile,
      numClient: centralized.numClient,
      state: centralized.state,
      namePrincipal: centralized.namePrincipal,
      attrib: centralized.attrib,
      role: centralized.role,
      realEstate: centralized.realEstate,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
