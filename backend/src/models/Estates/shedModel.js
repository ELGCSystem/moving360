import mongoose, { Schema } from 'mongoose';

const shedSchema = new mongoose.Schema(
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
        hasBathrooms: { type: Boolean, trim: true, required: true },
        bathroomsQuantity: { type: Number, trim: true, required: true },
        bathroomsSize: { type: String, trim: true, required: false },
        hasToilettes: { type: Boolean, trim: true, required: true },
        toilettesQuantity: { type: Number, trim: true, required: true },
        toilettesSize: { type: String, trim: true, required: false },
        columnsQuantity: { type: Number, trim: true, required: true },
        shedsQuantity: { type: Number, trim: true, required: true },
        hasFloors: { type: Boolean, trim: true, required: true },
        floorsQuantity: { type: Number, trim: true, required: true },
        antiquity: { type: String, trim: true, required: true },
        antiquityYears: { type: Number, trim: true, required: false },
      },
      generalFeatures: {
        frontSize: { type: Number, trim: true, required: true },
        backSize: { type: Number, trim: true, required: true },
        ceilingHeight: { type: Number, trim: true, required: true },
        entranceWidth: { type: Number, trim: true, required: true },
        entranceHeight: { type: Number, trim: true, required: true },
        fullLoadFactor: { type: Number, trim: true, required: true },
        estateState: { type: String, trim: true, required: true },
        industrialRoofType: { type: String, trim: true, required: true },
        gateType: { type: String, trim: true, required: true },
        heatingType: { type: String, trim: true, required: true },
      },
      installations: {
        bottledGas: { type: Boolean, trim: true, required: true },
        electricity: { type: Boolean, trim: true, required: true },
        naturalGas: { type: Boolean, trim: true, required: true },
        centralAirConditioner: { type: Boolean, trim: true, required: true },
        individualAirConditioner: { type: Boolean, trim: true, required: true },
        singleBoiler: { type: Boolean, trim: true, required: true },
        hotWaterTank: { type: Boolean, trim: true, required: true },
        generator: { type: Boolean, trim: true, required: true },
        telephone: { type: Boolean, trim: true, required: true },
        runningWater: { type: Boolean, trim: true, required: true },
        weightScale: { type: Boolean, trim: true, required: true },
        pumper: { type: Boolean, trim: true, required: true },
        drivingForce: { type: Boolean, trim: true, required: true },
        industrialGas: { type: Boolean, trim: true, required: true },
        crane: { type: Boolean, trim: true, required: true },
        liftTruck: { type: Boolean, trim: true, required: true },
        motors: { type: Boolean, trim: true, required: true },
        gate: { type: Boolean, trim: true, required: true },
        waterTank: { type: Boolean, trim: true, required: true },
        fireTank: { type: Boolean, trim: true, required: true },
        electricLight: { type: Boolean, trim: true, required: true },
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
        naturalGas: { type: Boolean, trim: true, required: true },
        realEstateTax: { type: Boolean, trim: true, required: true },
        internet: { type: Boolean, trim: true, required: true },
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

const Shed = mongoose.models.estates || mongoose.model('estates', shedSchema);
export default Shed;