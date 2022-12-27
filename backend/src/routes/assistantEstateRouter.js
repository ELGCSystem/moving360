import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Assistant from '../models/assistantEstateModel.js';
import { generateToken } from '../../utils/utilsAssistantEstate.js';

const assistantEstateRouter = express.Router();

//Mostrar Registro completo de Usuarios
assistantEstateRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const assistant = await Assistant.find();
    res.send(assistant);
  })
);

//Inicio de Sesión de Usuarios
assistantEstateRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const assistant = await Assistant.findOne({ email: req.body.email });
    if (assistant) {
      if (bcrypt.compareSync(req.body.password, admin.password)) {
        res.send({
          _id: assistant._id,
          name: assistant.name,
          email: assistant.email,
          dni: assistant.dni,
          tel: assistant.tel,
          mobile: assistant.mobile,
          isAdmin: assistant.isAdmin,
          isBuyer: assistant.isBuyer,
          isOwner: assistant.isOwner,
          token: generateToken(assistant),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Email o Contraseña incorrectos' });
  })
);

//Registro de Usuarios
assistantEstateRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const assistant = new Assistant({
      name: req.body.name,
      email: req.body.email,
      emailToken: crypto.randomBytes(64).toString('hex'),
      password: bcrypt.hashSync(req.body.password, 8),
      dni: req.body.dni,
      tel: req.body.tel,
      mobile: req.body.mobile,
      isAdmin: req.body.isAdmin,
      isBuyer: req.body.isBuyer,
      isOwner: req.body.isOwner,
      isAssistant: req.body.isAssistant,
      estate: req.body.estate
    });
    const createdAssistant = await assistant.save();

    res.send({
      _id: createdAssistant._id,
      name: createdAssistant.name,
      email: createdAssistant.email,
      dni: createdAssistant.dni,
      tel: createdAssistant.tel,
      mobile: createdAssistant.mobile,
      isAdmin: createdAssistant.isAdmin,
      isBuyer: createdAssistant.isBuyer,
      isOwner: createdAssistant.isOwner,
      token: generateToken(createdAssistant),
    });
  })
);

//Actualización de Usuarios
assistantEstateRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const { name, email, password, dni, tel, mobile } = req.body;
    const assistantUpdated = await Assistant.findByIdAndUpdate(
      _id,
      {
        $set: { name, email, password, dni, tel, mobile },
      },
      { useFindAndModify: false }
    );
    res.send(`${assistantUpdated.name} updated`);
  })
);

//Eliminación de Usuarios
assistantEstateRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Assistant.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default assistantEstateRouter;
