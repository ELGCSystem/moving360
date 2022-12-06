import mongoose, { Schema } from 'mongoose';

const houseSchema = new mongoose.Schema(
  {
    dataBasic: {
      typeUnit: { type: String, trim: true, required: true },
      typeOperation: { type: String, trim: true, required: true },
      price: { type: Number, trim: true, required: true },
      typePrice: {
        ars: { type: Boolean, trim: true, required: true },
        dollar: { type: Boolean, trim: true, required: true },
      },
      state: { type: String, trim: true, required: true },
      credit: { type: Boolean, trim: true, required: true },
      barter: { type: Boolean, trim: true, required: true },
      title: { type: String, trim: true, required: true },
      commission: {
        valueInit: { type: Boolean, trim: true, required: true },
        valueHalf: { type: Boolean, trim: true, required: true },
        valueFinal: { type: Boolean, trim: true, required: true },
      },
    },
    surface: {
      covered: { type: Number, trim: true, required: true },
      semiCovered: { type: Number, trim: true, required: true },
      discovered: { type: Number, trim: true, required: true },
      total: { type: Number, trim: true, required: true },
    },
    location: {
      country: { type: String, trim: true, required: true },
      state: { type: String, trim: true, required: true },
      town: { type: String, trim: true, required: true },
      locality: { type: String, trim: true, required: true },
      neighborhood: { type: String, trim: true, required: true },
      subNeighborhood: { type: String, trim: true, required: true },
      nameStreet: { type: String, trim: true, required: true },
      numberStreet: { type: Number, trim: true, required: true },
      flat: { type: Number, trim: true, required: true },
      department: { type: Number, trim: true, required: true },
      postalCode: { type: String, trim: true, required: true },
    },
    mainFeatures: {
      bedroom: {
        isBedroom: { type: Boolean, trim: true, required: true },
        amountBedroom: { type: Number, trim: true, required: true },
        sizeBedroom: { type: Number, trim: true, required: true },
      },
      bathroom: {
        isBathroom: { type: Boolean, trim: true, required: true },
        amountBathroom: { type: Number, trim: true, required: true },
        sizeBathroom: { type: Number, trim: true, required: true },
      },
      toilettes: {
        isToilettes: { type: Boolean, trim: true, required: true },
        amountToilettes: { type: Number, trim: true, required: true },
        sizeToilettes: { type: Number, trim: true, required: true },
      },
      bathroomSuite: {
        isBathroomSuite: { type: Boolean, trim: true, required: true },
        amountBathroomSuite: { type: Number, trim: true, required: true },
        sizeBathroomSuite: { type: Number, trim: true, required: true },
      },
      environments: {
        amountEnvironments: { type: Number, trim: true, required: true },
      },
      kitchen: {
        isKitchen: { type: Boolean, trim: true, required: true },
        sizeKitchen: { type: Number, trim: true, required: true },
      },
      kitchenIntegrated: {
        isKitchenIntegrated: { type: Boolean, trim: true, required: true },
        sizeKitchenIntegrated: { type: Number, trim: true, required: true },
      },
      dinningRoom: {
        isDinningRoom: { type: Boolean, trim: true, required: true },
        sizeDinningRoom: { type: Number, trim: true, required: true },
      },
      dinningRoomDaily: {
        isDinningRoomDaily: { type: Boolean, trim: true, required: true },
        sizeDinningRoomDaily: { type: Number, trim: true, required: true },
      },
      living: {
        isLiving: { type: Boolean, trim: true, required: true },
        sizeLiving: { type: Number, trim: true, required: true },
      },
      laundry: {
        isLaundry: { type: Boolean, trim: true, required: true },
        sizeLaundry: { type: Number, trim: true, required: true },
      },
      yard: {
        isYard: { type: Boolean, trim: true, required: true },
        sizeYard: { type: Number, trim: true, required: true },
      },
      hall: {
        isHall: { type: Boolean, trim: true, required: true },
        sizeHall: { type: Number, trim: true, required: true },
      },
      desktop: {
        isDesktop: { type: Boolean, trim: true, required: true },
        sizeDesktop: { type: Number, trim: true, required: true },
      },
      playroom: {
        isPlayroom: { type: Boolean, trim: true, required: true },
        sizePlayroom: { type: Number, trim: true, required: true },
      },
      terrace: {
        isTerrace: { type: Boolean, trim: true, required: true },
        sizeTerrace: { type: Number, trim: true, required: true },
      },
      barbecue: {
        isBarbecue: { type: Boolean, trim: true, required: true },
        sizeBarbecue: { type: Number, trim: true, required: true },
      },
      pool: {
        isPool: { type: Boolean, trim: true, required: true },
        sizePool: { type: Number, trim: true, required: true },
      },
      serviceDependency: {
        isServiceDependency: { type: Boolean, trim: true, required: true },
        sizeServiceDependency: { type: Number, trim: true, required: true },
      },
      herbage: {
        isHerbage: { type: Boolean, trim: true, required: true },
        amountHerbage: { type: Number, trim: true, required: true },
      },
      garages: {
        isGarage: { type: Boolean, trim: true, required: true },
        amountGarage: { type: Number, trim: true, required: true },
        coverGarage: { type: Number, trim: true, required: true },
      },
      antique: {
        isNew: { type: Boolean, trim: true, required: true },
        isAntique: { type: Boolean, trim: true, required: true },
        years: { type: Number, trim: true, required: true },
      },
    },
    generalFeatures: {
      terrain: {
        mesaureFront: { type: Number, trim: true, required: true },
        measureBack: { type: Number, trim: true, required: true },
      },
      structure: {
        typeFlatInside: { type: String, trim: true, required: true },
        typeFlatWood: { type: String, trim: true, required: true },
        typeFlatOutside: { type: String, trim: true, required: true },
        wallOutside: { type: String, trim: true, required: true },
        ceiling: { type: String, trim: true, required: true },
      },
      aditional: {
        stateEstate: { type: String, trim: true, required: true },
        orientation: { type: String, trim: true, required: true },
        typeView: { type: String, trim: true, required: true },
        typeCoast: { type: String, trim: true, required: true },
        typeSlope: { type: String, trim: true, required: true },
      },
    },
    otherEnvironments: {
      loft: { type: Boolean, trim: true, required: true },
      beforeKitchen: { type: Boolean, trim: true, required: true },
      beforeLiving: { type: Boolean, trim: true, required: true },
      rooftop: { type: Boolean, trim: true, required: true },
      balcony: { type: Boolean, trim: true, required: true },
      balconyTerraced: { type: Boolean, trim: true, required: true },
      bar: { type: Boolean, trim: true, required: true },
      trunk: { type: Boolean, trim: true, required: true },
      library: { type: Boolean, trim: true, required: true },
      cellar: { type: Boolean, trim: true, required: true },
      toolRoom: { type: Boolean, trim: true, required: true },
      ironingRoom: { type: Boolean, trim: true, required: true },
      betweenFloor: { type: Boolean, trim: true, required: true },
      study: { type: Boolean, trim: true, required: true },
      familyRoom: { type: Boolean, trim: true, required: true },
      gallery: { type: Boolean, trim: true, required: true },
      shed: { type: Boolean, trim: true, required: true },
      garage: { type: Boolean, trim: true, required: true },
      garden: { type: Boolean, trim: true, required: true },
      freeBackground: { type: Boolean, trim: true, required: true },
      local: { type: Boolean, trim: true, required: true },
      office: { type: Boolean, trim: true, required: true },
      palier: { type: Boolean, trim: true, required: true },
      grill: { type: Boolean, trim: true, required: true },
      livingRoom: { type: Boolean, trim: true, required: true },
      basement: { type: Boolean, trim: true, required: true },
      suiteRoom: { type: Boolean, trim: true, required: true },
      lobby: { type: Boolean, trim: true, required: true },
      dressingRoom: { type: Boolean, trim: true, required: true },
      lockerRoom: { type: Boolean, trim: true, required: true },
    },
    installations: {
      sewer: { type: Boolean, trim: true, required: true },
      airHot: { type: Boolean, trim: true, required: true },
      televisionCable: { type: Boolean, trim: true, required: true },
      heatingBalanced: { type: Boolean, trim: true, required: true },
      breakfastNook: { type: Boolean, trim: true, required: true },
      bottledGas: { type: Boolean, trim: true, required: true },
      underfloorHeating: { type: Boolean, trim: true, required: true },
      trunk: { type: Boolean, trim: true, required: true },
      pool: { type: Boolean, trim: true, required: true },
      individualRadiantFloor: { type: Boolean, trim: true, required: true },
      hotWater: { type: Boolean, trim: true, required: true },
      furnished: { type: Boolean, trim: true, required: true },
      safe: { type: Boolean, trim: true, required: true },
      waterHeater: { type: Boolean, trim: true, required: true },
      electricity: { type: Boolean, trim: true, required: true },
      naturalGas: { type: Boolean, trim: true, required: true },
      kitchenFurniture: { type: Boolean, trim: true, required: true },
      radiators: { type: Boolean, trim: true, required: true },
      centralRadiantFloor: { type: Boolean, trim: true, required: true },
      centralAirConditioner: { type: Boolean, trim: true, required: true },
      individualAirConditioning: { type: Boolean, trim: true, required: true },
      kitchenGadgets: { type: Boolean, trim: true, required: true },
      singleBoiler: { type: Boolean, trim: true, required: true },
      soccerField: { type: Boolean, trim: true, required: true },
      tennisCourt: { type: Boolean, trim: true, required: true },
      vehicleSpace: { type: Boolean, trim: true, required: true },
      whirlpool: { type: Boolean, trim: true, required: true },
      reducedMobilityAccess: { type: Boolean, trim: true, required: true },
      elevator: { type: Boolean, trim: true, required: true },
      Heating: { type: Boolean, trim: true, required: true },
      airExtractor: { type: Boolean, trim: true, required: true },
      fireplace: { type: Boolean, trim: true, required: true },
      pavement: { type: Boolean, trim: true, required: true },
      waterHeater: { type: Boolean, trim: true, required: true },
      sprinklerIrrigation: { type: Boolean, trim: true, required: true },
    },
    services: {
      councilTax: { type: Boolean, trim: true, required: true },
      electricity: { type: Boolean, trim: true, required: true },
      cleaning: { type: Boolean, trim: true, required: true },
      security: { type: Boolean, trim: true, required: true },
      vigilance: { type: Boolean, trim: true, required: true },
      runningWater: { type: Boolean, trim: true, required: true },
      bottledGas: { type: Boolean, trim: true, required: true },
      refrigeration: { type: Boolean, trim: true, required: true },
      telephone: { type: Boolean, trim: true, required: true },
      heating: { type: Boolean, trim: true, required: true },
      naturalGas: { type: Boolean, trim: true, required: true },
      realEstateTax: { type: Boolean, trim: true, required: true },
      towels: { type: Boolean, trim: true, required: true },
      conmutador: { type: Boolean, trim: true, required: true },
      internet: { type: Boolean, trim: true, required: true },
      linen: { type: Boolean, trim: true, required: true },
      videoCable: { type: Boolean, trim: true, required: true },
    },
    multimedia: {
      frontPage: { type: String, trim: true, required: true },
      photoTour360: {
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
      },
      photo360: {
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
        photo: { type: String, trim: true, required: true },
      },
    },
    additionalInformation: {
      description: { type: String, trim: true, required: true },
      notes: { type: String, trim: true, required: true },
    },
    contactOwner: {
      email: { type: String, trim: true, required: true },
      telephone: { type: Number, trim: true, required: true },
      mobile: { type: Number, trim: true, required: true },
      alternativeTelephone: { type: Number, trim: true, required: true },
      whatsApp: { type: Number, trim: true, required: true },
    },
    statistics: {
      views: { type: Number, trim: true, required: true },
      queries: { type: Number, trim: true, required: true },
      viewsTour: { type: Number, trim: true, required: true },
      interested: { type: Number, trim: true, required: true },
      offered: { type: Number, trim: true, required: true },
      reserved: { type: Number, trim: true, required: true },
      likes: { type: Number, trim: true, required: true },
    },
  },
  {
    timestamps: true,
  }
);

const House = mongoose.model('houses', houseSchema);
export default Post;
