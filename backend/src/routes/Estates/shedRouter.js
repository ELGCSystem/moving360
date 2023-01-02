import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Shed from '../../models/Estates/shedModel.js';
import { generateToken } from '../../../utils/Estates/utilsShed.js';

const shedRouter = express.Router();

//Mostrar Registro completo de Inmuebles
shedRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const shed = await Shed.find();
    res.send(shed);
  })
);

//Mostrar Registro de Inmuebles filtrado por parámetros
shedRouter.get(
  '/get/:search',

  expressAsyncHandler(async (req, res) => {

    const search = JSON.parse(req.params.search);

    let params = [];

    if (search.unit)
      params.push({'dataBasic.unit': search.unit });

    if (search.operation)
      params.push({'dataBasic.operation': search.operation });

    if (search.price)
      params.push({'dataBasic.price': search.price });

    if (search.title)
      params.push({'dataBasic.title': new RegExp("^" + search.title) });
    

    let shed = await Shed.find({$and: params});

    res.send(shed);
  })
);

//Registro de Inmuebles
shedRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const shed = new Shed({
      dataBasic: req.body.dataBasic,
      surface: req.body.surface,
      location: req.body.location,
      mainFeatures: req.body.mainFeatures,
      generalFeatures: req.body.generalFeatures,
      otherEnvironments: req.body.otherEnvironments,
      installations: req.body.installations,
      services: req.body.services,
      multimedia: req.body.multimedia,
      additionalInformation: req.body.additionalInformation,
      contactOwner: req.body.contactOwner,
      statistics: req.body.statistics,
    });
    const createdShed = await shed.save();
    res.send({
      _id: createdShed._id,
      dataBasic: createdShed.dataBasic,
      surface: createdShed.surface,
      location: createdShed.location,
      mainFeatures: createdShed.mainFeatures,
      generalFeatures: createdShed.generalFeatures,
      otherEnvironments: createdShed.otherEnvironments,
      installations: createdShed.installations,
      services: createdShed.services,
      multimedia: createdShed.multimedia,
      additionalInformation: createdShed.additionalInformation,
      contactOwner: createdShed.contactOwner,
      statistics: createdShed.statistics,
      token: generateToken(createdShed),
    });
  })
);

//Actualización de Datos Inmuebles
shedRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const {
      dataBasic,
      surface,
      location,
      mainFeatures,
      generalFeatures,
      otherEnvironments,
      installations,
      services,
      multimedia,
      additionalInformation,
      contactOwner,
      statistics,
    } = req.body;
    const shedUpdated = await Shed.findByIdAndUpdate(
      _id,
      {
        $set: {
          dataBasic,
          surface,
          location,
          mainFeatures,
          generalFeatures,
          otherEnvironments,
          installations,
          services,
          multimedia,
          additionalInformation,
          contactOwner,
          statistics,
        },
      },
      { useFindAndModify: false }
    );
    res.send(`${shedUpdated.name} updated`);
  })
);

//Eliminación de Inmuebles
shedRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Shed.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default shedRouter;
