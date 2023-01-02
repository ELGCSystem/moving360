import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Goodwill from '../../models/Estates/goodwillModel.js';
import { generateToken } from '../../../utils/Estates/utilsGoodwill.js';

const goodwillRouter = express.Router();

//Mostrar Registro completo de Inmuebles
goodwillRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const goodwill = await Goodwill.find();
    res.send(goodwill);
  })
);

//Mostrar Registro de Inmuebles filtrado por parámetros
goodwillRouter.get(
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
    

    let goodwill = await Goodwill.find({$and: params});

    res.send(goodwill);
  })
);

//Registro de Inmuebles
goodwillRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const goodwill = new Goodwill({
      dataBasic: req.body.dataBasic,
      dataCountry: req.body.dataCountry,
      surface: req.body.surface,
      location: req.body.location,
      mainFeatures: req.body.mainFeatures,
      generalFeatures: req.body.generalFeatures,
      otherEnvironments: req.body.otherEnvironments,
      multimedia: req.body.multimedia,
      additionalInformation: req.body.additionalInformation,
      contactOwner: req.body.contactOwner,
      statistics: req.body.statistics,
    });
    const createdGoodwill = await goodwill.save();
    res.send({
      _id: createdGoodwill._id,
      dataBasic: createdGoodwill.dataBasic,
      dataCountry: createdGoodwill.dataCountry,
      surface: createdGoodwill.surface,
      location: createdGoodwill.location,
      mainFeatures: createdGoodwill.mainFeatures,
      generalFeatures: createdGoodwill.generalFeatures,
      otherEnvironments: createdGoodwill.otherEnvironments,
      multimedia: createdGoodwill.multimedia,
      additionalInformation: createdGoodwill.additionalInformation,
      contactOwner: createdGoodwill.contactOwner,
      statistics: createdGoodwill.statistics,
      token: generateToken(createdGoodwill),
    });
  })
);

//Actualización de Datos Inmuebles
goodwillRouter.put(
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
      otherEnvironments,
      multimedia,
      additionalInformation,
      contactOwner,
      statistics,
    } = req.body;
    const goodwillUpdated = await Goodwill.findByIdAndUpdate(
      _id,
      {
        $set: {
          dataBasic,
          dataCountry,
          surface,
          location,
          mainFeatures,
          generalFeatures,
          otherEnvironments,
          multimedia,
          additionalInformation,
          contactOwner,
          statistics,
        },
      },
      { useFindAndModify: false }
    );
    res.send(`${goodwillUpdated.name} updated`);
  })
);

//Eliminación de Inmuebles
goodwillRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Goodwill.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default goodwillRouter;
