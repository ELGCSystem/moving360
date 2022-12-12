import { useState, useContext } from "react";
import { Input } from "../../../../components";
import { Store } from '../../../../Store.js';
import { services } from "./Servicios";
import './Servicios.css';

const Servicios = () => {

    const [data, setData] = useState({
        councilTax: false,
        electricity: false,
        cleaning: false,
        security: false,
        vigilance: false,
        runningWater: false,
        bottledGas: false,
        refrigeration: false,
        telephone: false,
        heating: false,
        naturalGas: false,
        realEstateTax: false,
        towels: false,
        commutator: false,
        internet: false,
        linen: false,
        videoCable: false,
    });

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