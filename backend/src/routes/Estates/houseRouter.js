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

//Registro de Inmuebles
houseRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const house = new House({
      typeUnit: req.body.typeUnit,
      typeOperation: req.body.typeOperation,
      price: req.body.price,
      typePrice: req.body.typePrice,
      state: req.body.state,
      credit: req.body.credit,
      barter: req.body.barter,
      profesional: req.body.profesional,
      occupied: req.body.occupied,
      pets: req.body.pets,
      title: req.body.title,
      valueInit: req.body.valueInit,
      valueHalf: req.body.valueHalf,
      valueFinal: req.body.valueFinal,
      covered: req.body.covered,
      semiCovered: req.body.semiCovered,
      discovered: req.body.discovered,
      total: req.body.total,
      country: req.body.country,
      state: req.body.state,
      town: req.body.town,
      locality: req.body.locality,
      nameStreet: req.body.nameStreet,
      numberStreet: req.body.numberStreet,
      flat: req.body.flat,
      department: req.body.department,
      postalCode: req.body.postalCode,
      exactLocation: req.body.exactLocation,
      isBedroom: req.body.isBedroom,
      amountBedroom: req.body.amountBedroom,
      sizeBedroom: req.body.sizeBedroom,
      isBathroom: req.body.isBathroom,
      amountBathroom: req.body.amountBathroom,
      sizeBathroom: req.body.sizeBathroom,
      isToilettes: req.body.isToilettes,
      amountToilettes: req.body.amountToilettes,
      sizeToilettes: req.body.sizeToilettes,
      isBathroomSuite: req.body.isBathroomSuite,
      amountBathroomSuite: req.body.amountBathroomSuite,
      sizeBathroomSuite: req.body.sizeBathroomSuite,
      amountEnvironments: req.body.amountEnvironments,
      isKitchen: req.body.isKitchen,
      sizeKitchen: req.body.sizeKitchen,
      isKitchenIntegrated: req.body.isKitchenIntegrated,
      sizeKitchenIntegrated: req.body.sizeKitchenIntegrated,
      isDinningRoom: req.body.isDinningRoom,
      sizeDinningRoom: req.body.sizeDinningRoom,
      isDinningRoomDaily: req.body.isDinningRoomDaily,
      sizeDinningRoomDaily: req.body.sizeDinningRoomDaily,
      isLiving: req.body.isLiving,
      sizeLiving: req.body.sizeLiving,
      isLaundry: req.body.isLaundry,
      sizeLaundry: req.body.sizeLaundry,
      isYard: req.body.isYard,
      sizeYard: req.body.sizeYard,
      isHall: req.body.isHall,
      sizeHall: req.body.sizeHall,
      isDesktop: req.body.isDesktop,
      sizeDesktop: req.body.sizeDesktop,
      isPlayroom: req.body.isPlayroom,
      sizePlayroom: req.body.sizePlayroom,
      isTerrace: req.body.isTerrace,
      sizeTerrace: req.body.sizeTerrace,
      isBarbecue: req.body.isBarbecue,
      sizeBarbecue: req.body.sizeBarbecue,
      isPool: req.body.isPool,
      sizePool: req.body.sizePool,
      isServiceDependency: req.body.isServiceDependency,
      sizeServiceDependency: req.body.sizeServiceDependency,
      isHerbage: req.body.isHerbage,
      amountHerbage: req.body.amountHerbage,
      isGarage: req.body.isGarage,
      amountGarage: req.body.amountGarage,
      coverGarage: req.body.coverGarage,
      antique: req.body.antique,
      years: req.body.years,
      mesaureFront: req.body.mesaureFront,
      measureBack: req.body.measureBack,
      typeFlatInside: req.body.typeFlatInside,
      typeFlatWood: req.body.typeFlatWood,
      typeFlatOutside: req.body.typeFlatOutside,
      wallOutside: req.body.wallOutside,
      ceiling: req.body.ceiling,
      stateEstate: req.body.stateEstate,
      orientation: req.body.orientation,
      typeView: req.body.typeView,
      typeCoast: req.body.typeCoast,
      typeSlope: req.body.typeSlope,
      loft: req.body.loft,
      beforeKitchen: req.body.beforeKitchen,
      beforeLiving: req.body.beforeLiving,
      rooftop: req.body.rooftop,
      balcony: req.body.balcony,
      balconyTerraced: req.body.balconyTerraced,
      bar: req.body.bar,
      trunk: req.body.trunk,
      library: req.body.library,
      cellar: req.body.cellar,
      toolRoom: req.body.toolRoom,
      ironingRoom: req.body.ironingRoom,
      betweenFloor: req.body.betweenFloor,
      study: req.body.study,
      familyRoom: req.body.familyRoom,
      gallery: req.body.gallery,
      shed: req.body.shed,
      garage: req.body.garage,
      garden: req.body.garden,
      freeBackground: req.body.freeBackground,
      local: req.body.local,
      office: req.body.office,
      palier: req.body.palier,
      grill: req.body.grill,
      livingRoom: req.body.livingRoom,
      basement: req.body.basement,
      suiteRoom: req.body.suiteRoom,
      lobby: req.body.lobby,
      dressingRoom: req.body.dressingRoom,
      lockerRoom: req.body.lockerRoom,
      sewer: req.body.sewer,
      airHot: req.body.airHot,
      televisionCable: req.body.televisionCable,
      heatingBalanced: req.body.heatingBalanced,
      breakfastNook: req.body.breakfastNook,
      bottledGas: req.body.bottledGas,
      underfloorHeating: req.body.underfloorHeating,
      pool: req.body.pool,
      individualRadiantFloor: req.body.individualRadiantFloor,
      hotWater: req.body.hotWater,
      furnished: req.body.furnished,
      safe: req.body.safe,
      waterHeater: req.body.waterHeater,
      electricityInstalation: req.body.electricityInstalation,
      naturalGas: req.body.naturalGas,
      kitchenFurniture: req.body.kitchenFurniture,
      radiators: req.body.radiators,
      centralRadiantFloor: req.body.centralRadiantFloor,
      centralAirConditioner: req.body.centralAirConditioner,
      individualAirConditioning: req.body.individualAirConditioning,
      kitchenGadgets: req.body.kitchenGadgets,
      singleBoiler: req.body.singleBoiler,
      soccerField: req.body.soccerField,
      tennisCourt: req.body.tennisCourt,
      vehicleSpace: req.body.vehicleSpace,
      whirlpool: req.body.whirlpool,
      reducedMobilityAccess: req.body.reducedMobilityAccess,
      elevator: req.body.elevator,
      Heating: req.body.Heating,
      airExtractor: req.body.airExtractor,
      fireplace: req.body.fireplace,
      pavement: req.body.pavement,
      hotWaterTank: req.body.hotWaterTank,
      sprinklerIrrigation: req.body.sprinklerIrrigation,
      councilTax: req.body.councilTax,
      electricity: req.body.electricity,
      cleaning: req.body.cleaning,
      security: req.body.security,
      vigilance: req.body.vigilance,
      runningWater: req.body.runningWater,
      bottledGas: req.body.bottledGas,
      refrigeration: req.body.refrigeration,
      telephone: req.body.telephone,
      heating: req.body.heating,
      naturalGas: req.body.naturalGas,
      realEstateTax: req.body.realEstateTax,
      towels: req.body.towels,
      conmutador: req.body.conmutador,
      internet: req.body.internet,
      linen: req.body.linen,
      videoCable: req.body.videoCable,
      frontPage: req.body.frontPage,
      photoTour360: req.body.photoTour360,
      photo360: req.body.photo360,
      photo360: req.body.photo360,
      photo360: req.body.photo360,
      photo360: req.body.photo360,
      photo360: req.body.photo360,
      photo360: req.body.photo360,
      photo360: req.body.photo360,
      photo360: req.body.photo360,
      photo360: req.body.photo360,
      photo360: req.body.photo360,
      photo360: req.body.photo360,
      photo360: req.body.photo360,
      photo360: req.body.photo360,
      photo360: req.body.photo360,
      photo360: req.body.photo360,
      photo360: req.body.photo360,
      description: req.body.description,
      notes: req.body.notes,
      email: req.body.email,
      telephone: req.body.telephone,
      mobile: req.body.mobile,
      alternativeTelephone: req.body.alternativeTelephone,
      whatsApp: req.body.whatsApp,
      views: req.body.views,
      queries: req.body.queries,
      viewsTour: req.body.viewsTour,
      interested: req.body.interested,
      offered: req.body.offered,
      reserved: req.body.reserved,
      likes: req.body.likes,
    });
    const createdHouse = await house.save();
    res.send({
      _id: createdHouse._id,
      typeUnit: createdHouse.typeUnit,
      typeOperation: createdHouse.typeOperation,
      price: createdHouse.price,
      typePrice: createdHouse.typePrice,
      state: createdHouse.state,
      credit: createdHouse.credit,
      barter: createdHouse.barter,
      profesional: createdHouse.profesional,
      occupied: createdHouse.occupied,
      pets: createdHouse.pets,
      title: createdHouse.title,
      valueInit: createdHouse.valueInit,
      valueHalf: createdHouse.valueHalf,
      valueFinal: createdHouse.valueFinal,
      covered: createdHouse.covered,
      semiCovered: createdHouse.semiCovered,
      discovered: createdHouse.discovered,
      total: createdHouse.total,
      country: createdHouse.country,
      state: createdHouse.state,
      town: createdHouse.town,
      locality: createdHouse.locality,
      nameStreet: createdHouse.nameStreet,
      numberStreet: createdHouse.numberStreet,
      flat: createdHouse.flat,
      department: createdHouse.department,
      postalCode: createdHouse.postalCode,
      exactLocation: createdHouse.exactLocation,
      isBedroom: createdHouse.isBedroom,
      amountBedroom: createdHouse.amountBedroom,
      sizeBedroom: createdHouse.sizeBedroom,
      isBathroom: createdHouse.isBathroom,
      amountBathroom: createdHouse.amountBathroom,
      sizeBathroom: createdHouse.sizeBathroom,
      isToilettes: createdHouse.isToilettes,
      amountToilettes: createdHouse.amountToilettes,
      sizeToilettes: createdHouse.sizeToilettes,
      isBathroomSuite: createdHouse.isBathroomSuite,
      amountBathroomSuite: createdHouse.amountBathroomSuite,
      sizeBathroomSuite: createdHouse.sizeBathroomSuite,
      amountEnvironments: createdHouse.amountEnvironments,
      isKitchen: createdHouse.isKitchen,
      sizeKitchen: createdHouse.sizeKitchen,
      isKitchenIntegrated: createdHouse.isKitchenIntegrated,
      sizeKitchenIntegrated: createdHouse.sizeKitchenIntegrated,
      isDinningRoom: createdHouse.isDinningRoom,
      sizeDinningRoom: createdHouse.sizeDinningRoom,
      isDinningRoomDaily: createdHouse.isDinningRoomDaily,
      sizeDinningRoomDaily: createdHouse.sizeDinningRoomDaily,
      isLiving: createdHouse.isLiving,
      sizeLiving: createdHouse.sizeLiving,
      isLaundry: createdHouse.isLaundry,
      sizeLaundry: createdHouse.sizeLaundry,
      isYard: createdHouse.isYard,
      sizeYard: createdHouse.sizeYard,
      isHall: createdHouse.isHall,
      sizeHall: createdHouse.sizeHall,
      isDesktop: createdHouse.isDesktop,
      sizeDesktop: createdHouse.sizeDesktop,
      isPlayroom: createdHouse.isPlayroom,
      sizePlayroom: createdHouse.sizePlayroom,
      isTerrace: createdHouse.isTerrace,
      sizeTerrace: createdHouse.sizeTerrace,
      isBarbecue: createdHouse.isBarbecue,
      sizeBarbecue: createdHouse.sizeBarbecue,
      isPool: createdHouse.isPool,
      sizePool: createdHouse.sizePool,
      isServiceDependency: createdHouse.isServiceDependency,
      sizeServiceDependency: createdHouse.sizeServiceDependency,
      isHerbage: createdHouse.isHerbage,
      amountHerbage: createdHouse.amountHerbage,
      isGarage: createdHouse.isGarage,
      amountGarage: createdHouse.amountGarage,
      coverGarage: createdHouse.coverGarage,
      antique: createdHouse.antique,
      years: createdHouse.years,
      mesaureFront: createdHouse.mesaureFront,
      measureBack: createdHouse.measureBack,
      typeFlatInside: createdHouse.typeFlatInside,
      typeFlatWood: createdHouse.typeFlatWood,
      typeFlatOutside: createdHouse.typeFlatOutside,
      wallOutside: createdHouse.wallOutside,
      ceiling: createdHouse.ceiling,
      stateEstate: createdHouse.stateEstate,
      orientation: createdHouse.orientation,
      typeView: createdHouse.typeView,
      typeCoast: createdHouse.typeCoast,
      typeSlope: createdHouse.typeSlope,
      loft: createdHouse.loft,
      beforeKitchen: createdHouse.beforeKitchen,
      beforeLiving: createdHouse.beforeLiving,
      rooftop: createdHouse.rooftop,
      balcony: createdHouse.balcony,
      balconyTerraced: createdHouse.balconyTerraced,
      bar: createdHouse.bar,
      trunk: createdHouse.trunk,
      library: createdHouse.library,
      cellar: createdHouse.cellar,
      toolRoom: createdHouse.toolRoom,
      ironingRoom: createdHouse.ironingRoom,
      betweenFloor: createdHouse.betweenFloor,
      study: createdHouse.study,
      familyRoom: createdHouse.familyRoom,
      gallery: createdHouse.gallery,
      shed: createdHouse.shed,
      garage: createdHouse.garage,
      garden: createdHouse.garden,
      freeBackground: createdHouse.freeBackground,
      local: createdHouse.local,
      office: createdHouse.office,
      palier: createdHouse.palier,
      grill: createdHouse.grill,
      livingRoom: createdHouse.livingRoom,
      basement: createdHouse.basement,
      suiteRoom: createdHouse.suiteRoom,
      lobby: createdHouse.lobby,
      dressingRoom: createdHouse.dressingRoom,
      lockerRoom: createdHouse.lockerRoom,
      sewer: createdHouse.sewer,
      airHot: createdHouse.airHot,
      televisionCable: createdHouse.televisionCable,
      heatingBalanced: createdHouse.heatingBalanced,
      breakfastNook: createdHouse.breakfastNook,
      bottledGas: createdHouse.bottledGas,
      underfloorHeating: createdHouse.underfloorHeating,
      pool: createdHouse.pool,
      individualRadiantFloor: createdHouse.individualRadiantFloor,
      hotWater: createdHouse.hotWater,
      furnished: createdHouse.furnished,
      safe: createdHouse.safe,
      waterHeater: createdHouse.waterHeater,
      electricityInstalation: createdHouse.electricityInstalation,
      naturalGas: createdHouse.naturalGas,
      kitchenFurniture: createdHouse.kitchenFurniture,
      radiators: createdHouse.radiators,
      centralRadiantFloor: createdHouse.centralRadiantFloor,
      centralAirConditioner: createdHouse.centralAirConditioner,
      individualAirConditioning: createdHouse.individualAirConditioning,
      kitchenGadgets: createdHouse.kitchenGadgets,
      singleBoiler: createdHouse.singleBoiler,
      soccerField: createdHouse.soccerField,
      tennisCourt: createdHouse.tennisCourt,
      vehicleSpace: createdHouse.vehicleSpace,
      whirlpool: createdHouse.whirlpool,
      reducedMobilityAccess: createdHouse.reducedMobilityAccess,
      elevator: createdHouse.elevator,
      Heating: createdHouse.Heating,
      airExtractor: createdHouse.airExtractor,
      fireplace: createdHouse.fireplace,
      pavement: createdHouse.pavement,
      hotWaterTank: createdHouse.hotWaterTank,
      sprinklerIrrigation: createdHouse.sprinklerIrrigation,
      councilTax: createdHouse.councilTax,
      electricity: createdHouse.electricity,
      cleaning: createdHouse.cleaning,
      security: createdHouse.security,
      vigilance: createdHouse.vigilance,
      runningWater: createdHouse.runningWater,
      bottledGas: createdHouse.bottledGas,
      refrigeration: createdHouse.refrigeration,
      telephone: createdHouse.telephone,
      heating: createdHouse.heating,
      naturalGas: createdHouse.naturalGas,
      realEstateTax: createdHouse.realEstateTax,
      towels: createdHouse.towels,
      conmutador: createdHouse.conmutador,
      internet: createdHouse.internet,
      linen: createdHouse.linen,
      videoCable: createdHouse.videoCable,
      frontPage: createdHouse.frontPage,
      photoTour360: createdHouse.photoTour360,
      photo360: createdHouse.photo360,
      photo360: createdHouse.photo360,
      photo360: createdHouse.photo360,
      photo360: createdHouse.photo360,
      photo360: createdHouse.photo360,
      photo360: createdHouse.photo360,
      photo360: createdHouse.photo360,
      photo360: createdHouse.photo360,
      photo360: createdHouse.photo360,
      photo360: createdHouse.photo360,
      photo360: createdHouse.photo360,
      photo360: createdHouse.photo360,
      photo360: createdHouse.photo360,
      photo360: createdHouse.photo360,
      photo360: createdHouse.photo360,
      photo360: createdHouse.photo360,
      description: createdHouse.description,
      notes: createdHouse.notes,
      email: createdHouse.email,
      telephone: createdHouse.telephone,
      mobile: createdHouse.mobile,
      alternativeTelephone: createdHouse.alternativeTelephone,
      whatsApp: createdHouse.whatsApp,
      views: createdHouse.views,
      queries: createdHouse.queries,
      viewsTour: createdHouse.viewsTour,
      interested: createdHouse.interested,
      offered: createdHouse.offered,
      reserved: createdHouse.reserved,
      likes: createdHouse.likes,
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
      dateBasic,
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
          dateBasic,
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
