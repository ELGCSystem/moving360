import { useState } from "react";
import { Select, Input } from "../../../../components";
import {
    zonas,
    deportes,
    amenities
} from "./DatosCountry";
import "./DatosCountry.css";

const DatosCountry = () => {

    const [zona, setZona] = useState("");
    const [idZona, setIdZona] = useState(-1);

    const [data, setData] = useState({
        nombre: '',
        zona: '',
        partido: '',
        urbanizacion: '',
        basquet: false,
        equitacion: false,
        futbol: false,
        golf: false,
        hockey: false,
        paddle: false,
        polo: false,
        rugby: false,
        tenis: false,
        voley: false,
        clubHouse: false,
        gimnasio: false,
        juegos: false,
        laundry: false,
        piscina: false,
        SUM: false,
        caballeriza: false,
        colegio: false,
        bancos: false,
        centroComercial: false
    });

    const zonaHandler = (e) => {
        setZona(e.target.value);
        idZonaHandler(e.target.value);
    }

    const idZonaHandler = (newZona) => {
        zonas.map((zonaItem) => {
            if (newZona == zonaItem.title) {
                setIdZona(zonaItem.id -1);
            }
        })
    }

    const handleChange = e => {
        if (e.target.type === "checkbox") {
            let value = data[e.target.name];
            setData({ ...data, [e.target.name]: !value });
        } else
            setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <section className="datos-country">
            <h2>Datos del country / Barrio cerrado</h2>

            <Input 
                displayName="Nombre *" 
                name="nombre"
                type="text"
                onChange={handleChange}
            />

            <Select 
                displayName="Zona *"
                name="zona" 
                onChange={
                    (e) => {
                        zonaHandler(e);
                        handleChange(e);
                    }
                }>
                <option value="">Seleccione una opción...</option>
                <option>Norte</option>
                <option>Oeste</option>
                <option>Sur</option>
            </Select>

            <Select
                displayName="Partido *"
                name="partido"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    zona ? 
                    (
                        zonas[idZona].partidos.map((partido) => (
                            <option>{partido}</option>
                        ))
                    ) : 
                    null
                }
            </Select>
            
            <Select
                displayName="Urbanización *"
                name="urbanizacion"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                <option>Country Club</option>
                <option>Barrio Cerrado</option>
                <option>Barrio de chacras</option>
            </Select>

            <h3>Deportes</h3>

            {
                deportes.map((deporte) => (
                    <Input
                        key={deporte.id}
                        displayName={deporte.displayName}
                        name={deporte.name}
                        type="checkbox"
                        onChange={handleChange}
                    />
                ))
            }

            <h3>Amenities</h3>

            {
                amenities.map((amenity) => (
                    <Input
                        key={amenity.id}
                        displayName={amenity.displayName}
                        name={amenity.name}
                        type="checkbox"
                        onChange={handleChange}
                    />
                ))
            }

        </section>
    )
};

export default DatosCountry;