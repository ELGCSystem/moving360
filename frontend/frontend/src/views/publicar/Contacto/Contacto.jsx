import React from 'react';
import { Button } from '../../../components/index.js';
import Inmobiliario from './Inmobiliario/Inmobiliario.jsx';
import Cliente from './Cliente/Cliente.jsx';

const Contacto = () => (
    <div>
        <div>
            <Inmobiliario />
            <Cliente />
        </div>

        <Button to="/publicar/principal" onClick={window.scroll(0, 0)}>
            Atras
        </Button>
        <Button to="/publicar/vista-previa" onClick={window.scroll(0, 0)}>
            Continuar
        </Button>
    </div>
);

export default Contacto;