import {
    faHouse,
    faHouseLock,
    faStore,
    faMountainCity
} from "@fortawesome/free-solid-svg-icons";

export const secciones = [
    {
        id: 1,
        title: "General",
        inmuebles: ["Casa", "Departamento", "Departamento tipo PH", "Cochera", "Oficina - Consultorio", "Local", "Galpón", "Fondo de comercio", "Campo", "Quinta", "Lote - Terreno", "Hotel", "Parcelas - Nichos - Bovedas", "Camas náuticas"]
    },
    {
        id: 2,
        title: "Countries",
        inmuebles: ["Casa", "Departamento", "Departamento tipo PH", "Cochera", "Oficina - Consultorio", "Local", "Fondo de comercio", "Lote - Terreno", "Camas náuticas"]
    },
    {
        id: 3,
        title: "Emprendimientos",
        inmuebles: ["Departamento", "Departamento tipo PH", "Cochera", "Local"]
    },
    {
        id: 4,
        title: "Tiempo compartido",
        inmuebles: ["Casa", "Departamento", "Departamento tipo PH", "Quinta"]
    },
];

export const seccionesView = [
    {
        id: 1,
        icon: faHouse,
        title: "General",
        text: "En General se publican todos los inmuebles para venta, alquiler o alquiler temporal.",
        url: "/publicar"
    },
    {
        id: 2,
        icon: faHouseLock,
        title: "Countries y Barrios privados",
        text: "En Countries y Barrios privados se publican todos los inmuebles en countries para venta, alquiler o alquiler temporal.",
        url: "/publicar"
    },
    {
        id: 3,
        icon: faStore,
        title: "Emprendimientos",
        text: "En Emprendimientos solo se publican inmuebles para la venta.",
        url: "/publicar"
    },
    {
        id: 4,
        icon: faMountainCity,
        title: "Tiempo compartido",
        text: "En Tiempo compartido solo se publican inmuebles para la venta o alquiler por temporada.",
        url: "/publicar"
    }
];