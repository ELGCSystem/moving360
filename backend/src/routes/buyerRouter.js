import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Buyer from '../models/buyerModel.js';
import { generateToken } from '../../utils/utilsBuyer.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

const buyerRouter = express.Router();

//Mostrar Registro completo de Usuarios
buyerRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const buyer = await Buyer.find();
    res.send(buyer);
  })
);

//Inicio de Sesión de Usuarios
buyerRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const buyer = await Buyer.findOne({ email: req.body.email });
    if (buyer) {
      if (bcrypt.compareSync(req.body.password, buyer.password)) {
        res.send({
          _id: buyer._id,
          name: buyer.name,
          email: buyer.email,
          dni: buyer.dni,
          tel: buyer.tel,
          mobile: buyer.mobile,
          isAdmin: buyer.isAdmin,
          isBuyer: buyer.isBuyer,
          isOwner: buyer.isOwner,
          token: generateToken(buyer),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Email o Contraseña incorrectos' });
  })
);

//Registro de Usuarios
buyerRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const buyer = new Buyer({
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
    });
    const createdBuyer = await buyer.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: false,
      auth: {
        user: 'elgcsystem@gmail.com',
        pass: 'nwzanwgdwlsimmlm',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: ' "Moving360" <elgcsystem@gmail.com> ',
      to: buyer.email,
      subject: 'Bienvenido a Moving360 Usuario Navegante! :)',
      html: `
      <table
      style="
        max-width: 600px;
        padding: 10px;
        margin: 0 auto;
        border-collapse: collapse;
      "
    >
      <tr>
        <td
          style="
            padding: 0;
            background: rgb(183, 193, 255);
            background: linear-gradient(
              180deg,
              rgba(183, 193, 255, 1) 0%,
              rgba(255, 255, 255, 1) 85%
            );
            display: flex;
            justify-content: center;
          "
        >
          <img
            style="padding: 0; display: block"
            src="https://moving360.netlify.app/static/media/logo-moving360.98e793f126324cc833ff.png"
            width="20%"
          />
        </td>
      </tr>

      <tr>
        <td style="background-color: #fff">
          <div
            style="
              color: #000000;
              margin: 4% 10% 2%;
              text-align: justify;
              font-family: sans-serif;
            "
          >
            <h2 style="color: #222d65; margin: 0 0 7px">Hola ${buyer.name}!</h2>
            <h4 style="color: #00000065;">Tu cuenta ha sido registrada con éxito!</h4>
            <p style="margin: 2px; font-size: 15px">
              Tu cuenta ha sido registrada con éxito y para poder proseguir con el registro es necesario
              realizar una verificación para comprobar que no eres un robot.<br />
              <br />
              Gracias por confiar en nosotros<br />
            </p>
            <div
              style="
                width: 100%;
                margin: 20px 0;
                display: inline-block;
                text-align: center;
              "
            >
            </div>
            <div style="width: 100%; text-align: center">
              <a
                style="
                  text-decoration: none;
                  border-radius: 5px;
                  padding: 11px 23px;
                  color: white;
                  background-color: #3498db;
                "
                href="http://${req.headers.host}/api/buyer/verify-email?token=${buyer.emailToken}"
                >Verificar mi cuenta</a
              >
            </div>
            <p
              style="
                color: #b3b3b3;
                font-size: 12px;
                text-align: center;
                margin: 30px 0 0;
              "
            >
              Moving360 - 2023
            </p>
          </div>
        </td>
      </tr>
    </table>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('El email de verificación se envió a su cuenta de gmail');
      }
    });

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
      token: generateToken(createdBuyer),
    });
  })
);

//Verificación de Usuarios
buyerRouter.get('/verify-email', async (req, res) => {
  try {
    const token = req.query.token;
    const buyer = await Buyer.findOne({ emailToken: token });
    if (buyer) {
      buyer.emailToken = null;
      buyer.verified = true;
      await buyer.save();
      res.redirect('http://localhost:3000/verificacion');
    } else {
      res.redirect('http://localhost:3000//registrarse');
      console.log('Email no verificado');
    }
  } catch (err) {
    console.log(err);
  }
});

//Actualización de Usuarios
buyerRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const { name, email, password, dni, tel, mobile } = req.body;
    const buyerUpdated = await Buyer.findByIdAndUpdate(
      _id,
      {
        $set: { name, email, password, dni, tel, mobile },
      },
      { useFindAndModify: false }
    );
    res.send(`${buyerUpdated.name} updated`);
  })
);

//Eliminación de Usuarios
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
