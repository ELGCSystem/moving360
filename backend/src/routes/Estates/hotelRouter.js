import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Hotel from '../../models/Estates/hotelModel.js';
import { generateToken } from '../../../utils/Estates/utilsHotel.js';

const hotelRouter = express.Router();

//Mostrar Registro completo de Inmuebles
hotelRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const hotel = await Hotel.find();
    res.send(hotel);
  })
);

//Mostrar Registro de Inmuebles filtrado por parámetros
hotelRouter.get(
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
    

    let hotel = await Hotel.find({$and: params});

    res.send(hotel);
  })
);

//Registro de Inmuebles
hotelRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const hotel = new Hotel({
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
    const createdHotel = await hotel.save();
    res.send({
      _id: createdHotel._id,
      dataBasic: createdHotel.dataBasic,
      surface: createdHotel.surface,
      location: createdHotel.location,
      mainFeatures: createdHotel.mainFeatures,
      generalFeatures: createdHotel.generalFeatures,
      otherEnvironments: createdHotel.otherEnvironments,
      installations: createdHotel.installations,
      services: createdHotel.services,
      multimedia: createdHotel.multimedia,
      additionalInformation: createdHotel.additionalInformation,
      contactOwner: createdHotel.contactOwner,
      statistics: createdHotel.statistics,
      token: generateToken(createdHotel),
    });
  })
);

//Actualización de Datos Inmuebles
hotelRouter.put(
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
    const hotelUpdated = await Hotel.findByIdAndUpdate(
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
    res.send(`${hotelUpdated.name} updated`);
  })
);

//Eliminación de Inmuebles
hotelRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Hotel.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default hotelRouter;
