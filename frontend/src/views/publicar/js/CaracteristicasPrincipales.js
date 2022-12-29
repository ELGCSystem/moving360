const house = ['bedrooms', 'bathrooms', 'toilettes', 'suiteBathrooms', 'environmentsQuantity', 'kitchen', 'integratedKitchen', 'dinningRoom', 'dailyDinningRoom', 'livingRoom', 'yard', 'hall', 'desktop', 'playroom', 'terrace', 'barbecue', 'pool', 'serviceDependency', 'floors', 'hasGarages', 'garagesType', 'garagesCover', 'antiquity'];

const apartment = ['bedrooms', 'bathrooms', 'toilettes', 'suiteBathrooms', 'environmentsQuantity', 'setup', 'kitchen', 'integratedKitchen', 'dinningRoom', 'dailyDinningRoom', 'livingRoom', 'yard', 'hall', 'desktop', 'playroom', 'terrace', 'barbecue', 'pool', 'serviceDependency', 'floors', 'balcony','hasGarages', 'garagesType', 'garagesCover', 'antiquity'];

const phApartment = ['bedrooms', 'bathrooms', 'toilettes', 'suiteBathrooms', 'environmentsQuantity', 'kitchen', 'integratedKitchen', 'dinningRoom', 'dailyDinningRoom', 'livingRoom', 'yard', 'hall', 'desktop', 'playroom', 'terrace', 'barbecue', 'pool', 'serviceDependency', 'floors', 'hasGarages', 'garagesType', 'garagesCover', 'antiquity'];

const garage = ['garagesType', 'garagesCover', 'garagesExtras', 'antiquity'];

const office = ['bathrooms', 'toilettes', 'environmentsQuantity', 'kitchen', 'terrace', 'balcony', 'hasGarages', 'garagesType', 'garagesCover', 'antiquity'];

const shop = ['bathrooms', 'toilettes', 'environmentsQuantity', 'floors', 'hasGarages', 'garagesType', 'garagesCover', 'antiquity'];

const shed = ['bathrooms', 'toilettes', 'columnsSheds', 'floors'];

const goodwill = [];
const field = [];
const countryHouse = [];
const terrain = [];
const hotel = [];
const plotsNichesVaults = [];
const nauticalBeds = [];

export const getMainFeatures = (estate) => {
  switch (estate) {
    case 'casa': return house;
    case 'departamento': return apartment;
    case 'departamento-tipo-ph': return phApartment;
    case 'cochera': return garage;
    case 'oficina-consultorio': return office;
    case 'local': return shop;
    case 'galpon': return shed;
    case 'fondo-de-comercio': return goodwill;
    case 'campo': return field;
    case 'quinta': return countryHouse;
    case 'lote-terreno': return terrain;
    case 'hotel': return hotel;
    case 'parcelas-nichos-bovedas': return plotsNichesVaults;
    case 'camas-nauticas': return nauticalBeds;
    default: return [];
  }
};

export const mainEnvironments = [
  {
    id: 1,
    displayName: "Dormitorios",
    name: "bedrooms",
    className: "dormitorios",
    max: 20
  },
  {
    id: 2,
    displayName: "Baños",
    name: "bathrooms",
    className: "banos",
    max: 10
  },
  {
    id: 3,
    displayName: "Toilettes",
    name: "toilettes",
    className: "toilettes",
    max: 10
  },
  {
    id: 4,
    displayName: "Baños en suite",
    name: "suiteBathrooms",
    className: "banosSuite",
    max: 10
  }
];

export const features = [
    {
        id: 1,
        displayName: "Cocina",
        name: "kitchen",
        className: "cocina"
    },
    {
        id: 2,
        displayName: "Cocina integrada",
        name: "integratedKitchen",
        className: "cocina-integrada"
    },
    {
        id: 3,
        displayName: "Comedor",
        name: "dinningRoom",
        className: "comedor"
    },
    {
        id: 4,
        displayName: "Comedor diario",
        name: "dailyDinningRoom",
        className: "comedor-diario"
    },
    {
        id: 5,
        displayName: "Living",
        name: "livingRoom",
        className: "living"
    },
    {
        id: 6,
        displayName: "Lavadero",
        name: "laundryRoom",
        className: "lavadero"
    },
    {
        id: 7,
        displayName: "Patio",
        name: "yard",
        className: "patio"
    },
    {
        id: 8,
        displayName: "Hall",
        name: "hall",
        className: "hall"
    },
    {
        id: 9,
        displayName: "Escritorio",
        name: "desktop",
        className: "escritorio"
    },
    {
        id: 10,
        displayName: "Playroom",
        name: "playroom",
        className: "playroom"
    },
    {
        id: 11,
        displayName: "Terraza",
        name: "terrace",
        className: "terraza"
    },
    {
        id: 12,
        displayName: "Quincho",
        name: "barbecue",
        className: "quincho"
    },
    {
        id: 13,
        displayName: "Pileta",
        name: "pool",
        className: "pileta"
    },
    {
        id: 14,
        displayName: "Dependencia de servicio",
        name: "serviceDependency",
        className: "dependencia-servicio"
    }
];

export const setup = [
  {
    id: 1,
    title: "Frente"  
  },
  {
    id: 2,
    title: "Contra frente"  
  },
  {
    id: 3,
    title: "Interno"  
  },
  {
    id: 4,
    title: "Lateral"  
  },
];

export const balconyType = [
	{
		id: 1,
		title: "Corrido"  
	},
	{
		id: 2,
		title: "Francés"  
	},
	{
		id: 3,
		title: "Aterrazado"  
	},
];

export const garagesType = [
  {
    id: 1,
    title: "Fija"  
  },
  {
    id: 2,
    title: "Movil"  
  },
  {
    id: 3,
    title: "Espacio guarda coche"  
  },
  {
    id: 4,
    title: "Entrada de coche"  
  }
];

export const garagesCover = [
	  {
    	id: 1,
      	title: "Cubierta"  
    },
    {
      	id: 2,
      	title: "Semi cubierta"  
    },
    {
      	id: 3,
      	title: "Descubierta"  
    }
];

export const carType = [
    {
        id: 1,
        title: "Chico"
    },
    {
        id: 2,
        title: "Mediano"
    },
    {
        id: 3,
        title: "Grande"
    },
    {
        id: 4,
        title: "Doble"
    },
];

export const accessType = [
    {
        id: 1,
        title: "Horizontal"
    },
    {
        id: 2,
        title: "Rampa fija"
    },
    {
        id: 3,
        title: "Rampa móvil"
    },
    {
        id: 4,
        title: "Ascensor"
    },
];

export const buildingType = [
	{
    	id: 1,
      	title: "Entre medianeras"  
    },
    {
      	id: 2,
      	title: "Torre"  
    },
    {
      	id: 3,
      	title: "Tipo block"  
    },
	{
    	id: 4,
      	title: "Esquina"  
    },
    {
      	id: 5,
      	title: "Antiguo"  
    },
    {
      	id: 6,
      	title: "Inteligente"  
    },
	{
    	id: 7,
      	title: "Primera categoría"  
    },
    {
      	id: 8,
      	title: "Standard"  
    },
    {
      	id: 9,
      	title: "Bajo"  
    },
	{
    	id: 10,
      	title: "Condominio"  
    },
    {
      	id: 11,
      	title: "Monoblock"  
    },
];

export const elevatorType = [];