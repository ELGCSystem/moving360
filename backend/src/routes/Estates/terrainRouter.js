import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Terrain from '../../models/Estates/terrainModel.js';
import { generateToken } from '../../../utils/Estates/utilsTerrain.js';

const terrainRouter = express.Router();

//Mostrar Registro completo de Inmuebles
terrainRouter.get(
  '/getAll',
  expressAsyncHandler(async (req, res) => {
    const terrain = await Terrain.find();
    res.send(terrain);
  })
);

//Mostrar Registro de Inmuebles filtrado por parámetros
terrainRouter.get(
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
    

    let terrain = await Terrain.find({$and: params});

    res.send(terrain);
  })
);

//Registro de Inmuebles
terrainRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const terrain = new Terrain({
      dataBasic: req.body.dataBasic,
      dataEntrepreneurship: req.body.dataEntrepreneurship,
      dataCountry: req.body.dataCountry,
      surface: req.body.surface,
      location: req.body.location,
      generalFeatures: req.body.generalFeatures,
      installations: req.body.installations,
      services: req.body.services,
      multimedia: req.body.multimedia,
      additionalInformation: req.body.additionalInformation,
      contactOwner: req.body.contactOwner,
      statistics: req.body.statistics,
    });
    const createdTerrain = await terrain.save();
    res.send({
      _id: createdTerrain._id,
      dataBasic: createdTerrain.dataBasic,
      dataEntrepreneurship: createdTerrain.dataEntrepreneurship,
      dataCountry: createdTerrain.dataCountry,
      surface: createdTerrain.surface,
      location: createdTerrain.location,
      generalFeatures: createdTerrain.generalFeatures,
      installations: createdTerrain.installations,
      services: createdTerrain.services,
      multimedia: createdTerrain.multimedia,
      additionalInformation: createdTerrain.additionalInformation,
      contactOwner: createdTerrain.contactOwner,
      statistics: createdTerrain.statistics,
      token: generateToken(createdTerrain),
    });
  })
);

//Actualización de Datos Inmuebles
terrainRouter.put(
  '/update/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const {
      dataBasic,
      dataEntrepreneurship,
      dataCountry,
      surface,
      location,
      generalFeatures,
      installations,
      services,
      multimedia,
      additionalInformation,
      contactOwner,
      statistics,
    } = req.body;
    const terrainUpdated = await Terrain.findByIdAndUpdate(
      _id,
      {
        $set: {
          dataBasic,
          dataEntrepreneurship,
          dataCountry,
          surface,
          location,
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
    res.send(`${terrainUpdated.name} updated`);
  })
);

//Eliminación de Inmuebles
terrainRouter.delete(
  '/delete/:_id',
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.params;
    const removed = await Terrain.findByIdAndDelete(_id);
    console.log(removed);
    res.send(`${removed.name} deleted from database`);
  })
);

export default terrainRouter;