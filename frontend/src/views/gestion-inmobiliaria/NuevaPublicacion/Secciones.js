import {
    faHouse,
    faHouseLock,
    faStore,
    faFilterCircleDollar,
    faMountainCity
} from "@fortawesome/free-solid-svg-icons";

export const secciones = [
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
        icon: faFilterCircleDollar,
        title: "Oportunidades",
        text: "En Oportunidades se publican todos los inmuebles para venta, alquiler o alquiler temporal, con un precio 30% menor al promedio de la sección General.",
        url: "/publicar"
    },
    {
        id: 5,
        icon: faMountainCity,
        title: "Tiempo compartido",
        text: "En Tiempo compartido solo se publican inmuebles para la venta o alquiler por temporada.",
        url: "/publicar"
    }
];