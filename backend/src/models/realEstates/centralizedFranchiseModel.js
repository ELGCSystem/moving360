import mongoose, { Schema } from 'mongoose';

const centralizedSchema = new mongoose.Schema(
  {
    nameFranchise: { type: String, trim: true, required: true }, //Nombre de Franquicia
    nameFranchisee: { type: String, trim: true, required: true }, //Nombre de Franquiciado
    nameEnterprise: { type: String, trim: true, required: true }, //Nombre de Empresa
    cuit: { type: Number, trim: true, required: true }, //Número de CUIT / Broker
    nameBroker: { type: String, trim: true, required: true }, //Nombre de Broker
    nameRunner: { type: String, trim: true, required: true }, //Nombre de Corredor Inmobiliario
    numTuition: { type: Number, trim: true, required: true }, //Número Matrícula
    nameAdministration: { type: String, trim: true, required: true }, //Nombre de Administrativa
    address: [
      {
        //Campos de Dirección
        street: { type: String, trim: true, required: true }, //Nombre de Calle
        num: { type: Number, trim: true, required: true }, //Altura de Calle
        flat: { type: Number, trim: true, required: false }, //Número de Piso
        apartment: { type: Number, trim: true, required: false }, //Número de Departamento
        neighborhood: { type: String, trim: true, required: true }, //Nombre de Barrio
        location: { type: String, trim: true, required: true }, //Nombre de Localidad
        district: { type: String, trim: true, required: true }, //Nombre de Partido
        province: { type: String, trim: true, required: true }, //Nombre de Provincia
      },
    ],
    emailPrincipal: { type: String, trim: true, required: true }, //Email Principal
    telPrincipal: { type: Number, trim: true, required: false }, //Teléfono Fijo Principal
    mobileBroker: { type: Number, trim: true, required: false }, //Teléfono Móvil de Broker
    emailBroker: { type: String, trim: true, required: true }, //Email Broker
    mobileRunner: { type: Number, trim: true, required: false }, //Teléfono Móvil Corredor Inmobiliario
    password: { type: String, trim: true, required: true }, //Contraseña
    emailRunner: { type: String, trim: true, required: true }, //Email Corredor Inmobiliario
    mobileAdministration: { type: Number, trim: true, required: false }, //Teléfono Móvil Administrativa
    emailAdministration: { type: String, trim: true, required: true }, //Email Administrativa
    numClient: { type: Number, trim: true, required: false }, //Número de Cuenta Cliente
    state: { type: Number, trim: true, required: true }, //Estado de la Cuenta
    namePrincipal: { type: String, trim: true, required: true }, //Nombre Principal
    attrib: [
      {
        //Campos de Atribuciones
        typePayment: { type: String, trim: true, required: true }, //Tipo de Abono
        payment: { type: String, trim: true, required: true }, //Forma de Cobro
        billing: { type: String, trim: true, required: true }, //Forma de Facturación
        label: { type: String, trim: true, required: true }, //Clasificación Cliente
      },
    ],
    categoryAfip: { type: String, trim: true, required: true }, //Categorización del AFIP
    role: [
      {
        //Campos de Roles
        isAdmin: { type: Boolean, required: true, default: false }, //Tipo de Usuario Administrador
        isBuyer: { type: Boolean, required: true, default: false }, //Tipo de Usuario Comprador
        isOwner: { type: Boolean, required: true, default: false }, //Tipo de Usuario Dueño
        isSeller: { type: Boolean, required: true, default: false }, //Tipo de Usuario Vendedor
      },
    ],
    realEstate: [
      {
        //Campos de Inmobiliaria
        isTraditional: { type: Boolean, required: true, default: false }, //Tipo de Usuario Inmobiliario Tradicional
        isFranchiseCentralized: {
          type: Boolean,
          required: true,
          default: false,
        }, //Tipo de Usuario Inmobiliario Franquicia Centralizada
        isFranchiseDecentralized: {
          type: Boolean,
          required: true,
          default: false,
        }, //Tipo de Usuario Inmobiliario Franquicia Descentralizada
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Centralized = mongoose.model('centralizedFranchise', centralizedSchema);
export default Centralized;
