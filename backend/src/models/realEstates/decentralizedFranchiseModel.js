import mongoose, { Schema } from 'mongoose';

const decentralizedSchema = new mongoose.Schema(
  {
    nameFranchise: { type: String, trim: true, required: true }, //Nombre de Franquicia
    nameFranchisee: { type: String, trim: true, required: true }, //Nombre de Franquiciado
    nameEnterprise: { type: String, trim: true, required: true }, //Nombre de Empresa
    cuit: { type: Number, trim: true, required: true }, //Número de CUIT / Broker
    nameBroker: { type: String, trim: true, required: true }, //Nombre de Broker
    nameRunner: { type: String, trim: true, required: true }, //Nombre de Corredor Inmobiliario
    numTuition: { type: Number, trim: true, required: true }, //Número Matrícula
    nameAdministration: { type: String, trim: true, required: true }, //Nombre de Administrativa
    mobileAdministration: { type: Number, trim: true, required: false }, //Teléfono Móvil Administrativa
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
    nameAgent: { type: String, trim: true, required: true }, //Nombre de Agente
    mobileAgent: { type: Number, trim: true, required: false }, //Teléfono Móvil Agente
    emailAgent: { type: String, trim: true, required: true }, //Email Agente
    password: { type: String, trim: true, required: true }, //Contraseña
    numClient: { type: Number, trim: true, required: false }, //Número de Cuenta Cliente
    state: { type: Number, trim: true, required: true }, //Estado de la Cuenta
    categoryAfip: { type: String, trim: true, required: true }, //Categorización del AFIP
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

const Decentralized = mongoose.model('users', decentralizedSchema);
export default Decentralized;
