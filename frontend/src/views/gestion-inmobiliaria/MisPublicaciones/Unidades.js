// Devuelve el tipo de unidad en torno al inmuble dado.
export const getUnits = (estate) => {

    switch (estate) {
        case "Casa":
            return casa;
        case "Departamento":
            return departamento;
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