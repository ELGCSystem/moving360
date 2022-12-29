import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Garage from '../../models/Estates/garageModel.js';
import { generateToken } from '../../../utils/Estates/utilsGarage.js';

const garageRouter = express.Router();

//Mostrar Registro completo de Inmuebles
garageRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const garage = await Garage.find();
    res.send(garage);
  })
);

//Mostrar Registro de Inmuebles filtrado por parámetros
garageRouter.get(
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
    

    let garage = await Garage.find({$and: params});

    res.send(garage);
  })
);

//Registro de Inmuebles
garageRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const garage = new Garage({
      dataBasic: req.body.dataBasic,
      dataEntrepreneurship: req.body.dataEntrepreneurship,
      dataCountry: req.body.dataCountry,
      surface: req.body.surface,
      location: req.body.location,
      mainFeatures: req.body.mainFeatures,
      multimedia: req.body.multimedia,
      additionalInformation: req.body.additionalInformation,
      contactOwner: req.body.contactOwner,
      statistics: req.body.statistics,
    });
    const createdGarage = await garage.save();
    res.send({
      _id: createdGarage._id,
      dataBasic: createdGarage.dataBasic,
      dataEntrepreneurship: createdGarage.dataEntrepreneurship,
      dataCountry: createdGarage.dataCountry,
      surface: createdGarage.surface,
      location: createdGarage.location,
      mainFeatures: createdGarage.mainFeatures,
      multimedia: createdGarage.multimedia,
      additionalInformation: createdGarage.additionalInformation,
      contactOwner: createdGarage.contactOwner,
      statistics: createdGarage.statistics,
      token: generateToken(createdGarage),
    });
  })
);

//Actualización de Datos Inmuebles
garageRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const {
      dataBasic,
      dataEntrepreneurship,
      dataCountry,
      surface,
      location,
      mainFeatures,
      additionalInformation,
      contactOwner,
      statistics,
    } = req.body;
    const garageUpdated = await Garage.findByIdAndUpdate(
      _id,
      {
        $set: {
          dataBasic,
          dataEntrepreneurship,
          dataCountry,
          surface,
          location,
          mainFeatures,
          multimedia,
          additionalInformation,
          contactOwner,
          statistics,
        },
      },
      { useFindAndModify: false }
    );
    res.send(`${garageUpdated.name} updated`);
  })
);

//Eliminación de Inmuebles
garageRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Garage.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default garageRouter;