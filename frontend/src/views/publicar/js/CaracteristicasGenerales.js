const house = [];

const apartment = [];

const phApartment = [];

const garage = [];

const office = ['flooring'];

const shop = [];

const shed = ['measures', 'roofGateHeating'];

const goodwill = [];
const field = [];
const countryHouse = [];
const terrain = [];
const hotel = [];
const plotsNichesVaults = [];
const nauticalBeds = [];

export const getGeneralFeatures = (estate) => {
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

export const insideFlooring = [
    {
        id: 1,
        title: "Cerámico"
    },
    {
        id: 2,
        title: "Porcelanato"
    },
    {
        id: 3,
        title: "Flotante / Laminado"
    },
    {
        id: 4,
        title: "Parquet"
    },
    {
        id: 5,
        title: "Entablado"
    },
    {
        id: 6,
        title: "Tarugado"
    },
    {
        id: 7,
        title: "Pre finished"
    },
    {
        id: 8,
        title: "Cemento pulido"
    },
    {
        id: 9,
        title: "Mármol"
    },
    {
        id: 10,
        title: "Vinilico"
    },
    {
        id: 11,
        title: "Vinil tejido"
    },
    {
        id: 12,
        title: "LVT"
    },
    {
        id: 13,
        title: "SPC"
    },
    {
        id: 14,
        title: "Alfombra"
    }
];

export const woodFlooring = [
    {
        id: 1,
        title: "Pino elliotis"
    },
    {
        id: 2,
        title: "Pino tea"
    },
    {
        id: 3,
        title: "Roble"
    },
    {
        id: 4,
        title: "Eucaliptus"
    },
    {
        id: 5,
        title: "MDF"
    },
    {
        id: 6,
        title: "Otro"
    }
];

export const outsideFlooring = [
    {
        id: 1,
        title: "Cerámico"
    },
    {
        id: 2,
        title: "Porcelanato"
    },
    {
        id: 3,
        title: "Baldosa"
    },
    {
        id: 4,
        title: "Granito"
    },
    {
        id: 5,
        title: "Cemento"
    },
    {
        id: 6,
        title: "Piedra"
    },
    {
        id: 7,
        title: "Sintético"
    },
    {
        id: 8,
        title: "Madera"
    },
    {
        id: 9,
        title: "Goma"
    },
    {
        id: 10,
        title: "Césped"
    },
    {
        id: 11,
        title: "Tierra"
    },
];

export const outsideWalls = [
    {
        id: 1,
        title: "Piedra"
    },
    {
        id: 2,
        title: "Hormigón y piedra"
    },
    {
        id: 3,
        title: "Madera"
    },
    {
        id: 4,
        title: "Ladrillo"
    },
    {
        id: 5,
        title: "Ladrillo a la vista"
    },
    {
        id: 6,
        title: "Baldosones"
    },
    {
        id: 7,
        title: "Cerámico"
    },
    {
        id: 8,
        title: "Vidrio"
    },
    {
        id: 9,
        title: "Aluminio"
    },
    {
        id: 10,
        title: "Tarquini"
    },
    {
        id: 11,
        title: "Cemento alisado"
    },
    {
        id: 12,
        title: "Wall panel"
    }
];

export const ceiling = [
    {
        id: 1,
        title: "Losa"
    },
    {
        id: 2,
        title: "Chapa metálica"
    },
    {
        id: 3,
        title: "Chapa fibrocemento"
    },
    {
        id: 4,
        title: "Teja"
    },
    {
        id: 5,
        title: "Polocarbonato"
    }
];

export const estateState = [
    {
        id: 1,
        title: "Excelente"
    },
    {
        id: 2,
        title: "Muy bueno"
    },
    {
        id: 3,
        title: "Bueno"
    },
    {
        id: 4,
        title: "Regular"
    },
    {
        id: 5,
        title: "A refaccionar"
    }
];

export const orientation = [
    {
        id: 1,
        title: "Norte"
    },
    {
        id: 2,
        title: "Noreste"
    },
    {
        id: 3,
        title: "Noroeste"
    },
    {
        id: 4,
        title: "Sur"
    },
    {
        id: 5,
        title: "Sureste"
    },
    {
        id: 6,
        title: "Suroeste"
    },
    {
        id: 7,
        title: "Este"
    },
    {
        id: 8,
        title: "Oeste"
    }
];

export const view = [
    {
        id: 1,
        title: "Vista al mar"
    },
    {
        id: 2,
        title: "Vista al lago"
    },
    {
        id: 3,
        title: "Vista al río"
    },
    {
        id: 4,
        title: "Vista a la montaña"
    },
    {
        id: 5,
        title: "Vista al bosque"
    },
    {
        id: 6,
        title: "Vista al golf"
    },
    {
        id: 7,
        title: "Vista a la ciudad"
    }
];

export const coast = [
    {
        id: 1,
        title: "Vista al mar"
    },
    {
        id: 2,
        title: "Vista al lago"
    },
    {
        id: 3,
        title: "Vista al río"
    }
];

export const slope = [
    {
        id: 1,
        title: "Plana"
    },
    {
        id: 2,
        title: "Ascendente"
    },
    {
        id: 3,
        title: "Descendente"
    }
];

export const industrialRoofType = [
    {
        id: 1,
        title: "Cabriada"
    },
    {
        id: 2,
        title: "Fibrocemento"
    },
    {
        id: 3,
        title: "Parabólico"
    },
    {
        id: 4,
        title: "Dos aguas"
    },
    {
        id: 5,
        title: "Bovedilla"
    },
    {
        id: 6,
        title: "Galvanizado"
    },
    {
        id: 7,
        title: "Hormigón"
    },
    {
        id: 8,
        title: "Tinglado"
    },
    {
        id: 9,
        title: "Zinc"
    },
    {
        id: 10,
        title: "Chapa"
    },
    {
        id: 11,
        title: "Losa"
    },
    {
        id: 12,
        title: "Astori"
    },
];

export const gateType = [
    {
        id: 1,
        title: "Levadizo"
    },
    {
        id: 2,
        title: "Corredizo"
    },
];

export const heatingType = [
    {
        id: 1,
        title: "Caldera radiante general"
    },
    {
        id: 2,
        title: "Caldera radiante individual"
    },
    {
        id: 3,
        title: "Losa radiante general"
    },
    {
        id: 4,
        title: "Losa radiante individual"
    },
    {
        id: 5,
        title: "Estufa"
    },
    {
        id: 6,
        title: "Aire caliente"
    },
    {
        id: 7,
        title: "Picos de gas"
    },
    {
        id: 8,
        title: "Central"
    },
    {
        id: 9,
        title: "Individual"
    },
];

export const measures = [
	{
    	id: 1,
        displayName: "Longitud frente (m)",
        name: "frontLength"
    },
	{
    	id: 2,
        displayName: "Longitud frente (m)",
        name: "backLength"
    },
	{
    	id: 3,
        displayName: "Altura del techo (m)",
        name: "ceilingHeight"
    },
	{
    	id: 4,
        displayName: "Ancho de la entrada (m)",
        name: "entranceWidth"
    },
	{
    	id: 5,
        displayName: "Alto de la entrada (m)",
        name: "entranceHeight"
    },
    {
    	id: 6,
        displayName: "F.O.T.",
        name: "fullLoadFactor"
    },
];