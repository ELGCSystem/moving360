import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import House from '../models/Estates/houseModel.js';
import { generateToken } from '../../utils/utilsAdmin.js';

const houseRouter = express.Router();

//Mostrar Registro completo de Inmuebles
houseRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const house = await House.find();
    res.send(house);
  })
);

//Registro de Inmuebles
houseRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const house = new House({
      dataBasic: req.body.dataBasic,
      surface: req.body.surface,
      location: req.body.location,
      mainFeatures: req.body.mainFeatures,
      general: req.body.mainFeatures,
      otherEnvironments: req.body.otherEnvironments,
      installations: req.body.installations,
      services: req.body.services,
      multimedia: req.body.multimedia,
      additionalInformation: req.body.additionalInformation,
      contactOwner: req.body.contactOwner,
      statistics: req.body.statistics
    });
    const createdHouse = await house.save();
    res.send({
      _id: createdHouse._id,
      dateBasic: createdHouse.dateBasic,
      surface: createdHouse.surface,
      location: createdHouse.location,
      mainFeatures: createdHouse.mainFeatures,
      general: createdHouse.general,
      otherEnvironments: createdHouse.otherEnvironments,
      installations: createdHouse.installations,
      services: createdHouse.services,
      multimedia: createdHouse.multimedia,
      additionalInformation: createdHouse.additionalInformation,
      contactOwner: createdHouse.contactOwner,
      statistics: createdHouse.statistics,
    });
  })
);

//Actualización de Datos Inmuebles
houseRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const {
      dateBasic,
      surface,
      location,
      mainFeatures,
      general,
      otherEnvironments,
      installations,
      services,
      multimedia,
      additionalInformation,
      contactOwner,
      statistics
    } = req.body;
    const houseUpdated = await House.findByIdAndUpdate(
      _id,
      {
        $set: {
          dateBasic,
          surface,
          location,
          mainFeatures,
          general,
          otherEnvironments,
          installations,
          services,
          multimedia,
          additionalInformation,
          contactOwner,
          statistics
        },
      },
      { useFindAndModify: false }
    );
    res.send(`${houseUpdated.name} updated`);
  })
);

//Eliminación de Inmuebles
houseRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await House.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default houseRouter;
