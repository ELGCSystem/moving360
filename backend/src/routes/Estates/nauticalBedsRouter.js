import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import NauticalBeds from '../../models/Estates/nauticalBedsModel.js';
import { generateToken } from '../../../utils/Estates/utilsNauticalBeds.js';

const nauticalBedsRouter = express.Router();

//Mostrar Registro completo de Inmuebles
nauticalBedsRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const nauticalBeds = await NauticalBeds.find();
    res.send(nauticalBeds);
  })
);

//Mostrar Registro de Inmuebles filtrado por parámetros
nauticalBedsRouter.get(
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
    

    let nauticalBeds = await NauticalBeds.find({$and: params});

    res.send(nauticalBeds);
  })
);

//Registro de Inmuebles
nauticalBedsRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const nauticalBeds = new NauticalBeds({
      dataBasic: req.body.dataBasic,
      dataCountry: req.body.dataCountry,
      surface: req.body.surface,
      location: req.body.location,
      mainFeatures: req.body.mainFeatures,
      generalFeatures: req.body.generalFeatures,
      installations: req.body.installations,
      services: req.body.services,
      multimedia: req.body.multimedia,
      additionalInformation: req.body.additionalInformation,
      contactOwner: req.body.contactOwner,
      statistics: req.body.statistics,
    });
    const createdNauticalBeds = await nauticalBeds.save();
    res.send({
      _id: createdNauticalBeds._id,
      dataBasic: createdNauticalBeds.dataBasic,
      dataCountry: createdNauticalBeds.dataCountry,
      surface: createdNauticalBeds.surface,
      location: createdNauticalBeds.location,
      mainFeatures: createdNauticalBeds.mainFeatures,
      generalFeatures: createdNauticalBeds.generalFeatures,
      installations: createdNauticalBeds.installations,
      services: createdNauticalBeds.services,
      multimedia: createdNauticalBeds.multimedia,
      additionalInformation: createdNauticalBeds.additionalInformation,
      contactOwner: createdNauticalBeds.contactOwner,
      statistics: createdNauticalBeds.statistics,
      token: generateToken(createdNauticalBeds),
    });
  })
);

//Actualización de Datos Inmuebles
nauticalBedsRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const {
      dataBasic,
      dataCountry,
      surface,
      location,
      mainFeatures,
      generalFeatures,
      installations,
      services,
      multimedia,
      additionalInformation,
      contactOwner,
      statistics,
    } = req.body;
    const nauticalBedsUpdated = await NauticalBeds.findByIdAndUpdate(
      _id,
      {
        $set: {
          dataBasic,
          dataCountry,
          surface,
          location,
          mainFeatures,
          generalFeatures,
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
    res.send(`${nauticalBedsUpdated.name} updated`);
  })
);

//Eliminación de Inmuebles
nauticalBedsRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await NauticalBeds.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default nauticalBedsRouter;