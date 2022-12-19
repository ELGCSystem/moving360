import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import House from '../../models/Estates/houseModel.js';
import { generateToken } from '../../../utils/Estates/utilsHouse.js';

const houseRouter = express.Router();

//Mostrar Registro completo de Inmuebles
houseRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const house = await House.find();
    res.send(house);
  })
);

//Mostrar Registro de Inmuebles filtrado por parámetros
houseRouter.get(
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
    

    let house = await House.find({$and: params});

    res.send(house);
  })
);

//Registro de Inmuebles
houseRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const house = new House({
      dataBasic: req.body.dataBasic,
      dataCountry: req.body.dataCountry,
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
    const createdHouse = await house.save();
    res.send({
      _id: createdHouse._id,
      dataBasic: createdHouse.dataBasic,
      dataCountry: createdHouse.dataCountry,
      surface: createdHouse.surface,
      location: createdHouse.location,
      mainFeatures: createdHouse.mainFeatures,
      generalFeatures: createdHouse.generalFeatures,
      otherEnvironments: createdHouse.otherEnvironments,
      installations: createdHouse.installations,
      services: createdHouse.services,
      multimedia: createdHouse.multimedia,
      additionalInformation: createdHouse.additionalInformation,
      contactOwner: createdHouse.contactOwner,
      statistics: createdHouse.statistics,
      token: generateToken(createdHouse),
    });
  })
);

//Actualización de Datos Inmuebles
houseRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const {
      dataBasic,
      dataCountry,
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
      statistics,
    } = req.body;
    const houseUpdated = await House.findByIdAndUpdate(
      _id,
      {
        $set: {
          dataBasic,
          dataCountry,
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
          statistics,
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
