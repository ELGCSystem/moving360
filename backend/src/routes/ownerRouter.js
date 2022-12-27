import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Owner from '../models/ownerModel.js';
import { generateToken } from '../../utils/utilsOwner.js';

const ownerRouter = express.Router();

//Mostrar Registro completo de Usuarios
ownerRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const owner = await Owner.find();
    res.send(owner);
  })
);

//Inicio de Sesión de Usuarios
ownerRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const owner = await Owner.findOne({ email: req.body.email });
    if (owner) {
      if (bcrypt.compareSync(req.body.password, owner.password)) {
        res.send({
          _id: owner._id,
          name: owner.name,
          email: owner.email,
          dni: owner.dni,
          tel: owner.tel,
          mobile: owner.mobile,
          isAdmin: owner.isAdmin,
          isBuyer: owner.isBuyer,
          isOwner: owner.isOwner,
          token: generateToken(owner),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Email o Contraseña incorrectos' });
  })
);

//Registro de Usuarios
ownerRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const owner = new Owner({
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
    const createdOwner = await owner.save();

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
      to: owner.email,
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
            <h2 style="color: #222d65; margin: 0 0 7px">Hola ${owner.name}!</h2>
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
                href="http://${req.headers.host}/api/owner/verify-email?token=${owner.emailToken}"
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
      _id: createdOwner._id,
      name: createdOwner.name,
      email: createdOwner.email,
      dni: createdOwner.dni,
      tel: createdOwner.tel,
      mobile: createdOwner.mobile,
      isAdmin: createdOwner.isAdmin,
      isBuyer: createdOwner.isBuyer,
      isOwner: createdOwner.isOwner,
      token: generateToken(createdOwner),
    });
  })
);

//Verificación de Usuarios
ownerRouter.get('/verify-email', async (req, res) => {
  try {
    const token = req.query.token;
    const owner = await Owner.findOne({ emailToken: token });
    if (owner) {
      owner.emailToken = null;
      owner.verified = true;
      await owner.save();
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

//Eliminación de Usuarios
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
