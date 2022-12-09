import { useState, useContext } from "react";
import { Input } from "../../../../components";
import { Store } from '../../../../Store.js';
import { instalaciones } from './Instalaciones'
import './Instalaciones.css';

const Instalaciones = () => {

    const [data, setData] = useState({
        aguaCloaca: false,
        aireCaliente: false,
        cable: false,
        calefaccionTiroBalanceado: false,
        desayunador: false,
        gasEnvasado: false,
        losaRadiante: false,
        pileta: false,
        pisoRadianteIndividual: false,
        aguaCaliente: false,
        amoblado: false,
        cajaFuerte: false,
        calefon: false,
        electricidad: false,
        gasNatural: false,
        mueblesCocina: false,
        radiadores: false,
        pisoRadianteCentral: false,
        aireAcondicionadoCentral: false,
        aireAcondicionadoIndividual: false,
        artefactosCocina: false,
        calderaIndividual: false,
        canchaFutbol: false,
        canchaTenis: false,
        espacioVehicular: false,
        hidromasaje: false,
        accesoMovilidadReducida: false,
        solarium: false,
        ascensor: false,
        calefaccion: false,
        extractorAire: false,
        hogarLena: false,
        pavimento: false,
        termotanque: false,
        riegoAspersion: false
    });

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
                instalaciones.map((instalacion) => (
                    <Input
                        key={instalacion.id}
                        displayName={instalacion.displayName}
                        name={instalacion.name}
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