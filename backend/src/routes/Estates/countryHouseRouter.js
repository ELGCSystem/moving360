import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import CountryHouse from '../../models/Estates/countryHouseModel.js';
import { generateToken } from '../../../utils/Estates/utilsCountryHouse.js';

const countryHouseRouter = express.Router();

//Mostrar Registro completo de Inmuebles
countryHouseRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const countryHouse = await CountryHouse.find();
    res.send(countryHouse);
  })
);

//Mostrar Registro de Inmuebles filtrado por parámetros
countryHouseRouter.get(
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
    

    let countryHouse = await CountryHouse.find({$and: params});

    res.send(countryHouse);
  })
);

//Registro de Inmuebles
countryHouseRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const countryHouse = new CountryHouse({
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
    const createdCountryHouse = await countryHouse.save();
    res.send({
      _id: createdCountryHouse._id,
      dataBasic: createdCountryHouse.dataBasic,
      surface: createdCountryHouse.surface,
      location: createdCountryHouse.location,
      mainFeatures: createdCountryHouse.mainFeatures,
      generalFeatures: createdCountryHouse.generalFeatures,
      otherEnvironments: createdCountryHouse.otherEnvironments,
      installations: createdCountryHouse.installations,
      services: createdCountryHouse.services,
      multimedia: createdCountryHouse.multimedia,
      additionalInformation: createdCountryHouse.additionalInformation,
      contactOwner: createdCountryHouse.contactOwner,
      statistics: createdCountryHouse.statistics,
      token: generateToken(createdCountryHouse),
    });
  })
);

//Actualización de Datos Inmuebles
countryHouseRouter.put(
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
    const countryHouseUpdated = await CountryHouse.findByIdAndUpdate(
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
    res.send(`${countryHouseUpdated.name} updated`);
  })
);

//Eliminación de Inmuebles
countryHouseRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await CountryHouse.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default countryHouseRouter;
