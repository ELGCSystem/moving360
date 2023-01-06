import mongoose, { Schema } from 'mongoose';

const houseSchema = new mongoose.Schema(
  [
    {
      dataBasic: {
        unit: { type: String, trim: true, required: true },
        operation: { type: String, trim: true, required: true },
        price: { type: Number, trim: true, required: true },
        dontShowPrice: { type: Boolean, trim: true, required: true },
        currency: { type: String, trim: true, required: true },
        state: { type: String, trim: true, required: true },
        suitableCredit: { type: Boolean, trim: true, required: true },
        acceptsExchange: { type: Boolean, trim: true, required: true },
        suitableProfesional: { type: Boolean, trim: true, required: true },
        propertyOccupied: { type: Boolean, trim: true, required: true },
        suitablePets: { type: Boolean, trim: true, required: true },
        title: { type: String, trim: true, required: true },
        commission: { type: String, trim: true, required: true },
      },
      dataCountry: {
        name: { type: String, trim: true, required: false },
        zone: { type: String, trim: true, required: false },
        state: { type: String, trim: true, required: false },
        urbanization: { type: String, trim: true, required: false },
        basketball: { type: Boolean, trim: true, required: false },
        horseRiding: { type: Boolean, trim: true, required: false },
        football: { type: Boolean, trim: true, required: false },
        golf: { type: Boolean, trim: true, required: false },
        hockey: { type: Boolean, trim: true, required: false },
        paddle: { type: Boolean, trim: true, required: false },
        polo: { type: Boolean, trim: true, required: false },
        rugby: { type: Boolean, trim: true, required: false },
        tennis: { type: Boolean, trim: true, required: false },
        volleyball: { type: Boolean, trim: true, required: false },
        clubHouse: { type: Boolean, trim: true, required: false },
        gym: { type: Boolean, trim: true, required: false },
        games: { type: Boolean, trim: true, required: false },
        laundry: { type: Boolean, trim: true, required: false },
        pool: { type: Boolean, trim: true, required: false },
        multipurposeRoom: { type: Boolean, trim: true, required: false },
        stable: { type: Boolean, trim: true, required: false },
        school: { type: Boolean, trim: true, required: false },
        bank: { type: Boolean, trim: true, required: false },
        mall: { type: Boolean, trim: true, required: false }
      },
      surface: {
        covered: { type: Number, trim: true, required: true },
        semiCovered: { type: Number, trim: true, required: true },
        discovered: { type: Number, trim: true, required: true },
        total: { type: Number, trim: true, required: true },
      },
      location: {
        country: { type: String, trim: true, required: true },
        province: { type: String, trim: true, required: true },
        state: { type: String, trim: true, required: true },
        locality: { type: String, trim: true, required: true },
        streetName: { type: String, trim: true, required: true },
        streetNumber: { type: Number, trim: true, required: true },
        flat: { type: Number, trim: true, required: false },
        department: { type: String, trim: true, required: false },
        postalCode: { type: String, trim: true, required: false },
        locationType: { type: String, trim: true, required: true }
      },
      mainFeatures: {
        hasBedrooms: { type: Boolean, trim: true, required: true },
        bedroomsQuantity: { type: Number, trim: true, required: true },
        bedroomsSize: { type: String, trim: true, required: false },
        hasBathrooms: { type: Boolean, trim: true, required: true },
        bathroomsQuantity: { type: Number, trim: true, required: true },
        bathroomsSize: { type: String, trim: true, required: false },
        hasToilettes: { type: Boolean, trim: true, required: true },
        toilettesQuantity: { type: Number, trim: true, required: true },
        toilettesSize: { type: String, trim: true, required: false },
        hasSuiteBathrooms: { type: Boolean, trim: true, required: true },
        suiteBathroomsQuantity: { type: Number, trim: true, required: true },
        suiteBathroomsSize: { type: String, trim: true, required: false },
        environmentsQuantity: { type: Number, trim: true, required: true },
        hasKitchen: { type: Boolean, trim: true, required: true },
        kitchenSize: { type: String, trim: true, required: false },
        hasIntegratedKitchen: { type: Boolean, trim: true, required: true },
        integratedKitchenSize: { type: String, trim: true, required: false },
        hasDinningRoom: { type: Boolean, trim: true, required: true },
        dinningRoomSize: { type: String, trim: true, required: false },
        hasDailyDinningRoom: { type: Boolean, trim: true, required: true },
        dailyDinningRoomSize: { type: String, trim: true, required: false },
        hasLivingRoom: { type: Boolean, trim: true, required: true },
        livingRoomSize: { type: String, trim: true, required: false },
        hasLaundryRoom: { type: Boolean, trim: true, required: true },
        laundryRoomSize: { type: String, trim: true, required: false },
        hasYard: { type: Boolean, trim: true, required: true },
        yardSize: { type: String, trim: true, required: false },
        hasHall: { type: Boolean, trim: true, required: true },
        hallSize: { type: String, trim: true, required: false },
        hasDesktop: { type: Boolean, trim: true, required: true },
        desktopSize: { type: String, trim: true, required: false },
        hasPlayroom: { type: Boolean, trim: true, required: true },
        playroomSize: { type: String, trim: true, required: false },
        hasTerrace: { type: Boolean, trim: true, required: true },
        terraceSize: { type: String, trim: true, required: false },
        hasBarbecue: { type: Boolean, trim: true, required: true },
        barbecueSize: { type: String, trim: true, required: false },
        hasPool: { type: Boolean, trim: true, required: true },
        poolSize: { type: String, trim: true, required: false },
        hasServiceDependency: { type: Boolean, trim: true, required: true },
        serviceDependencySize: { type: String, trim: true, required: false },
        hasFloors: { type: Boolean, trim: true, required: true },
        floorsQuantity: { type: Number, trim: true, required: true },
        hasGarages: { type: Boolean, trim: true, required: true },
        garagesQuantity: { type: Number, trim: true, required: false },
        garagesType: { type: String, trim: true, required: false },
        garagesCover: { type: String, trim: true, required: false },
        antiquity: { type: String, trim: true, required: true },
        antiquityYears: { type: Number, trim: true, required: false },
      },
      generalFeatures: {
        frontSize: { type: Number, trim: true, required: true },
        backSize: { type: Number, trim: true, required: true },
        insideFlooring: { type: String, trim: true, required: true },
        woodFlooring: { type: String, trim: true, required: true },
        outsideFlooring: { type: String, trim: true, required: true },
        outsideWalls: { type: String, trim: true, required: true },
        ceiling: { type: String, trim: true, required: true },
        estateState: { type: String, trim: true, required: true },
        orientation: { type: String, trim: true, required: true },
        view: { type: String, trim: true, required: true },
        coast: { type: String, trim: true, required: true },
        slope: { type: String, trim: true, required: true },
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
        studio: { type: Boolean, trim: true, required: true },
        familyRoom: { type: Boolean, trim: true, required: true },
        gallery: { type: Boolean, trim: true, required: true },
        shed: { type: Boolean, trim: true, required: true },
        garage: { type: Boolean, trim: true, required: true },
        garden: { type: Boolean, trim: true, required: true },
        freeBackground: { type: Boolean, trim: true, required: true },
        shop: { type: Boolean, trim: true, required: true },
        office: { type: Boolean, trim: true, required: true },
        palier: { type: Boolean, trim: true, required: true },
        grill: { type: Boolean, trim: true, required: true },
        livingRoom: { type: Boolean, trim: true, required: true },
        basement: { type: Boolean, trim: true, required: true },
        suite: { type: Boolean, trim: true, required: true },
        lobby: { type: Boolean, trim: true, required: true },
        dressingRoom: { type: Boolean, trim: true, required: true },
        lockerRoom: { type: Boolean, trim: true, required: true },
      },
      installations: {
        sewerWater: { type: Boolean, trim: true, required: true },
        hotAir: { type: Boolean, trim: true, required: true },
        televisionCable: { type: Boolean, trim: true, required: true },
        heatingBalanced: { type: Boolean, trim: true, required: true },
        breakfastNook: { type: Boolean, trim: true, required: true },
        bottledGas: { type: Boolean, trim: true, required: true },
        underfloorHeating: { type: Boolean, trim: true, required: true },
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
        individualAirConditioner: { type: Boolean, trim: true, required: true },
        kitchenGadgets: { type: Boolean, trim: true, required: true },
        singleBoiler: { type: Boolean, trim: true, required: true },
        soccerField: { type: Boolean, trim: true, required: true },
        tennisCourt: { type: Boolean, trim: true, required: true },
        vehicleSpace: { type: Boolean, trim: true, required: true },
        whirlpool: { type: Boolean, trim: true, required: true },
        reducedMobilityAccess: { type: Boolean, trim: true, required: true },
        solarium: { type: Boolean, trim: true, required: true },
        elevator: { type: Boolean, trim: true, required: true },
        heating: { type: Boolean, trim: true, required: true },
        airExtractor: { type: Boolean, trim: true, required: true },
        fireplace: { type: Boolean, trim: true, required: true },
        pavement: { type: Boolean, trim: true, required: true },
        hotWaterTank: { type: Boolean, trim: true, required: true },
        sprinklerIrrigation: { type: Boolean, trim: true, required: true },
        runningWater: { type: Boolean, trim: true, required: true },
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
        commutator: { type: Boolean, trim: true, required: true },
        internet: { type: Boolean, trim: true, required: true },
        linen: { type: Boolean, trim: true, required: true },
        videoCable: { type: Boolean, trim: true, required: true },
      },
      multimedia: {
        frontPage: { type: String, trim: true, required: true },
        photoTour360: { type: String, trim: true, required: true },
        photo360: {
          photo1: { type: String, trim: true, required: false },
          photo2: { type: String, trim: true, required: false },
          photo3: { type: String, trim: true, required: false },
          photo4: { type: String, trim: true, required: false },
          photo5: { type: String, trim: true, required: false },
          photo6: { type: String, trim: true, required: false },
          photo7: { type: String, trim: true, required: false },
          photo8: { type: String, trim: true, required: false },
          photo9: { type: String, trim: true, required: false },
          photo10: { type: String, trim: true, required: false },
          photo11: { type: String, trim: true, required: false },
          photo12: { type: String, trim: true, required: false },
          photo13: { type: String, trim: true, required: false },
          photo14: { type: String, trim: true, required: false },
          photo15: { type: String, trim: true, required: false },
          photo16: { type: String, trim: true, required: false },
        },
      },
      additionalInformation: {
        description: { type: String, trim: true, required: true },
        notes: { type: String, trim: true, required: false },
      },
      contactOwner: {
        email: { type: String, trim: true, required: true },
        telephone: { type: Number, trim: true, required: true },
        mobile: { type: Number, trim: true, required: true },
        alternativeTelephone: { type: Number, trim: true, required: true },
        whatsApp: { type: Number, trim: true, required: true },
      },
      statistics: {
        views: { type: Number, trim: true, required: false },
        queries: { type: Number, trim: true, required: false },
        viewsTour: { type: Number, trim: true, required: false },
        interested: { type: Number, trim: true, required: false },
        offered: { type: Number, trim: true, required: false },
        reserved: { type: Number, trim: true, required: false },
        likes: { type: Number, trim: true, required: false },
      },
    },
  ],
  {
    timestamps: true,
  }
);

const House = mongoose.model('estates', houseSchema);
export default House;