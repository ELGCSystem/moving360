import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Date from '../models/dateApplicationModel.js';
import { generateToken } from '../../utils/utilsDate.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

const dateRouter = express.Router();

//Mostrar Registro completo de Fechas
dateRouter.get(
    '/getAll',
    expressAsyncHandler(async (req, res) => {
      const date = await Date.find();
      res.send(date);
    })
  );

//Registro de Fecha y Hora
dateRouter.post(
  '/dateup',
  expressAsyncHandler(async (req, res) => {
    const date = new Date({
      date: req.body.date,
      time: req.body.time,
    });
    const createdDate = await date.save();

    res.send({
      _id: createdDate._id,
      date: createdDate.date,
      time: createdDate.time,
      token: generateToken(createdDate),
    });
  })
);

//Obtener Fecha y Hora
dateRouter.get(
  '/get/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const dateSelected = await Date.findById(_id);
    res.send(dateSelected);
  })
);

export default dateRouter;
