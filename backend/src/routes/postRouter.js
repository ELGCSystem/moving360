import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Post from '../models/postModel.js'
import { generateToken } from '../../utils/utilsAdmin.js';

const postRouter = express.Router();

//Mostrar Registro completo de Usuarios Administradores
postRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const post = await Admin.find();
    res.send(post);
  })
);

//Inicio de Sesión de Usuarios Administradores
postRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const post = await Admin.findOne({ email: req.body.email });
    if (post) {
      if (bcrypt.compareSync(req.body.password, admin.password)) {
        res.send({
          _id: post._id,
          name: post.name,
          email: post.email,
          dni: post.dni,
          tel: post.tel,
          mobile: post.mobile,
          isAdmin: post.isAdmin,
          isBuyer: admin.isBuyer,
          isOwner: post.isOwner,
          token: generateToken(post),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Email o Contraseña incorrectos' });
  })
);

//Registro de Usuarios Administradores
postRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const post = new Admin({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      dni: req.body.dni,
      tel: req.body.tel,
      mobile: req.body.mobile,
      isAdmin: req.body.isAdmin,
      isBuyer: req.body.isBuyer,
      isOwner: req.body.isOwner,
    });
    const createdAdmin = await post.save();
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
      token: generateToken(createdAdmin),
    });
  })
);

//Actualización de Usuarios
postRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const { name, email, password, dni, tel, mobile } = req.body;
    const postUpdated = await Admin.findByIdAndUpdate(
      _id,
      {
        $set: { name, email, password, dni, tel, mobile },
      },
      { useFindAndModify: false }
    );
    res.send(`${postUpdated.name} updated`);
  })
);

//Eliminación de Usuarios Administradores
postRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Admin.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default adminRouter;
