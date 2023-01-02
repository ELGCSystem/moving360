import { useContext } from 'react';
import {
    Basicos,
    DatosCountry,
    DatosEmprendimiento,
    CaracteristicasGenerales,
    CaracteristicasPrincipales,
    DemasAmbientes,
    InformacionAdicional,
    Instalaciones,
    Multimedia,
    Servicios,
    Superficies,
    Ubicacion,
    Contacto,
    ServiciosEdificio,
    CPrincipalesEdificio,
    InstalacionesEdificio
} from './components';
import { operations, getUnits } from './js/Basicos.js';
import { Store } from '../../Store.js';

const Inmueble = ({ section, estate }) => {

    const { state } = useContext(Store);
    const { estateData } = state;

    let insideCountry = estateData.dataEntrepreneurship.insideCountry;
    let isCountries = section === "countries";
    let isEmprendimientos = section === "emprendimientos";
    let isTiempoCompartido = section === "tiempo-compartido";

    let op = isTiempoCompartido ?
            [operations[0], operations[2]] :
            operations;

    return (
        <>
            <h2 className='titulo__seccion'>Nueva {estate}</h2>

            <Basicos
                estate={estate}
                unit={getUnits(estate)}
                operations={op}
                section={section}
            />
            { 
                isEmprendimientos ? 
                <DatosEmprendimiento estate={estate} /> : null 
            }
            { isCountries ? <DatosCountry /> : null }
            { isEmprendimientos && insideCountry ? <DatosCountry /> : null }
            <Superficies estate={estate} />
            <Ubicacion />
            <CaracteristicasPrincipales estate={estate} />
            <CaracteristicasGenerales estate={estate} />
            {
                estate !== "cochera" &&
                estate !== "parcelas-nichos-bovedas" &&
                estate !== "galpon" &&
                estate !== "campo" &&
                estate !== "lote-terreno" &&
                estate !== "camas-nauticas" ?
                <DemasAmbientes estate={estate} />
                : null
            }
            {
                estate !== "cochera" &&
                estate !== "parcelas-nichos-bovedas" &&
                estate !== "fondo-de-comercio" ?
                <>
                    <Instalaciones estate={estate} />
                    <Servicios estate={estate} />
                </>
                : null
            }
            { 
                estate === "departamento" ||
                estate === "oficina-consultorio" ? 
                <>
                    <CPrincipalesEdificio estate={estate} />
                    <InstalacionesEdificio />
                    <ServiciosEdificio />
                </>
                : null 
            }
            <Multimedia />
            <InformacionAdicional />
            <Contacto />
        </>
    );
};

export default Inmueble;