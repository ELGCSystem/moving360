import jwt from 'jsonwebtoken';

export const generateToken = (traditional) => {
  return jwt.sign(
    {
      _id: traditional._id,
      name: traditional.name,
      nameRunner: traditional.nameRunner,
      numTuition: traditional.numTuition,
      cuit: traditional.cuit,
      categoryAfip: traditional.categoryAfip,
      address: traditional.address,
      email: traditional.email,
      tel: traditional.tel,
      mobile: traditional.mobile,
      numClient: traditional.numClient,
      state: traditional.state,
      namePrincipal: traditional.namePrincipal,
      attrib: traditional.attrib,
      role: traditional.role,
      realEstate: traditional.realEstate,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
