import { useState, useContext } from "react";
import { Input } from "../../../../components";
import { Store } from '../../../../Store.js';
import { demasAmbientes } from "./DemasAmbientes";
import './DemasAmbientes.css';

const DemasAmbientes = () => {

    const [data, setData] = useState({
        altillo: false,
        anteCocina: false,
        anteSala: false,
        azotea: false,
        balcon: false,
        balconAterrazado: false,
        bar: false,
        baulera: false,
        biblioteca: false,
        bodega: false,
        cuartoHerramientas: false,
        cuartoPlanchar: false,
        entrePiso: false,
        estudio: false,
        familyRoom: false,
        galeria: false,
        galpon: false,
        garage: false,
        jardin: false,
        fondoLibre: false,
        local: false,
        oficina: false,
        palier: false,
        parrilla: false,
        sala: false,
        sotano: false,
        suite: false,
        vestibulo: false,
        vestidor: false,
        vestuario: false
    });

    const { dispatch: ctxDispatch } = useContext(Store);

    const handleChange = e => {
        let sendData = data;
        let value = data[e.target.name];

        setData({ ...data, [e.target.name]: !value });
        sendData[e.target.name] = !value;

        ctxDispatch({ type: 'SAVE_OTHER_ENVIRONMENTS', payload: sendData });
        localStorage.setItem('otherEnvironments', JSON.stringify(sendData));
    };

    return (
        <section className="demas-ambientes">
            <h2>Demas ambientes</h2>

            {
                demasAmbientes.map((ambiente) => (
                    <Input
                        key={ambiente.id}
                        displayName={ambiente.displayName}
                        name={ambiente.name}
                        type="checkbox"
                        onChange={handleChange}
                    />
                ))
            }

            <button onClick={() => console.log(data)}></button>

        </section>
    )
};

export default DemasAmbientes;