import mongoose, { Schema } from 'mongoose';

const fieldSchema = new mongoose.Schema(
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
        pavementDistance: { type: Number, trim: true, required: true },
        hectaresQuantity: { type: Number, trim: true, required: false },
      },
      generalFeatures: {
        estateState: { type: String, trim: true, required: true },
      },
      installations: {
        electricity: { type: Boolean, trim: true, required: true },
        runningWater: { type: Boolean, trim: true, required: true },
        boxes: { type: Boolean, trim: true, required: true },
        electricLight: { type: Boolean, trim: true, required: true },
        wellWater: { type: Boolean, trim: true, required: true },
        waterSources: { type: Boolean, trim: true, required: true },
        grove: { type: Boolean, trim: true, required: true },
        drinker: { type: Boolean, trim: true, required: true },
        straps: { type: Boolean, trim: true, required: true },
        barnyard: { type: Boolean, trim: true, required: true },
        fence: { type: Boolean, trim: true, required: true },
        afforestation: { type: Boolean, trim: true, required: true },
        pits: { type: Boolean, trim: true, required: true },
        horseFarm: { type: Boolean, trim: true, required: true },
        reducedFence: { type: Boolean, trim: true, required: true },
        windmill: { type: Boolean, trim: true, required: true },
        livingPlace: { type: Boolean, trim: true, required: true },
        sewageTreatment: { type: Boolean, trim: true, required: true },
        wireFences: { type: Boolean, trim: true, required: true },
      },
      services: {
        councilTax: { type: Boolean, trim: true, required: true },
        electricity: { type: Boolean, trim: true, required: true },
        bottledGas: { type: Boolean, trim: true, required: true },
        naturalGas: { type: Boolean, trim: true, required: true },
        realEstateTax: { type: Boolean, trim: true, required: true },
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

const Field = mongoose.models.estates || mongoose.model('estates', fieldSchema);
export default Field;