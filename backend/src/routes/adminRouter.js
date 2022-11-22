import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Admin from '../models/adminModel.js';
import { generateToken } from '../../utils.js';

const adminRouter = express.Router();

//Mostrar Registro completo de Usuarios Administradores
adminRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const admin = await Admin.find();
    res.send(admin);
  })
);

//Registro de Usuarios Administradores
adminRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const admin = new Admin({
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
    const createdAdmin = await admin.save();
    res.send({
      _id: createdAdmin._id,
      name: createdAdmin.name,
      email: createdAdmin.email,
      dni: createdAdmin.dni,
      tel: createdAdmin.tel,
      mobile: createdAdmin.mobile,
      isAdmin: createdAdmin.isAdmin,
      isBuyer: createdAdmin.isBuyer,
      isOwner: createdAdmin.isOwner,
      isSeller: createdAdmin.isSeller,
      token: generateToken(createdAdmin),
    });
  })
);

//Actualización de Usuarios
adminRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const { name, email, password, dni, tel, mobile } = req.body;
    const adminUpdated = await Admin.findByIdAndUpdate(
      _id,
      {
        $set: { name, email, password, dni, tel, mobile },
      },
      { useFindAndModify: false }
    );
    res.send(`${adminUpdated.name} updated`);
  })
);

//Eliminación de Usuarios Administradores
adminRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Admin.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default adminRouter;
