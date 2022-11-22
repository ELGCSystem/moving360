import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Centralized from '../../models/realEstates/centralizedFranchiseModel.js';
import { generateToken } from '../../../utils.js';

const centralizedRouter = express.Router();

//Mostrar Registro completo de Usuarios Administradores
centralizedRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const centralized = await Centralized.find();
    res.send(centralized);
  })
);

//Registro de Usuarios Administradores
centralizedRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const centralized = new Centralized({
      name: req.body.name,
      nameRunner: req.body.nameRunner,
      numTuition: req.body.numTuition,
      cuit: req.body.cuit,
      categoryAfip: req.body.categoryAfip,
      address: req.body.address,
      email: req.body.email,
      tel: req.body.tel,
      mobile: req.body.mobile,
      password: bcrypt.hashSync(req.body.password, 8),
      numClient: req.body.numClient,
      state: req.body.state,
      namePrincipal: req.body.namePrincipal,
      attrib: req.body.attrib,
      role: req.body.role,
      realEstate: req.body.realEstate,
    });
    const createdCentralized = await centralized.save();
    res.send({
      _id: createdCentralized._id,
      name: createdCentralized.name,
      nameRunner: createdCentralized.nameRunner,
      numTuition: createdCentralized.numTuition,
      cuit: createdCentralized.cuit,
      categoryAfip: createdCentralized.categoryAfip,
      address: createdCentralized.address,
      email: createdCentralized.email,
      tel: createdCentralized.tel,
      mobile: createdCentralized.mobile,
      numClient: createdCentralized.numClient,
      state: createdCentralized.state,
      namePrincipal: createdCentralized.namePrincipal,
      attrib: createdCentralized.attrib,
      role: createdCentralized.role,
      realEstate: createdCentralized.realEstate,
      token: generateToken(createdCentralized),
    });
  })
);

//Actualización de Usuarios
centralizedRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const {
      name,
      nameRunner,
      nameTuition,
      cuit,
      categoryAfip,
      address,
      email,
      tel,
      mobile,
      password,
      numClient,
      state,
      namePrincipal,
      attrib,
      role,
      realEstate,
    } = req.body;
    const centralizedUpdated = await Centralized.findByIdAndUpdate(
      _id,
      {
        $set: {
          name,
          nameRunner,
          nameTuition,
          cuit,
          categoryAfip,
          address,
          email,
          tel,
          mobile,
          password,
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
    res.send(`${centralizedUpdated.name} updated`);
  })
);

//Eliminación de Usuarios Administradores
centralizedRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Centralized.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default centralizedRouter;
