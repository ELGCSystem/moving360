const house = ["sewerWater", "hotAir", "televisionCable", "heatingBalanced", "breakfastNook", "bottledGas", "underfloorHeating", "pool", "individualRadiantFloor", "hotWater", "furnished", "safe", "waterHeater", "electricity", "naturalGas","kitchenFurniture", "radiators", "centralRadiantFloor", "centralAirConditioner", "individualAirConditioner", "kitchenGadgets", "singleBoiler", "soccerField", "tennisCourt", "vehicleSpace", "whirlpool", "reducedMobilityAccess", "solarium", "elevator", "heating", "airExtractor", "fireplace", "pavement", "hotWaterTank", "sprinklerIrrigation", "runningWater"];
    
const apartment = ["sewerWater", "hotAir", "televisionCable", "heatingBalanced", "breakfastNook", "bottledGas", "underfloorHeating", "pool", "individualRadiantFloor", "hotWater", "furnished", "safe", "waterHeater", "electricity", "naturalGas","kitchenFurniture", "radiators", "centralRadiantFloor", "centralAirConditioner", "individualAirConditioner", "kitchenGadgets", "singleBoiler", "soccerField", "tennisCourt", "vehicleSpace", "whirlpool", "reducedMobilityAccess", "solarium", "elevator", "heating", "airExtractor", "fireplace", "pavement", "hotWaterTank", "sprinklerIrrigation", "runningWater"];

const phApartment = ["sewerWater", "hotAir", "televisionCable", "heatingBalanced", "breakfastNook", "bottledGas", "underfloorHeating", "pool", "individualRadiantFloor", "hotWater", "furnished", "safe", "waterHeater", "electricity", "naturalGas","kitchenFurniture", "radiators", "centralRadiantFloor", "centralAirConditioner", "individualAirConditioner", "kitchenGadgets", "singleBoiler", "soccerField", "tennisCourt", "vehicleSpace", "whirlpool", "reducedMobilityAccess", "solarium", "elevator", "heating", "airExtractor", "fireplace", "pavement", "hotWaterTank", "sprinklerIrrigation", "runningWater"];

const garage = [];

const office = ["hotAir", "underfloorHeating", "pool", "individualRadiantFloor", "radiators", "centralRadiantFloor", "centralAirConditioner", "individualAirConditioner", "singleBoiler", "vehicleSpace", "reducedMobilityAccess", "elevator", "heating", "pavement", "hotWaterTank", "gym", "generator", "gamesForKids", "laundry", "underfloorDucts", "partyRoom", "sauna", "telephone", "commutator", "runningWater"];

const shop = ["sewerWater", "hotAir", "underfloorHeating", "pool", "hotWater", "safe", "centralAirConditioner", "individualAirConditioner", "reducedMobilityAccess", "elevator", "heating", "pavement", "singleBoiler", "window", "runningWater", "boxes", "wellWater"];

const shed = ["runningWater", "centralAirConditioner", "individualAirConditioner", "weightScale", "pumper", "singleBoiler", "electricity", "naturalGas", "bottledGas", "industrialGas", "drivingForce", "crane", "generator", "liftTruck", "motors", "gate", "waterTank", "fireTank", "telephone", "hotWaterTank", "electricLight"];

const goodwill = [];

const field = ["runningWater", "waterSources", "wellWater", "wireFences", "grove", "drinker", "boxes", "straps", "barnyard", "electricity", "fence", "afforestation", "pits", "horseFarm", "electricLight", "reducedFence", "windmill", "sewageTreatment", "livingPlace"];

const countryHouse = ["sewerWater", "hotAir", "televisionCable", "breakfastNook", "bottledGas", "underfloorHeating", "furnished", "waterHeater", "electricity", "naturalGas", "kitchenFurniture", "radiators", "centralAirConditioner", "individualAirConditioner", "kitchenGadgets", "singleBoiler", "soccerField", "tennisCourt", "basketballCourt", "volleyballCourt", "paddleCourt", "hockeyCamp", "vehicleSpace", "whirlpool", "elevator", "heating", "airExtractor", "fireplace", "runningWater"];

const terrain = ["sewerWater", "runningWater", "wellWater", "wireFences", "grove", "drinker", "straps", "barnyard", "electricity", "fence", "afforestation", "pits", "horseFarm", "electricLight", "reducedFence", "windmill", "pavement", "paddock", "creamery", "livingPlace"];

const hotel = ["hotWater", "runningWater", "centralAirConditioner", "individualAirConditioner", "elevator", "gym", "generator", "gamesForKids", "laundry", "pool", "restaurant", "partyRoom", "sauna"];

const plotsNichesVaults = [];

const nauticalBeds = ["reducedMobilityAccess"];


