import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Owner from '../models/ownerModel.js';
import { generateToken } from '../../utils.js';

const ownerRouter = express.Router();

//Mostrar Registro completo de Usuarios Dueños
ownerRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const owner = await Owner.find();
    res.send(owner);
  })
);

//Registro de Usuarios Dueños
ownerRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const owner = new Owner({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      dni: req.body.dni,
      tel: req.body.tel,
      mobile: req.body.mobile,
      isAdmin: req.body.isAdmin,
      isBuyer: req.body.isBuyer,
      isOwner: req.body.isOwner,
      isSeller: req.body.isSeller,
    });
    const createdOwner = await owner.save();
    res.send({
      _id: createdOwner._id,
      name: createdOwner.name,
      email: createdOwner.email,
      dni: createdOwner.dni,
      tel: createdOwner.tel,
      mobile: createdOwner.mobile,
      isAdmin: createdOwner.isAdmin,
      isBuyer: createdOwner.isBuyer,
      isOwner: createdOwner.isOwner,
      isSeller: createdOwner.isSeller,
      token: generateToken(createdOwner),
    });
  })
);

//Actualización de Usuarios Dueños
ownerRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const { name, email, password, dni, tel, mobile } = req.body;
    const ownerUpdated = await Owner.findByIdAndUpdate(
      _id,
      {
        $set: { name, email, password, dni, tel, mobile },
      },
      { useFindAndModify: false }
    );
    res.send(`${ownerUpdated.name} updated`);
  })
);

//Eliminación de Usuarios Dueños
ownerRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Owner.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default ownerRouter;