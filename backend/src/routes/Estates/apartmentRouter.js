import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Apartment from '../../models/Estates/apartmentModel.js';
import { generateToken } from '../../../utils/Estates/utilsApartment.js';

const apartmentRouter = express.Router();

//Mostrar Registro completo de Inmuebles
apartmentRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const apartment = await Apartment.find();
    res.send(apartment);
  })
);

//Mostrar Registro de Inmuebles filtrado por parámetros
apartmentRouter.get(
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
    

    let apartment = await Apartment.find({$and: params});

    res.send(Apartment);
  })
);

//Registro de Inmuebles
apartmentRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const apartment = new Apartment({
      dataBasic: req.body.dataBasic,
      dataEntrepreneurship: req.body.dataEntrepreneurship,
      dataCountry: req.body.dataCountry,
      surface: req.body.surface,
      location: req.body.location,
      mainFeatures: req.body.mainFeatures,
      generalFeatures: req.body.generalFeatures,
      otherEnvironments: req.body.otherEnvironments,
      installations: req.body.installations,
      services: req.body.services,
      building: req.body.building,
      multimedia: req.body.multimedia,
      additionalInformation: req.body.additionalInformation,
      contactOwner: req.body.contactOwner,
      statistics: req.body.statistics,
    });
    const createdApartment = await apartment.save();
    res.send({
      _id: createdApartment._id,
      dataBasic: createdApartment.dataBasic,
      dataEntrepreneurship: createdApartment.dataEntrepreneurship,
      dataCountry: createdApartment.dataCountry,
      surface: createdApartment.surface,
      location: createdApartment.location,
      mainFeatures: createdApartment.mainFeatures,
      generalFeatures: createdApartment.generalFeatures,
      otherEnvironments: createdApartment.otherEnvironments,
      installations: createdApartment.installations,
      services: createdApartment.services,
      building: createdApartment.building,
      multimedia: createdApartment.multimedia,
      additionalInformation: createdApartment.additionalInformation,
      contactOwner: createdApartment.contactOwner,
      statistics: createdApartment.statistics,
      token: generateToken(createdApartment),
    });
  })
);

//Actualización de Datos Inmuebles
apartmentRouter.put(
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
      generalFeatures,
      otherEnvironments,
      installations,
      services,
      multimedia,
      building,
      additionalInformation,
      contactOwner,
      statistics,
    } = req.body;
    const apartmentUpdated = await Apartment.findByIdAndUpdate(
      _id,
      {
        $set: {
          dataBasic,
          dataEntrepreneurship,
          dataCountry,
          surface,
          location,
          mainFeatures,
          generalFeatures,
          otherEnvironments,
          installations,
          services,
          building,
          multimedia,
          additionalInformation,
          contactOwner,
          statistics,
        },
      },
      { useFindAndModify: false }
    );
    res.send(`${apartmentUpdated.name} updated`);
  })
);

//Eliminación de Inmuebles
apartmentRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Apartment.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default apartmentRouter;