const house = ["councilTax", "electricity", "cleaning", "security", "vigilance", "runningWater", "bottledGas", "refrigeration", "telephone", "heating", "naturalGas", "realEstateTax", "towels", "commutator", "internet", "linen", "videoCable"];

const apartment = ["councilTax", "electricity", "cleaning", "security", "vigilance", "runningWater", "bottledGas", "refrigeration", "telephone", "heating", "naturalGas", "realEstateTax", "towels", "commutator", "internet", "linen", "videoCable"];

const phApartment = ["councilTax", "electricity", "cleaning", "security", "vigilance", "runningWater", "bottledGas", "refrigeration", "telephone", "heating", "naturalGas", "realEstateTax", "towels", "commutator", "internet", "linen", "videoCable"];

const garage = [];

const office = ["councilTax", "electricity", "laundry", "cooking", "bar", "vigilance", "runningWater", "bottledGas", "refrigeration", "telephone", "heating", "naturalGas", "realEstateTax",  "commutator", "internet", "videoCable"];

const shop = ["councilTax", "electricity", "cleaning", "bar", "runningWater", "telephone", "naturalGas",  "commutator", "internet", "videoCable"];

const shed = ["councilTax", "electricity", "realEstateTax", "bottledGas", "runningWater", "telephone", "naturalGas",  "refrigeration", "vigilance", "videoCable", "internet", "security"];

const goodwill = [];

const field = ["councilTax", "electricity", "bottledGas", "realEstateTax", "naturalGas"];

const countryHouse = ["councilTax", "electricity", "cleaning", "security", "vigilance", "runningWater", "bottledGas", "refrigeration", "telephone", "heating", "naturalGas", "realEstateTax", "towels", "commutator", "internet", "linen", "videoCable"];

const terrain = ["councilTax", "runningWater", "electricity", "bottledGas", "realEstateTax", "naturalGas", "telephone"];

const hotel = ["councilTax", "electricity", "cleaning", "security", "vigilance", "runningWater", "bottledGas", "refrigeration", "telephone", "heating", "naturalGas", "realEstateTax", "towels", "commutator", "internet", "linen", "videoCable", "bar", "cooking", "laundry"];

const plotsNichesVaults = [];

const nauticalBeds = ["vigilance"];

export const getServices = (estate) => {
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

export const services = [
    {
        id: 1,
        displayName: "ABL",
        name: "councilTax"
    },
    {
        id: 2,
        displayName: "Electricidad",
        name: "electricity"
    },
    {
        id: 3,
        displayName: "Limpieza",
        name: "cleaning"
    },
    {
        id: 4,
        displayName: "Seguridad",
        name: "security"
    },
    {
        id: 5,
        displayName: "Vigilancia",
        name: "vigilance"
    },
    {
        id: 6,
        displayName: "Agua corriente",
        name: "runningWater"
    },
    {
        id: 7,
        displayName: "Gas envasado",
        name: "bottledGas"
    },
    {
        id: 8,
        displayName: "Refrigeración",
        name: "refrigeration"
    },
    {
        id: 9,
        displayName: "Teléfono",
        name: "telephone"
    },
    {
        id: 10,
        displayName: "Calefacción",
        name: "heating"
    },
    {
        id: 11,
        displayName: "Gas natural",
        name: "naturalGas"
    },
    {
        id: 12,
        displayName: "Impuesto inmobiliario",
        name: "realEstateTax"
    },
    {
        id: 13,
        displayName: "Toallas",
        name: "towels"
    },
    {
        id: 14,
        displayName: "Conmutador",
        name: "commutator"
    },
    {
        id: 15,
        displayName: "Internet",
        name: "internet"
    },
    {
        id: 16,
        displayName: "Ropa de cama",
        name: "linen"
    },
    {
        id: 17,
        displayName: "Video cable",
        name: "videoCable"
    },
    {
        id: 18,
        displayName: "Lavandería",
        name: "laundry"
    },
    {
        id: 19,
        displayName: "Cocina",
        name: "cooking"
    },
    {
        id: 20,
        displayName: "Bar",
        name: "bar"
    },
];

export const buildingServices = [
    {
        id: 1,
        displayName: "Portero",
        name: "doorkeeper"
    },
    {
        id: 2,
        displayName: "ABL",
        name: "councilTax"
    },
    {
        id: 3,
        displayName: "Electricidad",
        name: "electricity"
    },
    {
        id: 4,
        displayName: "Limpieza",
        name: "cleaning"
    },
    {
        id: 5,
        displayName: "Seguridad",
        name: "security"
    },
    {
        id: 6,
        displayName: "Vigilancia",
        name: "vigilance"
    },
    {
        id: 7,
        displayName: "Agua corriente",
        name: "runningWater"
    },
    {
        id: 8,
        displayName: "Gas envasado",
        name: "bottledGas"
    },
    {
        id: 9,
        displayName: "Refrigeración",
        name: "refrigeration"
    },
    {
        id: 10,
        displayName: "Teléfono",
        name: "telephone"
    },
    {
        id: 11,
        displayName: "Calefacción",
        name: "heating"
    },
    {
        id: 12,
        displayName: "Gas natural",
        name: "naturalGas"
    },
    {
        id: 13,
        displayName: "Lavandería",
        name: "laundry"
    },
    {
        id: 14,
        displayName: "Conmutador",
        name: "commutator"
    },
    {
        id: 15,
        displayName: "Internet",
        name: "internet"
    },
    {
        id: 16,
        displayName: "Ropa de cama",
        name: "linen"
    },
    {
        id: 17,
        displayName: "Video cable",
        name: "videoCable"
    },
];