import { useState, useContext } from "react";
import { Input } from "../../../../components";
import { Store } from '../../../../Store.js';
import { servicios } from "./Servicios";
import './Servicios.css';

const Servicios = () => {

    const [data, setData] = useState({
        impuestoMunicipal: false,
        electricidad: false,
        limpieza: false,
        seguridad: false,
        vigilancia: false,
        aguaCaliente: false,
        gasEnvasado: false,
        refrigeracion: false,
        telefono: false,
        calefaccion: false,
        gasNatural: false,
        impuestoInmobiliario: false,
        toallas: false,
        conmutador: false,
        internet: false,
        ropaCama: false,
        videoCable: false
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
                servicios.map((servicio) => (
                    <Input
                        key={servicio.id}
                        displayName={servicio.displayName}
                        name={servicio.name}
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