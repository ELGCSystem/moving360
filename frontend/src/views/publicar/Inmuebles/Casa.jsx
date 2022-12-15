import { useParams } from 'react-router-dom';
import {
    Basicos,
    DatosCountry,
    CaracteristicasGenerales,
    CaracteristicasPrincipales,
    DemasAmbientes,
    InformacionAdicional,
    Instalaciones,
    Multimedia,
    Servicios,
    Superficies,
    Ubicacion,
    Contacto
} from '../components';
import { operaciones, casa } from '../js/Basicos.js';

const Casa = () => {

    let { seccion } = useParams();
    let isCountries = seccion === "countries";
    let isTiempoCompartido = seccion === "tiempo-compartido";

    let op = isTiempoCompartido ?
            [operaciones[0], operaciones[1]] :
            operaciones;

    return (
        <>
            <h2 className='titulo__seccion'>Nueva Casa</h2>

            <Basicos
                inmueble={"casa"}
                tipoUnidad={casa}
                operaciones={op}
            />
            { isCountries ? <DatosCountry /> : null }
            <Superficies />
            <Ubicacion />
            <CaracteristicasPrincipales />
            <CaracteristicasGenerales />
            <DemasAmbientes />
            <Instalaciones />
            <Servicios />
            <Multimedia />
            <InformacionAdicional />
            <Contacto />
        </>
    );
}

export default Casa;