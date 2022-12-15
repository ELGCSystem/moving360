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

const OficinaConsultorio = () => {

    let { seccion } = useParams();
    let isCountries = seccion == "countries";

    return (
        <>
            <h2 className='titulo__seccion'>Nueva Oficina/Consultorio</h2>

            <Button 
                to="/gestion-inmobiliaria/nueva-publicacion"
                onClick={window.scroll(0, 0)}
                className="atras"
            >
                <FaAngleLeft /> Atras
            </Button>

            <Basicos />
            { isCountries ? <DatosCountry /> : null }
            <Superficies />
            <Ubicacion />
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

export default OficinaConsultorio;