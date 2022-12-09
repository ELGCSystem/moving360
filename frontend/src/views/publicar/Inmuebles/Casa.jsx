import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { Button } from '../../../components';
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
    Ubicacion
} from '../Principal';
import { operaciones, casa } from '../Principal/Basicos/Basicos.js';

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

            <Button 
                to="/gestion-inmobiliaria/nueva-publicacion"
                onClick={window.scroll(0, 0)}
                className="atras"
            >
                <FaAngleLeft /> Atras
            </Button>

            <Basicos
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

            <Button 
                to="/publicar/contacto"
                onClick={window.scroll(0, 0)}
                className="continuar"
                type="blue"
            >
                Continuar <FaAngleRight />
            </Button>
        </>
    );
}

export default Casa;