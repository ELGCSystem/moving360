import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Field from '../../models/Estates/fieldModel.js';
import { generateToken } from '../../../utils/Estates/utilsField.js';

const fieldRouter = express.Router();

//Mostrar Registro completo de Inmuebles
fieldRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const field = await Field.find();
    res.send(field);
  })
);

//Mostrar Registro de Inmuebles filtrado por parámetros
fieldRouter.get(
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
    

    let field = await Field.find({$and: params});

    res.send(field);
  })
);

//Registro de Inmuebles
fieldRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const field = new Field({
      dataBasic: req.body.dataBasic,
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
    const createdField = await field.save();
    res.send({
      _id: createdField._id,
      dataBasic: createdField.dataBasic,
      surface: createdField.surface,
      location: createdField.location,
      mainFeatures: createdField.mainFeatures,
      generalFeatures: createdField.generalFeatures,
      installations: createdField.installations,
      services: createdField.services,
      multimedia: createdField.multimedia,
      additionalInformation: createdField.additionalInformation,
      contactOwner: createdField.contactOwner,
      statistics: createdField.statistics,
      token: generateToken(createdField),
    });
  })
);

//Actualización de Datos Inmuebles
fieldRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const {
      dataBasic,
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
    const fieldUpdated = await Field.findByIdAndUpdate(
      _id,
      {
        $set: {
          dataBasic,
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
    res.send(`${fieldUpdated.name} updated`);
  })
);

//Eliminación de Inmuebles
fieldRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Field.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default fieldRouter;
