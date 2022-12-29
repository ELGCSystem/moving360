export const operations = [
    {
        id: 1,
        title: "Venta"
    },
    {
        id: 2,
        title: "Alquiler"
    },
    {
        id: 3,
        title: "Alquiler por temporada"
    }
];

export const expenses = [
    {
        id: 1,
        title: "Incluidas"
    },
    {
        id: 2,
        title: "No incluidas"
    },
    {
        id: 3,
        title: "No paga"
    },
    {
        id: 4,
        title: "A convenir"
    },
];

export const propertyState = [
    {
        id: 1,
        title: "Vigente"
    },
    {
        id: 2,
        title: "Reservado"
    },
    {
        id: 3,
        title: "Vendido"
    },
    {
        id: 4,
        title: "Alquilado"
    },
    {
        id: 5,
        title: "Suspendido"
    },
    {
        id: 6,
        title: "No vigente"
    },
];

// Devuelve el tipo de unidad en torno al inmuble dado.
export const getUnits = (estate) => {

    switch (estate) {
        case "casa":
            return casa;
        case "departamento":
            return departamento;
        case "departamento-tipo-ph":
            return departamentoPH;
        case "cochera":
            return cochera;
        case "oficina-consultorio":
            return oficinaConsultorio;
        case "local":
            return local;
        case "galpon":
            return galpon;
        case "fondo-de-comercio":
            return fondoComercio;
        case "campo":
            return campo;
        case "quinta":
            return quinta;
        case "lote-terreno":
            return loteTerreno;
        case "hotel":
            return hotel;
        case "parcelas-nichos-bovedas":
            return parcelasNichosBovedas;
        case "camas-nauticas":
            return camasNauticas;
        default:
            return [];
    }
}

const casa = [
    {
        id: 1,
        title: "Casa",
    },
    {
        id: 2,
        title: "Chalet",
    },
    {
        id: 3,
        title: "Departamento",
    },
    {
        id: 4,
        title: "Cabaña",
    },
    {
        id: 5,
        title: "Duplex",
    },
    {
        id: 6,
        title: "Triplex",
    },
    {
        id: 7,
        title: "Casa quinta",
    }
];

const departamento = [
    {
        id: 1,
        title: "Departamento"
    },
    {
        id: 2,
        title: "Piso"
    },
    {
        id: 3,
        title: "Semipiso"
    },
    {
        id: 4,
        title: "Duplex"
    },
    {
        id: 5,
        title: "Triplex"
    },
    {
        id: 6,
        title: "Loft"
    },
    {
        id: 7,
        title: "Penthouse"
    },
    {
        id: 8,
        title: "PH"
    }
];

const departamentoPH = [
    {
        id: 1,
        title: "PH"
    }
];

const cochera = [
    {
        id: 1,
        title: "Cochera"
    }
];

const oficinaConsultorio = [
    {
        id: 1,
        title: "Oficina"
    },
    {
        id: 2,
        title: "Consultorio"
    },
];

const local = [
    {
        id: 1,
        title: "Local en vía pública"
    },
    {
        id: 2,
        title: "Local en shopping"
    },
    {
        id: 3,
        title: "Local en galería"
    },
];

const galpon = [
    {
        id: 1,
        title: "Galpón"
    }
];

const fondoComercio = [
    {
        id: 1,
        title: "Fondo de comercio"
    }
];

const campo = [
    {
        id: 1,
        title: "Agrícola"
    },
    {
        id: 2,
        title: "Ganadero"
    },
    {
        id: 3,
        title: "Mixto"
    },
    {
        id: 4,
        title: "Cría"
    },
    {
        id: 5,
        title: "Turístico"
    },
    {
        id: 6,
        title: "Coto de caza"
    },
    {
        id: 7,
        title: "Haras"
    },
    {
        id: 8,
        title: "Invernada"
    },
    {
        id: 9,
        title: "Frutícola"
    },
    {
        id: 10,
        title: "Tambo"
    },
    {
        id: 11,
        title: "Chacra"
    },
    {
        id: 12,
        title: "Floricultura"
    },
    {
        id: 13,
        title: "Granja"
    },
    {
        id: 14,
        title: "Forestal"
    },
    {
        id: 15,
        title: "Minería"
    },
    {
        id: 16,
        title: "Industrialización"
    },
];

const quinta = [
    {
        id: 1,
        title: "Quinta"
    }
];

const loteTerreno = [
    {
        id: 1,
        title: "Lote"
    },
    {
        id: 2,
        title: "Terreno"
    },
    {
        id: 3,
        title: "Fracción"
    },
];

const hotel = [
    {
        id: 1,
        title: "Hotel de pasajeros"
    },
    {
        id: 2,
        title: "Alojamiento"
    },
    {
        id: 3,
        title: "Hotel familiar"
    },
    {
        id: 4,
        title: "Hostería"
    },
    {
        id: 5,
        title: "Posada"
    },
    {
        id: 6,
        title: "Resort"
    },
    {
        id: 7,
        title: "Hotel"
    },
];

const parcelasNichosBovedas = [
    {
        id: 1,
        title: "Parcela"
    },
    {
        id: 2,
        title: "Nicho"
    },
    {
        id: 3,
        title: "Bóveda"
    }
];

const camasNauticas = [
    {
        id: 1,
        title: "Cama Náutica"
    }
];