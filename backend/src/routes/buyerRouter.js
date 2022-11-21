import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Buyer from '../models/buyerModel.js';
import { generateToken } from '../../utils.js';

const buyerRouter = express.Router();

//Mostrar Registro completo de Usuarios Compradores
buyerRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const buyer = await Buyer.find();
    res.send(buyer);
  })
);

//Registro de Usuarios Compradores
buyerRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const buyer = new Buyer({
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
    const createdBuyer = await buyer.save();
    res.send({
      _id: createdBuyer._id,
      name: createdBuyer.name,
      email: createdBuyer.email,
      dni: createdBuyer.dni,
      tel: createdBuyer.tel,
      mobile: createdBuyer.mobile,
      isAdmin: createdBuyer.isAdmin,
      isBuyer: createdBuyer.isBuyer,
      isOwner: createdBuyer.isOwner,
      isSeller: createBuyern.isSeller,
      token: generateToken(createdBuyer),
    });
  })
);

//Actualización de Usuarios Compradores
buyerRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const { name, email, password, dni, tel, mobile } = req.body;
    const buyerUpdated = await Admin.findByIdAndUpdate(
      _id,
      {
        $set: { name, email, password, dni, tel, mobile },
      },
      { useFindAndModify: false }
    );
    res.send(`${buyerUpdated.name} updated`);
  })
);

//Eliminación de Usuarios Compradores
buyerRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Buyer.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default buyerRouter;