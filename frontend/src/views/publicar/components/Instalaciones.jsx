import { useState, useContext } from "react";
import { Input } from "../../../components";
import { Store } from '../../../Store.js';
import { installations } from '../js/Instalaciones';
import { installations as installationsData } from "../js/Fields";
import '../css/Instalaciones.css';

const Instalaciones = () => {

    const [data, setData] = useState(installationsData);

    const { dispatch: ctxDispatch } = useContext(Store);

    const handleChange = e => {
        let sendData = data;
        let value = data[e.target.name];

        setData({ ...data, [e.target.name]: !value });
        sendData[e.target.name] = !value;

        ctxDispatch({ type: 'SAVE_INSTALLATIONS', payload: sendData });
        localStorage.setItem('installations', JSON.stringify(sendData));
    };

    return (
        <section className="instalaciones">
            <h2>Instalaciones</h2>

            {
                installations.map((field) => (
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

export default Instalaciones;