export const getInstallations = (estate) => {
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

export const installations = [
    {
        id: 1,
        displayName: "Agua cloaca",
        name: "sewerWater"
    },
    {
        id: 2,
        displayName: "Aire caliente",
        name: "hotAir"
    },
    {
        id: 3,
        displayName: "Cable",
        name: "televisionCable"
    },
    {
        id: 4,
        displayName: "Calefacción tiro balanceado",
        name: "heatingBalanced"
    },
    {
        id: 5,
        displayName: "Desayunador",
        name: "breakfastNook"
    },
    {
        id: 6,
        displayName: "Gas envasado",
        name: "bottledGas"
    },
    {
        id: 7,
        displayName: "Losa radiante",
        name: "underfloorHeating"
    },
    {
        id: 8,
        displayName: "Pileta",
        name: "pool"
    },
    {
        id: 9,
        displayName: "Piso radiante individual",
        name: "individualRadiantFloor"
    },
    {
        id: 10,
        displayName: "Agua caliente",
        name: "hotWater"
    },
    {
        id: 11,
        displayName: "Amoblado",
        name: "furnished"
    },
    {
        id: 12,
        displayName: "Caja fuerte",
        name: "safe"
    },
    {
        id: 13,
        displayName: "Calefón",
        name: "waterHeater"
    },
    {
        id: 14,
        displayName: "Electricidad",
        name: "electricity"
    },
    {
        id: 15,
        displayName: "Gas Natural",
        name: "naturalGas"
    },
    {
        id: 16,
        displayName: "Muebles de cocina",
        name: "kitchenFurniture"
    },
    {
        id: 17,
        displayName: "Radiadores",
        name: "radiators"
    },
    {
        id: 18,
        displayName: "Piso radiante central",
        name: "centralRadiantFloor"
    },
    {
        id: 19,
        displayName: "Aire acondicionado central",
        name: "centralAirConditioner"
    },
    {
        id: 20,
        displayName: "Aire acondicionado individual",
        name: "individualAirConditioner"
    },
    {
        id: 21,
        displayName: "Artefactos de cocina",
        name: "kitchenGadgets"
    },
    {
        id: 22,
        displayName: "Caldera individual",
        name: "singleBoiler"
    },
    {
        id: 23,
        displayName: "Cancha de fútbol",
        name: "soccerField"
    },
    {
        id: 24,
        displayName: "Cancha de tenis",
        name: "tennisCourt"
    },
    {
        id: 25,
        displayName: "Espacio vehicular",
        name: "vehicleSpace"
    },
    {
        id: 26,
        displayName: "Hidromasaje",
        name: "whirlpool"
    },
    {
        id: 27,
        displayName: "Acceso movilidad reducida",
        name: "reducedMobilityAccess"
    },
    {
        id: 28,
        displayName: "Solarium",
        name: "solarium"
    },
    {
        id: 29,
        displayName: "Ascensor",
        name: "elevator"
    },
    {
        id: 30,
        displayName: "Calefacción",
        name: "heating"
    },
    {
        id: 31,
        displayName: "Extractor de aire",
        name: "airExtractor"
    },
    {
        id: 32,
        displayName: "Hogar a leña",
        name: "fireplace"
    },
    {
        id: 33,
        displayName: "Pavimento",
        name: "pavement"
    },
    {
        id: 34,
        displayName: "Termotanque",
        name: "hotWaterTank"
    },
    {
        id: 35,
        displayName: "Riego por aspersión",
        name: "sprinklerIrrigation"
    },
    {
        id: 36,
        displayName: "Gimnasio",
        name: "gym"
    },
    {
        id: 37,
        displayName: "Grupo electrógeno",
        name: "generator"
    },
    {
        id: 38,
        displayName: "Juegos para chicos",
        name: "gamesForKids"
    },
    {
        id: 39,
        displayName: "Laundry",
        name: "laundry"
    },
    {
        id: 40,
        displayName: "Pisoductos",
        name: "underfloorDucts"
    },
    {
        id: 41,
        displayName: "Salón de fiestas",
        name: "partyRoom"
    },
    {
        id: 42,
        displayName: "Sauna",
        name: "sauna"
    },
    {
        id: 43,
        displayName: "Teléfono",
        name: "telephone"
    },
    {
        id: 44,
        displayName: "Conmutador",
        name: "commutator"
    },
    {
        id: 45,
        displayName: "Vidriera",
        name: "window"
    },
    {
        id: 46,
        displayName: "Agua corriente",
        name: "runningWater"
    },
    {
        id: 47,
        displayName: "Balanza",
        name: "weightScale"
    },
    {
        id: 48,
        displayName: "Bombeador",
        name: "pumper"
    },
    {
        id: 49,
        displayName: "Fuerza motriz",
        name: "drivingForce"
    },
    {
        id: 50,
        displayName: "Gas industrial",
        name: "industrialGas"
    },
    {
        id: 51,
        displayName: "Grúa",
        name: "crane"
    },
    {
        id: 52,
        displayName: "Montacargas",
        name: "liftTruck"
    },
    {
        id: 53,
        displayName: "Motores",
        name: "motors"
    },
    {
        id: 54,
        displayName: "Portón",
        name: "gate"
    },
    {
        id: 55,
        displayName: "Tanque de agua",
        name: "waterTank"
    },
    {
        id: 56,
        displayName: "Tanque de incendio",
        name: "fireTank"
    },
    {
        id: 57,
        displayName: "Boxes",
        name: "boxes"
    },
    {
        id: 58,
        displayName: "Luz eléctrica",
        name: "electricLight"
    },
    {
        id: 59,
        displayName: "Agua de pozo",
        name: "wellWater"
    },
    {
        id: 60,
        displayName: "Aguadas",
        name: "waterSources"
    },
    {
        id: 61,
        displayName: "Arboleda",
        name: "grove"
    },
    {
        id: 62,
        displayName: "Bebedero",
        name: "drinker"
    },
    {
        id: 63,
        displayName: "Bretes",
        name: "straps"
    },
    {
        id: 64,
        displayName: "Corral",
        name: "barnyard"
    },
    {
        id: 65,
        displayName: "Estacada",
        name: "fence"
    },
    {
        id: 66,
        displayName: "Forestación",
        name: "afforestation"
    },
    {
        id: 67,
        displayName: "Fosas",
        name: "pits"
    },
    {
        id: 68,
        displayName: "Haras",
        name: "horseFarm"
    },
    {
        id: 69,
        displayName: "Mangas",
        name: "reducedFence"
    },
    {
        id: 70,
        displayName: "Molino",
        name: "windmill"
    },
    {
        id: 71,
        displayName: "Vivienda",
        name: "livingPlace"
    },
    {
        id: 72,
        displayName: "Tratamiento efluentes",
        name: "sewageTreatment"
    },
    {
        id: 73,
        displayName: "Alambrados",
        name: "wireFences"
    },
    {
        id: 74,
        displayName: "Cancha de básquet",
        name: "basketballCourt"
    },
    {
        id: 75,
        displayName: "Cancha de voley",
        name: "volleyballCourt"
    },
    {
        id: 76,
        displayName: "Cancha de hockey",
        name: "hockeyCamp"
    },
    {
        id: 77,
        displayName: "Cancha de squash",
        name: "squashCourt"
    },
    {
        id: 78,
        displayName: "Cancha de paddle",
        name: "paddleCourt"
    },
    {
        id: 79,
        displayName: "Potrero",
        name: "paddock"
    },
    {
        id: 80,
        displayName: "Tambo",
        name: "creamery"
    },
    {
        id: 81,
        displayName: "Restaurant",
        name: "restaurant"
    },
];

export const buildingInstallations = [
    {
        id: 1,
        displayName: "SUM",
        name: "multipurposeRoom"
    },
    {
        id: 2,
        displayName: "Pileta",
        name: "pool"
    },
    {
        id: 3,
        displayName: "Aire acondicionado central",
        name: "centralAirConditioner"
    },
    {
        id: 4,
        displayName: "Caldera",
        name: "boiler"
    },
    {
        id: 5,
        displayName: "Cancha de fútbol",
        name: "soccerField"
    },
    {
        id: 6,
        displayName: "Cancha de tenis",
        name: "tennisCourt"
    },
    {
        id: 7,
        displayName: "Espacio vehicular",
        name: "vehicleSpace"
    },
    {
        id: 8,
        displayName: "Hidromasaje",
        name: "whirlpool"
    },
    {
        id: 9,
        displayName: "Acceso movilidad reducida",
        name: "reducedMobilityAccess"
    },
    {
        id: 10,
        displayName: "Solarium",
        name: "solarium"
    },
    {
        id: 11,
        displayName: "Ascensor",
        name: "elevator"
    },
    {
        id: 12,
        displayName: "Calefacción",
        name: "heating"
    },
    {
        id: 13,
        displayName: "Extractor de aire",
        name: "airExtractor"
    },
    {
        id: 14,
        displayName: "Quincho",
        name: "barbecue"
    },
    {
        id: 15,
        displayName: "Parque",
        name: "park"
    },
    {
        id: 16,
        displayName: "Riego por aspersión",
        name: "sprinklerIrrigation"
    },
    {
        id: 17,
        displayName: "Cámaras de vigilancia",
        name: "surveillanceCameras"
    },
    {
        id: 18,
        displayName: "Terraza",
        name: "terrace"
    }
];