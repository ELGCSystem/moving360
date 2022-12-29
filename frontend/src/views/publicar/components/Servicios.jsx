import { useState, useContext } from "react";
import { Input } from "../../../components";
import { Store } from '../../../Store.js';
import { services } from "../js/Servicios";
import { services as servicesData } from "../js/Fields";
import '../css/Servicios.css';

const Servicios = () => {

    const [data, setData] = useState(servicesData);

    const { dispatch: ctxDispatch } = useContext(Store);

    const handleChange = e => {
        let sendData = data;
        let value = data[e.target.name];

        setData({ ...data, [e.target.name]: !value });
        sendData[e.target.name] = !value;

        ctxDispatch({ type: 'SAVE_SERVICES', payload: sendData });
        localStorage.setItem('services', JSON.stringify(sendData));
    };

    return (
        <section className="servicios">
            <h2>Servicios</h2>

            {
                services.map((field) => (
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

export default Servicios;