import mongoose, { Schema } from 'mongoose';

const traditionalSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true }, //Nombre de Inmobiliaria
    nameRunner: { type: String, trim: true, required: true }, //Nombre de Corredor Inmobiliario
    numTuition: { type: Number, trim: true, required: true }, //Número Matrícula
    cuit: { type: Number, trim: true, required: true }, //Número de CUIT
    categoryAfip: { type: String, trim: true, required: true }, //Categorización del AFIP
    address: {
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
    email: { type: String, trim: true, required: true }, //Email de Inmobiliaria
    tel: { type: Number, trim: true, required: false }, //Teléfono Fijo de Inmobiliaria
    mobile: { type: Number, trim: true, required: false }, //Teléfono Móvil de Inmobiliaria
    password: { type: String, trim: true, required: true }, //Contraseña
    numClient: { type: Number, trim: true, required: false }, //Número de Cuenta Cliente
    state: { type: Number, trim: true, required: true }, //Estado de la Cuenta
    namePrincipal: { type: String, trim: true, required: true }, //Nombre Principal
    attrib: {
      //Campos de Atribuciones
      typePayment: { type: String, trim: true, required: true }, //Tipo de Abono
      payment: { type: String, trim: true, required: true }, //Forma de Cobro
      billing: { type: String, trim: true, required: true }, //Forma de Facturación
      label: { type: String, trim: true, required: true }, //Clasificación Cliente
    },
    role: {
      //Campos de Roles
      isAdmin: { type: Boolean, required: true, default: false }, //Tipo de Usuario Administrador
      isBuyer: { type: Boolean, required: true, default: false }, //Tipo de Usuario Comprador
      isOwner: { type: Boolean, required: true, default: false }, //Tipo de Usuario Dueño
      isSeller: { type: Boolean, required: true, default: false }, //Tipo de Usuario Vendedor
    },
    realEstate: {
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
  },
  {
    timestamps: true,
  }
);

const Traditional = mongoose.models.users || mongoose.model('users', traditionalSchema);
export default Traditional;
