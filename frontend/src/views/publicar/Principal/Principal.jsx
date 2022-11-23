import React from 'react';
import Basicos from './Basicos/Basicos.jsx';
import Ubicacion from './Ubicacion/Ubicacion.jsx';
import Multimedia from './Multimedia/Multimedia.jsx';
import CaracteristicasPrincipales from './CaracteristicasPrincipales/CaracteristicasPrincipales.jsx';
import CaracteristicasGenerales from './CaracteristicasGenerales/CaracteristicasGenerales.jsx';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { Button } from '../../../components/index.js';
import Superficies from './Superficies/Superficies.jsx';


const Principal = () =>  (
    <>
        <Button 
            to="/gestion-inmobiliaria/nueva-publicacion"
            onClick={window.scroll(0, 0)}
            className="atras"
        >
            <FaAngleLeft /> Atras
        </Button>

        <Basicos />
        <Superficies />
        <Ubicacion />
        <CaracteristicasPrincipales />
        <CaracteristicasGenerales />
        <Multimedia />

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

export default Principal;