import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Traditional from '../../models/realEstates/traditionalModel.js';
import { generateToken } from '../../../utils/realEstates/utilsTraditional.js';

const traditionalRouter = express.Router();

//Mostrar Registro completo de Usuarios Inmobiliarias Tradicionales
traditionalRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const traditional = await Traditional.find();
    res.send(traditional);
  })
);

//Registro de Usuarios Inmobiliarias Tradicionales
traditionalRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const traditional = new Traditional({
      name: req.body.name,
      nameRunner: req.body.nameRunner,
      numTuition: req.body.nameTuition,
      cuit: req.body.cuit,
      categoryAfip: req.body.categoryAfip,
      address: req.body.address,
      email: req.body.email,
      tel: req.body.email,
      mobile: req.body.mobile,
      password: bcrypt.hashSync(req.body.password, 8),
      numClient: req.body.numClient,
      state: req.body.state,
      namePrincipal: req.body.namePrincipal,
      attrib: req.body.attrib,
      role: req.body.role,
      realEstate: req.body.realEstate,
    });
    const createdTraditional = await traditional.save();
    res.send({
      _id: createdTraditional._id,
      name: createdTraditional.name,
      nameRunner: createdTraditional.nameRunner,
      numTuition: createdTraditional.numTuition,
      cuit: createdTraditional.cuit,
      categoryAfip: createdTraditional.categoryAfip,
      address: createdTraditional.address,
      email: createdTraditional.email,
      tel: createdTraditional.tel,
      mobile: createdTraditional.mobile,
      numClient: createdTraditional.numClient,
      state: createdTraditional.state,
      namePrincipal: createdTraditional.namePrincipal,
      attrib: createdTraditional.attrib,
      role: createdTraditional.role,
      realEstate: createdTraditional.realEstate,
      token: generateToken(createdTraditional),
    });
  })
);

//Actualización de Usuarios Inmobiliarias Tradicionales
traditionalRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const {
      name,
      nameRunner,
      numTuition,
      cuit,
      categoryAfip,
      address,
      email,
      tel,
      mobile,
      numClient,
      state,
      namePrincipal,
      attrib,
      role,
      realEstate,
    } = req.body;
    const traditionalUpdated = await Traditional.findByIdAndUpdate(
      _id,
      {
        $set: {
          name,
          nameRunner,
          numTuition,
          cuit,
          categoryAfip,
          address,
          email,
          tel,
          mobile,
          numClient,
          state,
          namePrincipal,
          attrib,
          role,
          realEstate,
        },
      },
      { useFindAndModify: false }
    );
    res.send(`${traditionalUpdated.name} updated`);
  })
);

//Eliminación de Usuarios Inmobiliarias Tradicionales
traditionalRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await TransformStream.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default traditionalRouter;
