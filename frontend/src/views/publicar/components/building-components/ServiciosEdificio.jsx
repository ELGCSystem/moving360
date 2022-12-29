import { useState, useContext } from "react";
import { Input } from "../../../../components";
import { Store } from '../../../../Store.js';
import { buildingServices } from "../../js/Servicios";
import { building } from '../../js/Fields';
import '../../css/Servicios.css';

const ServiciosEdificio = () => {

    const [data, setData] = useState(building.services);
    const { dispatch: ctxDispatch } = useContext(Store);

    const handleChange = e => {
        let sendData = data;
        let value = data[e.target.name];

        setData({ ...data, [e.target.name]: !value });
        sendData[e.target.name] = !value;

        ctxDispatch({ type: 'SAVE_BUILDING_SERVICES', payload: sendData });
        localStorage.setItem('buildingServices', JSON.stringify(sendData));
    };

    return (
        <section className="servicios">
            <h2>Servicios del edificio</h2>

            {
                buildingServices.map((field) => (
                    <Input
                        key={field.id}
                        displayName={field.displayName}
                        name={field.name}
                        type="checkbox"
                        onChange={handleChange}
                    />
                ))
            }

            <button onClick={() => console.log(data)}>Mostrar</button>
        </section>
    )
};

export default ServiciosEdificio;