import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Office from '../../models/Estates/officeModel.js';
import { generateToken } from '../../../utils/Estates/utilsOffice.js';

const officeRouter = express.Router();

//Mostrar Registro completo de Inmuebles
officeRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const office = await Office.find();
    res.send(office);
  })
);

//Mostrar Registro de Inmuebles filtrado por parámetros
officeRouter.get(
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
    

    let office = await Office.find({$and: params});

    res.send(Office);
  })
);

//Registro de Inmuebles
officeRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const office = new Office({
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
    const createdOffice = await office.save();
    res.send({
      _id: createdOffice._id,
      dataBasic: createdOffice.dataBasic,
      dataEntrepreneurship: createdOffice.dataEntrepreneurship,
      dataCountry: createdOffice.dataCountry,
      surface: createdOffice.surface,
      location: createdOffice.location,
      mainFeatures: createdOffice.mainFeatures,
      generalFeatures: createdOffice.generalFeatures,
      otherEnvironments: createdOffice.otherEnvironments,
      installations: createdOffice.installations,
      services: createdOffice.services,
      building: createdOffice.building,
      multimedia: createdOffice.multimedia,
      additionalInformation: createdOffice.additionalInformation,
      contactOwner: createdOffice.contactOwner,
      statistics: createdOffice.statistics,
      token: generateToken(createdOffice),
    });
  })
);

//Actualización de Datos Inmuebles
officeRouter.put(
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
    const officeUpdated = await Office.findByIdAndUpdate(
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
    res.send(`${officeUpdated.name} updated`);
  })
);

//Eliminación de Inmuebles
officeRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Office.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default officeRouter;