const house = ['loft', 'beforeKitchen', 'beforeLiving', 'rooftop', 'balcony', 'balconyTerraced', 'bar', 'trunk', 'library', 'cellar', 'toolRoom', 'ironingRoom', 'betweenFloor', 'studio', 'familyRoom', 'gallery', 'shed',"garage", "garden", "freeBackground", "local", "office", "palier", "grill", "livingRoom", "basement", "suiteRoom", "lobby", "dressingRoom", "lockerRoom"];

const apartment = ['loft', 'beforeKitchen', 'beforeLiving', 'rooftop', 'bar', 'trunk', 'library', 'cellar', 'toolRoom', 'ironingRoom', 'betweenFloor', 'studio', 'familyRoom', 'gallery', 'shed',"garage", "garden", "freeBackground", "local", "office", "palier", "grill", "livingRoom", "basement", "suiteRoom", "lobby", "dressingRoom", "lockerRoom"];

const phApartment = ['loft', 'beforeKitchen', 'beforeLiving', 'rooftop', 'balcony', 'balconyTerraced', 'bar', 'trunk', 'library', 'cellar', 'toolRoom', 'ironingRoom', 'betweenFloor', 'studio', 'familyRoom', 'gallery', 'shed',"garage", "garden", "freeBackground", "local", "office", "palier", "grill", "livingRoom", "basement", "suiteRoom", "lobby", "dressingRoom", "lockerRoom"];

const garage = [];

const office = ['loft', 'beforeKitchen', 'rooftop', 'bar', 'trunk', 'circulation', 'toolRoom', 'warehouse', 'betweenFloor', "garage", 'publicHall'];

const shop = [];
const shed = [];
const goodwill = [];
const field = [];
const countryHouse = [];
const terrain = [];
const hotel = [];

const plotsNichesVaults = [];
const nauticalBeds = [];

export const getOtherEnvironments = (estate) => {
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
}

export const otherEnvironments = [
    {
        id: 1,
        displayName: "Altillo",
        name: "loft"
    },
    {
        id: 2,
        displayName: "Archivo",
        name: "file"
    },
    {
        id: 3,
        displayName: "Ante cocina",
        name: "beforeKitchen"
    },
    {
        id: 4,
        displayName: "Ante sala",
        name: "beforeLiving"
    },
    {
        id: 5,
        displayName: "Azotea",
        name: "rooftop"
    },
    {
        id: 6,
        displayName: "Balcón",
        name: "balcony" 
    },
    { 
        id: 7, 
        displayName: "Balcón aterrazado", 
        name: "balconyTerraced"
    },
    {
        id: 8,
        displayName: "Bar",
        name: "bar"
    },
    {
        id: 9,
        displayName: "Baulera",
        name: "trunk"
    },
    {
        id: 10,
        displayName: "Biblioteca",
        name: "library"
    },
    {
        id: 11,
        displayName: "Bodega",
        name: "cellar"
    },
    {
        id: 12,
        displayName: "Circulación",
        name: "circulation"
    },
    {
        id: 13,
        displayName: "Cuarto de herramientas",
        name: "toolRoom"
    },
    {
        id: 14,
        displayName: "Cuarto de planchar",
        name: "ironingRoom"
    },
    {
        id: 15,
        displayName: "Depósito",
        name: "warehouse"
    },
    {
        id: 16,
        displayName: "Entre piso",
        name: "betweenFloor"
    },
    {
        id: 17,
        displayName: "Estudio",
        name: "studio"
    },
    {
        id: 18,
        displayName: "Family room",
        name: "familyRoom"
    },
    {
        id: 19,
        displayName: "Galería",
        name: "gallery"
    },
    {
        id: 20,
        displayName: "Galpón",
        name: "shed"
    },
    {
        id: 21,
        displayName: "Garage",
        name: "garage"
    },
    {
        id: 22,
        displayName: "Jardín",
        name: "garden"
    },
    {
        id: 23,
        displayName: "Fondo libre",
        name: "freeBackground"
    },
    {
        id: 24,
        displayName: "Local",
        name: "local"
    },
    {
        id: 25,
        displayName: "Oficina",
        name: "office"
    },
    {
        id: 26,
        displayName: "Palier",
        name: "palier"
    },
    {
        id: 27,
        displayName: "Parrilla",
        name: "grill"
    },
    {
        id: 28,
        displayName: "Sala",
        name: "livingRoom"
    },
    {
        id: 29,
        displayName: "Salón",
        name: "publicHall"
    },
    {
        id: 30,
        displayName: "Sotano",
        name: "basement"
    },
    {
        id: 31,
        displayName: "Suite",
        name: "suiteRoom"
    },
    {
        id: 32,
        displayName: "Vestíbulo",
        name: "lobby"
    },
    {
        id: 33,
        displayName: "Vestidor",
        name: "dressingRoom"
    },
    {
        id: 34,
        displayName: "Vestuario",
        name: "lockerRoom"
    }
];