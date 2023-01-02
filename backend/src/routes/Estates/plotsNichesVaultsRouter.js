import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import PlotsNichesVaults from '../../models/Estates/plotsNichesVaultsModel.js';
import { generateToken } from '../../../utils/Estates/utilsPlotsNichesVaults.js';

const plotsNichesVaultsRouter = express.Router();

//Mostrar Registro completo de Inmuebles
plotsNichesVaultsRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const plotsNichesVaults = await PlotsNichesVaults.find();
    res.send(plotsNichesVaults);
  })
);

//Mostrar Registro de Inmuebles filtrado por parámetros
plotsNichesVaultsRouter.get(
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
    

    let plotsNichesVaults = await PlotsNichesVaults.find({$and: params});

    res.send(plotsNichesVaults);
  })
);

//Registro de Inmuebles
plotsNichesVaultsRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const plotsNichesVaults = new PlotsNichesVaults({
      dataBasic: req.body.dataBasic,
      surface: req.body.surface,
      location: req.body.location,
      mainFeatures: req.body.mainFeatures,
      generalFeatures: req.body.generalFeatures,
      multimedia: req.body.multimedia,
      additionalInformation: req.body.additionalInformation,
      contactOwner: req.body.contactOwner,
      statistics: req.body.statistics,
    });
    const createdPlotsNichesVaults = await plotsNichesVaults.save();
    res.send({
      _id: createdPlotsNichesVaults._id,
      dataBasic: createdPlotsNichesVaults.dataBasic,
      surface: createdPlotsNichesVaults.surface,
      location: createdPlotsNichesVaults.location,
      mainFeatures: createdPlotsNichesVaults.mainFeatures,
      generalFeatures: createdPlotsNichesVaults.generalFeatures,
      multimedia: createdPlotsNichesVaults.multimedia,
      additionalInformation: createdPlotsNichesVaults.additionalInformation,
      contactOwner: createdPlotsNichesVaults.contactOwner,
      statistics: createdPlotsNichesVaults.statistics,
      token: generateToken(createdPlotsNichesVaults),
    });
  })
);

//Actualización de Datos Inmuebles
plotsNichesVaultsRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const {
      dataBasic,
      surface,
      location,
      mainFeatures,
      generalFeatures,
      multimedia,
      additionalInformation,
      contactOwner,
      statistics,
    } = req.body;
    const plotsNichesVaultsUpdated = await PlotsNichesVaults.findByIdAndUpdate(
      _id,
      {
        $set: {
          dataBasic,
          surface,
          location,
          mainFeatures,
          generalFeatures,
          multimedia,
          additionalInformation,
          contactOwner,
          statistics,
        },
      },
      { useFindAndModify: false }
    );
    res.send(`${plotsNichesVaultsUpdated.name} updated`);
  })
);

//Eliminación de Inmuebles
plotsNichesVaultsRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await PlotsNichesVaults.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default plotsNichesVaultsRouter;