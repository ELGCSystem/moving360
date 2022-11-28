import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Decentralized from '../../models/realEstates/decentralizedFranchiseModel.js';
import { generateToken } from '../../../utils/realEstates/utilsDecentralized.js';

const decentralizedRouter = express.Router();

//Mostrar Registro completo de Usuarios Administradores
decentralizedRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const decentralized = await Decentralized.find();
    res.send(decentralized);
  })
);

//Registro de Usuarios Administradores
decentralizedRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const decentralized = new Decentralized({
      nameFranchise: req.body.nameFranchise,
      nameFranchisee: req.body.nameFranchisee,
      nameEnterprise: req.body.nameEnterprise,
      cuit: req.body.cuit,
      nameBroker: req.body.nameBroker,
      nameRunner: req.body.nameRunner,
      numTuition: req.body.numTuition,
      nameAdministration: req.body.numTuition,
      mobileAdministration: req.body.mobileAdministration,
      address: req.body.address,
      nameAgent: req.body.nameAgent,
      mobileAgent: req.body.mobileAgent,
      emailAgent: req.body.emailAgent,
      password: bcrypt.hashSync(req.body.password, 8),
      numClient: req.body.numClient,
      state: req.body.state,
      categoryAfip: req.body.categoryAfip,
      namePrincipal: req.body.namePrincipal,
      attrib: req.body.attrib,
      role: req.body.role,
      realEstate: req.body.realEstate,
    });
    const createdDecentralized = await decentralized.save();
    res.send({
      _id: createdDecentralized._id,
      nameFranchise: createdDecentralized.nameFranchise,
      nameFranchisee: createdDecentralized.nameFranchisee,
      nameEnterprise: createdDecentralized.nameEnterprise,
      cuit: createdDecentralized.cuit,
      nameBroker: createdDecentralized.nameBroker,
      nameRunner: createdDecentralized.nameRunner,
      numTuition: createdDecentralized.numTuition,
      nameAdministration: createdDecentralized.numTuition,
      mobileAdministration: createdDecentralized.mobileAdministration,
      address: createdDecentralized.address,
      nameAgent: createdDecentralized.nameAgent,
      mobileAgent: createdDecentralized.mobileAgent,
      emailAgent: createdDecentralized.emailAgent,
      numClient: createdDecentralized.numClient,
      state: createdDecentralized.state,
      categoryAfip: createdDecentralized.categoryAfip,
      namePrincipal: createdDecentralized.namePrincipal,
      attrib: createdDecentralized.attrib,
      role: createdDecentralized.role,
      realEstate: createdDecentralized.realEstate,
      token: generateToken(createdDecentralized),
    });
  })
);

//Actualización de Usuarios
decentralizedRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const {
      nameFranchise,
      nameFranchisee,
      nameEnterprise,
      cuit,
      nameBroker,
      nameRunner,
      numTuition,
      nameAdministration,
      mobileAdministration,
      address,
      nameAgent,
      mobileAgent,
      emailAgent,
      numClient,
      state,
      categoryAfip,
      namePrincipal,
      attrib,
      role,
      realEstate,
    } = req.body;
    const decentralizedUpdated = await Decentralized.findByIdAndUpdate(
      _id,
      {
        $set: {
          nameFranchise,
          nameFranchisee,
          nameEnterprise,
          cuit,
          nameBroker,
          nameRunner,
          numTuition,
          nameAdministration,
          mobileAdministration,
          address,
          nameAgent,
          mobileAgent,
          emailAgent,
          numClient,
          state,
          categoryAfip,
          namePrincipal,
          attrib,
          role,
          realEstate,
        },
      },
      { useFindAndModify: false }
    );
    res.send(`${decentralizedUpdated.name} updated`);
  })
);

//Eliminación de Usuarios Administradores
decentralizedRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Decentralized.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default decentralizedRouter;
