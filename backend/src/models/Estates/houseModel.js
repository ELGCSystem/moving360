import mongoose, { Schema } from 'mongoose';

const houseSchema = new mongoose.Schema(
  [
    {
      typeUnit: { type: String, trim: true, required: true }, // Tipo de Unidad
      typeOperation: { type: String, trim: true, required: true }, // Tipo de Operación
      price: { type: Number, trim: true, required: true }, // Precio
      typePrice: { type: String, trim: true, required: true }, // Tipo de Precio
      state: { type: String, trim: true, required: true }, // Estado del Inmueble
      credit: { type: Boolean, trim: true, required: true }, // Apto Crédito
      barter: { type: Boolean, trim: true, required: true }, // Apto Permuta
      profesional: { type: Boolean, trim: true, required: true }, // Apto Profesional
      occupied: { type: Boolean, trim: true, required: true }, // Propiedad Ocupada
      pets: { type: Boolean, trim: true, required: true }, // Apto Mascotas
      title: { type: String, trim: true, required: true }, // Título del aviso
      valueInit: { type: Number, trim: true, required: true }, // Compartir comisión del 50%
      valueHalf: { type: Number, trim: true, required: true }, // Compartir comisión del 30%
      valueFinal: { type: Number, trim: true, required: true }, // No compartir comisión

      covered: { type: Number, trim: true, required: true }, // Superficie Cubierta
      semiCovered: { type: Number, trim: true, required: true }, // Superficie Semi-Cubierta
      discovered: { type: Number, trim: true, required: true }, // Superficie Descubierta
      total: { type: Number, trim: true, required: true }, // Superficie del Terreno

      country: { type: String, trim: true, required: true }, // País
      state: { type: String, trim: true, required: true }, // Provincia
      town: { type: String, trim: true, required: true }, // Partido
      locality: { type: String, trim: true, required: true }, // Localidad
      nameStreet: { type: String, trim: true, required: true }, // Calle
      numberStreet: { type: Number, trim: true, required: true }, // Altura
      flat: { type: Number, trim: true, required: true }, // Piso
      department: { type: Number, trim: true, required: true }, // Departamento
      postalCode: { type: String, trim: true, required: true }, // Código Postal
      exactLocation: { type: String, trim: true, required: true }, // Localización Exacta de la propiedad

      isBedroom: { type: Boolean, trim: true, required: true }, // Contiene Dormitorio
      amountBedroom: { type: Number, trim: true, required: true }, // Cantidad de dormitorios
      sizeBedroom: { type: Number, trim: true, required: true }, // Tamaño de Dormitorios

      isBathroom: { type: Boolean, trim: true, required: true }, // Contiene Baños
      amountBathroom: { type: Number, trim: true, required: true }, // Cantidad de Baños
      sizeBathroom: { type: Number, trim: true, required: true }, // Tamaño de Baños

      isToilettes: { type: Boolean, trim: true, required: true }, // Contiene Toilettes
      amountToilettes: { type: Number, trim: true, required: true }, //Cantidad de Toilettes
      sizeToilettes: { type: Number, trim: true, required: true }, // Tamaño de Toilettes

      isBathroomSuite: { type: Boolean, trim: true, required: true }, // Contiene Baños en Suite
      amountBathroomSuite: { type: Number, trim: true, required: true }, // Cantidad de Baños en Suite
      sizeBathroomSuite: { type: Number, trim: true, required: true }, // Tamaño de Toilettes

      amountEnvironments: { type: Number, trim: true, required: true }, // Cantidad de Ambientes

      isKitchen: { type: Boolean, trim: true, required: true }, // Contiene Cocina
      sizeKitchen: { type: Number, trim: true, required: true }, // Tamaño de Cocina

      isKitchenIntegrated: { type: Boolean, trim: true, required: true }, // Contiene Cocina Integrada
      sizeKitchenIntegrated: { type: Number, trim: true, required: true }, // Tamaño de Cocina Integrada

      isDinningRoom: { type: Boolean, trim: true, required: true }, // Contiene Comedor
      sizeDinningRoom: { type: Number, trim: true, required: true }, // Tamaño de Comedor

      isDinningRoomDaily: { type: Boolean, trim: true, required: true }, // Contiene Comedor Diario
      sizeDinningRoomDaily: { type: Number, trim: true, required: true }, // Tamaño de Comedor Diario

      isLiving: { type: Boolean, trim: true, required: true }, // Contiene Living
      sizeLiving: { type: Number, trim: true, required: true }, // Tamaño de Living

      isLaundry: { type: Boolean, trim: true, required: true }, // Contiene Lavadero
      sizeLaundry: { type: Number, trim: true, required: true }, // Tamaño de Lavadero

      isYard: { type: Boolean, trim: true, required: true }, // Contiene Patio
      sizeYard: { type: Number, trim: true, required: true }, // Tamaño de Patio

      isHall: { type: Boolean, trim: true, required: true }, // Contiene Hall
      sizeHall: { type: Number, trim: true, required: true }, // Tamaño de Hall

      isDesktop: { type: Boolean, trim: true, required: true }, // Contiene Escritorio
      sizeDesktop: { type: Number, trim: true, required: true }, // Tamaño de Escritorio

      isPlayroom: { type: Boolean, trim: true, required: true }, // Contiene Cuarto de Juegos
      sizePlayroom: { type: Number, trim: true, required: true }, // Tamaño de Cuarto de Juegos

      isTerrace: { type: Boolean, trim: true, required: true }, // Contiene Terraza
      sizeTerrace: { type: Number, trim: true, required: true }, // Tamaño de Terraza

      isBarbecue: { type: Boolean, trim: true, required: true }, // Contiene Quincho
      sizeBarbecue: { type: Number, trim: true, required: true }, // Tamaño de Quincho

      isPool: { type: Boolean, trim: true, required: true }, // Contiene Pileta
      sizePool: { type: Number, trim: true, required: true }, // Tamaño de Pileta

      isServiceDependency: { type: Boolean, trim: true, required: true }, // Contiene Dependencia de Servicio
      sizeServiceDependency: { type: Number, trim: true, required: true }, // Tamaño de Dependencia de Servicio

      isHerbage: { type: Boolean, trim: true, required: true }, // Contiene Plantas
      amountHerbage: { type: Number, trim: true, required: true }, // Cantidad de Plantas

      isGarage: { type: Boolean, trim: true, required: true }, // Contiene Garage
      amountGarage: { type: Number, trim: true, required: true }, //Cantidad de Garage
      coverGarage: { type: Number, trim: true, required: true }, // Cobertura de Garage

      antique: { type: String, trim: true, required: true }, // Antigüedad del Inmueble
      years: { type: Number, trim: true, required: true }, // Años de antigüedad

      mesaureFront: { type: Number, trim: true, required: true }, // Medidas del Frente
      measureBack: { type: Number, trim: true, required: true }, // Medidas del Fondo

      typeFlatInside: { type: String, trim: true, required: true }, // Tipo de piso (Interior)
      typeFlatWood: { type: String, trim: true, required: true }, // Tipo de piso de Madera
      typeFlatOutside: { type: String, trim: true, required: true }, // Tipo de piso (Exterior)
      wallOutside: { type: String, trim: true, required: true }, // Tipo de Paredes (Exteriores)
      ceiling: { type: String, trim: true, required: true }, // Tipo de Techo

      stateEstate: { type: String, trim: true, required: true }, // Estado de la propiedad
      orientation: { type: String, trim: true, required: true }, // Orientación de la propiedad
      typeView: { type: String, trim: true, required: true }, // Tipo de Vista
      typeCoast: { type: String, trim: true, required: true }, // Tipo de Costa
      typeSlope: { type: String, trim: true, required: true }, // Tipo de Pendiente

      loft: { type: Boolean, trim: true, required: true }, // Contiene Altillo
      beforeKitchen: { type: Boolean, trim: true, required: true }, // Contiene ante Cocina
      beforeLiving: { type: Boolean, trim: true, required: true }, // Contiene ante Sala
      rooftop: { type: Boolean, trim: true, required: true }, // Contiene Azotea
      balcony: { type: Boolean, trim: true, required: true }, // Contiene Balcón
      balconyTerraced: { type: Boolean, trim: true, required: true }, // Contiene Balcón Aterrazado
      bar: { type: Boolean, trim: true, required: true }, // Contiene Bar
      trunk: { type: Boolean, trim: true, required: true }, // Contiene Baulera
      library: { type: Boolean, trim: true, required: true }, // Contiene Biblioteca
      cellar: { type: Boolean, trim: true, required: true }, // Contiene Bodega
      toolRoom: { type: Boolean, trim: true, required: true }, // Contiene cuarto de Herramientas
      ironingRoom: { type: Boolean, trim: true, required: true }, // Contiene Cuarto de Planchar
      betweenFloor: { type: Boolean, trim: true, required: true }, // Contiene Entre Piso
      study: { type: Boolean, trim: true, required: true }, // Contiene Estudio
      familyRoom: { type: Boolean, trim: true, required: true }, // Contiene Cuarto Familiar
      gallery: { type: Boolean, trim: true, required: true }, // Contiene Galería
      shed: { type: Boolean, trim: true, required: true }, // Contiene Galpón
      garage: { type: Boolean, trim: true, required: true }, // Contiene Garage
      garden: { type: Boolean, trim: true, required: true }, // Contiene Jardín
      freeBackground: { type: Boolean, trim: true, required: true }, // Contiene Fondo Libre
      local: { type: Boolean, trim: true, required: true }, // Contiene Local
      office: { type: Boolean, trim: true, required: true }, // Contiene Oficina
      palier: { type: Boolean, trim: true, required: true }, // Contiene Palier
      grill: { type: Boolean, trim: true, required: true }, // Contiene Parrilla
      livingRoom: { type: Boolean, trim: true, required: true }, // Contiene Sala
      basement: { type: Boolean, trim: true, required: true }, // Contiene Sotano
      suiteRoom: { type: Boolean, trim: true, required: true }, // Contiene Suite
      lobby: { type: Boolean, trim: true, required: true }, // Contiene Vestíbulo
      dressingRoom: { type: Boolean, trim: true, required: true }, // Contiene Vestidor
      lockerRoom: { type: Boolean, trim: true, required: true }, // Contiene Vestuario

      sewer: { type: Boolean, trim: true, required: true }, // Contiene Agua Cloaca
      airHot: { type: Boolean, trim: true, required: true }, // Contiene Aire Caliente
      televisionCable: { type: Boolean, trim: true, required: true }, // Contiene Cable
      heatingBalanced: { type: Boolean, trim: true, required: true }, // Contiene Calefacción Tiro Balanceado
      breakfastNook: { type: Boolean, trim: true, required: true }, // Contiene Desayunador
      bottledGas: { type: Boolean, trim: true, required: true }, // Contiene Gas Envasado
      underfloorHeating: { type: Boolean, trim: true, required: true }, // Contiene Losa Radiante
      pool: { type: Boolean, trim: true, required: true }, // Contiene Pileta
      individualRadiantFloor: { type: Boolean, trim: true, required: true }, // Contiene Piso Radiante Individual
      hotWater: { type: Boolean, trim: true, required: true }, // Contiene Agua Caliente
      furnished: { type: Boolean, trim: true, required: true }, // Contiene Amoblado
      safe: { type: Boolean, trim: true, required: true }, // Contiene Cafa Fuerte
      waterHeater: { type: Boolean, trim: true, required: true }, // Contiene Calefón
      electricityInstalation: { type: Boolean, trim: true, required: true }, // Contiene Electricidad
      naturalGas: { type: Boolean, trim: true, required: true }, // Contiene Gas Natural
      kitchenFurniture: { type: Boolean, trim: true, required: true }, // Contiene Muebles de Cocina
      radiators: { type: Boolean, trim: true, required: true }, // Contiene Radiadores
      centralRadiantFloor: { type: Boolean, trim: true, required: true }, // Contiene Piso Radiante Central
      centralAirConditioner: { type: Boolean, trim: true, required: true }, // Contiene Aire Acondicionado Central
      individualAirConditioning: {
        type: Boolean,
        trim: true,
        required: true,
      }, // Contiene Aire Acondicionado Individual
      kitchenGadgets: { type: Boolean, trim: true, required: true }, // Contiene Artefactos de Cocina
      singleBoiler: { type: Boolean, trim: true, required: true }, // Contiene Caldera Individual
      soccerField: { type: Boolean, trim: true, required: true }, // Contiene Cancha de Fútbol
      tennisCourt: { type: Boolean, trim: true, required: true }, // Contiene Cancha de Tenis
      vehicleSpace: { type: Boolean, trim: true, required: true }, // Contiene Espacio Vehicular
      whirlpool: { type: Boolean, trim: true, required: true }, // Contiene Hidromasaje
      reducedMobilityAccess: { type: Boolean, trim: true, required: true }, // Contiene Acceso con Movilidad Reducida
      elevator: { type: Boolean, trim: true, required: true }, // Contiene Ascensor
      Heating: { type: Boolean, trim: true, required: true }, // Contiene Calefacción
      airExtractor: { type: Boolean, trim: true, required: true }, // Contiene Extractor de Aire
      fireplace: { type: Boolean, trim: true, required: true }, // Contiene Hogar a leña
      pavement: { type: Boolean, trim: true, required: true }, // Contiene Pavimento
      hotWaterTank: { type: Boolean, trim: true, required: true }, // Contiene Termotanque
      sprinklerIrrigation: { type: Boolean, trim: true, required: true }, // Contiene Riego por aspersión

      councilTax: { type: Boolean, trim: true, required: true }, // Contiene Impuesto Municipal
      electricity: { type: Boolean, trim: true, required: true }, // Contiene Electricidad
      cleaning: { type: Boolean, trim: true, required: true }, // Contiene Limpieza
      security: { type: Boolean, trim: true, required: true }, // Contiene Seguridad
      vigilance: { type: Boolean, trim: true, required: true }, // Contiene Vigilancia
      runningWater: { type: Boolean, trim: true, required: true }, // Contiene Agua Corriente
      bottledGas: { type: Boolean, trim: true, required: true }, // Contiene Gas Envasado
      refrigeration: { type: Boolean, trim: true, required: true }, // Contiene Refrigeración
      telephone: { type: Boolean, trim: true, required: true }, // Contiene Teléfono
      heating: { type: Boolean, trim: true, required: true }, // Contiene Calefacción
      naturalGas: { type: Boolean, trim: true, required: true }, // Contiene Gas Natural
      realEstateTax: { type: Boolean, trim: true, required: true }, // Contiene Impuesto Inmobiliario
      towels: { type: Boolean, trim: true, required: true }, // Contiene Toallas
      conmutador: { type: Boolean, trim: true, required: true }, // Contiene Conmutador
      internet: { type: Boolean, trim: true, required: true }, // Contiene Internet
      linen: { type: Boolean, trim: true, required: true }, // Contiene Ropa de Cama
      videoCable: { type: Boolean, trim: true, required: true }, // Contiene Video Cable

      frontPage: { type: String, trim: true, required: true }, // Foto de Portada

      photoTour360: { type: String, trim: true, required: true }, // Archivo de Tour 360

      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360
      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360
      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360
      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360
      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360
      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360
      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360
      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360
      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360
      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360
      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360
      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360
      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360
      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360
      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360
      photo360: { type: String, trim: true, required: false }, // Fotos para Edición para el tour 360

      description: { type: String, trim: true, required: true }, // Descripción de la propiedad
      notes: { type: String, trim: true, required: false }, // Notas para el propietario acerca de la propiedad

      email: { type: String, trim: true, required: true }, // Email del Dueño
      telephone: { type: Number, trim: true, required: true }, // Teléfono del Dueño
      mobile: { type: Number, trim: true, required: true }, // Celular del Dueño
      alternativeTelephone: { type: Number, trim: true, required: true }, // Teléfono Alternativo del Dueño
      whatsApp: { type: Number, trim: true, required: true }, // Whatsapp del Dueño

      views: { type: Number, trim: true, required: false }, //Cantidad de Veces que se vió la propiedad
      queries: { type: Number, trim: true, required: false }, //Cantidad de Veces que se consultó por la propiedad
      viewsTour: { type: Number, trim: true, required: false }, //Cantidad de Veces que se vió el tour de la propiedad
      interested: { type: Number, trim: true, required: false }, //Cantidad de Veces que se dió click en el botón de "Me interesa"
      offered: { type: Number, trim: true, required: false }, //Cantidad de Veces que se dió click en el botón de "Ofertar"
      reserved: { type: Number, trim: true, required: false }, //Cantidad de Veces que se dió click en el botón de "Reservar"
      likes: { type: Number, trim: true, required: false }, //Cantidad de Veces que se dió click en el botón de "Me GUsta"
    },
  ],
  {
    timestamps: true,
  }
);

const House = mongoose.model('houses', houseSchema);
export default House;
