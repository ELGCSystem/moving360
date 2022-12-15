import { useState, useContext } from "react";
import { Select, Input } from "../../../components";
import { Store } from '../../../Store.js';
import {
    zones,
    sports,
    amenities
} from "../js/DatosCountry";
import "../css/DatosCountry.css";

const DatosCountry = () => {

    const [zona, setZona] = useState("");
    const [idZona, setIdZona] = useState(-1);

    const [data, setData] = useState({
        name: false,
        zone: false,
        state: false,
        urbanization: false,
        basketball: false,
        horseRiding: false,
        football: false,
        golf: false,
        hockey: false,
        paddle: false,
        polo: false,
        rugby: false,
        tennis: false,
        volleyball: false,
        clubHouse: false,
        gym: false,
        games: false,
        laundry: false,
        pool: false,
        multipurposeRoom: false,
        stable: false,
        school: false,
        bank: false,
        mall: false
    });

    const { dispatch: ctxDispatch } = useContext(Store);

    const zonaHandler = (e) => {
        setZona(e.target.value);
        idZonaHandler(e.target.value);
    }

    const idZonaHandler = (newZona) => {
        zones.map((zonaItem) => {
            if (newZona == zonaItem.title) {
                setIdZona(zonaItem.id -1);
            }
        })
    }

    const handleChange = e => {

        let sendData = data;

        if (e.target.type === "checkbox") {
            let value = data[e.target.name];
            setData({ ...data, [e.target.name]: !value });
            sendData[e.target.name] = !value;
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
            sendData[e.target.name] = e.target.value;
        }

        ctxDispatch({ type: 'SAVE_DATA_COUNTRY', payload: sendData });
        localStorage.setItem('dataCountry', JSON.stringify(sendData));
        
    };

    return (
        <section className="datos-country">
            <h2>Datos del country / Barrio cerrado</h2>

            <Input 
                displayName="Nombre *" 
                name="name"
                type="text"
                onChange={handleChange}
            />

            <Select 
                displayName="Zona *"
                name="zone" 
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
                name="state"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    zona ? 
                    (
                        zones[idZona].partidos.map((partido) => (
                            <option>{partido}</option>
                        ))
                    ) : 
                    null
                }
            </Select>
            
            <Select
                displayName="Urbanización *"
                name="urbanization"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                <option>Country Club</option>
                <option>Barrio Cerrado</option>
                <option>Barrio de chacras</option>
            </Select>

            <h3>Deportes</h3>

            {
                sports.map((field) => (
                    <Input
                        key={field.id}
                        displayName={field.displayName}
                        name={field.name}
                        type="checkbox"
                        onChange={handleChange}
                    />
                ))
            }

            <h3>Amenities</h3>

            {
                amenities.map((field) => (
                    <Input
                        key={field.id}
                        displayName={field.displayName}
                        name={field.name}
                        type="checkbox"
                        onChange={handleChange}
                    />
                ))
            }

        </section>
    )
};

export default DatosCountry;