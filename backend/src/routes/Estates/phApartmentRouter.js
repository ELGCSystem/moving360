import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import PhApartment from '../../models/Estates/phApartmentModel.js';
import { generateToken } from '../../../utils/Estates/utilsPhApartment.js';

const phApartmentRouter = express.Router();

//Mostrar Registro completo de Inmuebles
phApartmentRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const phApartment = await PhApartment.find();
    res.send(phApartment);
  })
);

//Mostrar Registro de Inmuebles filtrado por parámetros
phApartmentRouter.get(
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
    

    let phApartment = await PhApartment.find({$and: params});

    res.send(phApartment);
  })
);

//Registro de Inmuebles
phApartmentRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const phApartment = new PhApartment({
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
      multimedia: req.body.multimedia,
      additionalInformation: req.body.additionalInformation,
      contactOwner: req.body.contactOwner,
      statistics: req.body.statistics,
    });
    const createdPhApartment = await phApartment.save();
    res.send({
      _id: createdPhApartment._id,
      dataBasic: createdPhApartment.dataBasic,
      dataEntrepreneurship: createdPhApartment.dataEntrepreneurship,
      dataCountry: createdPhApartment.dataCountry,
      surface: createdPhApartment.surface,
      location: createdPhApartment.location,
      mainFeatures: createdPhApartment.mainFeatures,
      generalFeatures: createdPhApartment.generalFeatures,
      otherEnvironments: createdPhApartment.otherEnvironments,
      installations: createdPhApartment.installations,
      services: createdPhApartment.services,
      multimedia: createdPhApartment.multimedia,
      additionalInformation: createdPhApartment.additionalInformation,
      contactOwner: createdPhApartment.contactOwner,
      statistics: createdPhApartment.statistics,
      token: generateToken(createdPhApartment),
    });
  })
);

//Actualización de Datos Inmuebles
phApartmentRouter.put(
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
      additionalInformation,
      contactOwner,
      statistics,
    } = req.body;
    const phApartmentUpdated = await PhApartment.findByIdAndUpdate(
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
          multimedia,
          additionalInformation,
          contactOwner,
          statistics,
        },
      },
      { useFindAndModify: false }
    );
    res.send(`${phApartmentUpdated.name} updated`);
  })
);

//Eliminación de Inmuebles
phApartmentRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await PhApartment.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default phApartmentRouter;