import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { Button } from '../../../components';
import {
    Basicos,
    DatosCountry,
    InformacionAdicional,
    Multimedia,
    Superficies,
    Ubicacion
} from '../components';
import { operaciones, departamento } from '../js/Basicos.js';

const Departamento = () => {

    let { seccion } = useParams();
    let isCountries = seccion === "countries";
    let isTiempoCompartido = seccion === "tiempo-compartido";

    let op = isTiempoCompartido ?
            [operaciones[0], operaciones[1]] :
            operaciones;

    return (
        <>
            <h2 className='titulo__seccion'>Nuevo departamento</h2>

            <Basicos
                inmueble="departamento"
                tipoUnidad={departamento}
                operaciones={op}
            />
            { isCountries ? <DatosCountry /> : null }
            <Superficies />
            <Ubicacion />
            <Multimedia />
            <InformacionAdicional />
        </>
    );
}

export default Departamento;