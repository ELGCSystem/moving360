import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Shop from '../../models/Estates/shopModel.js';
import { generateToken } from '../../../utils/Estates/utilsShop.js';

const shopRouter = express.Router();

//Mostrar Registro completo de Inmuebles
shopRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const shop = await Shop.find();
    res.send(shop);
  })
);

//Mostrar Registro de Inmuebles filtrado por parámetros
shopRouter.get(
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
    

    let shop = await Shop.find({$and: params});

    res.send(Shop);
  })
);

//Registro de Inmuebles
shopRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const shop = new Shop({
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
    const createdShop = await shop.save();
    res.send({
      _id: createdShop._id,
      dataBasic: createdShop.dataBasic,
      dataEntrepreneurship: createdShop.dataEntrepreneurship,
      dataCountry: createdShop.dataCountry,
      surface: createdShop.surface,
      location: createdShop.location,
      mainFeatures: createdShop.mainFeatures,
      generalFeatures: createdShop.generalFeatures,
      otherEnvironments: createdShop.otherEnvironments,
      installations: createdShop.installations,
      services: createdShop.services,
      multimedia: createdShop.multimedia,
      additionalInformation: createdShop.additionalInformation,
      contactOwner: createdShop.contactOwner,
      statistics: createdShop.statistics,
      token: generateToken(createdShop),
    });
  })
);

//Actualización de Datos Inmuebles
shopRouter.put(
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
    const shopUpdated = await Shop.findByIdAndUpdate(
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
    res.send(`${shopUpdated.name} updated`);
  })
);

//Eliminación de Inmuebles
shopRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Shop.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default shopRouter;