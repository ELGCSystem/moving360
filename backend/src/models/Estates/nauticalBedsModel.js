import mongoose, { Schema } from 'mongoose';

const nauticalBedsSchema = new mongoose.Schema(
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
        length: { type: Number, trim: true, required: false },
        width: { type: Number, trim: true, required: false },
        height: { type: Number, trim: true, required: false },
        antiquity: { type: String, trim: true, required: true },
        antiquityYears: { type: Number, trim: true, required: false },
      },
      generalFeatures: {
        estateState: { type: String, trim: true, required: true },
      },
      installations: {
        reducedMobilityAccess: { type: Boolean, trim: true, required: true },
      },
      services: {
        vigilance: { type: Boolean, trim: true, required: true },
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

const NauticalBeds = mongoose.model('nauticalBeds', nauticalBedsSchema);
export default NauticalBeds;