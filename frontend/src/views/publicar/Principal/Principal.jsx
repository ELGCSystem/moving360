import React from 'react';
import Basicos from './Basicos/Basicos.jsx';
import Comision from './Comision/Comision.jsx';
import Ubicacion from './Ubicacion/Ubicacion.jsx';
import Multimedia from './Multimedia/Multimedia.jsx';
import Caracteristicas from './Caracteristicas/Caracteristicas.jsx';
import Extras from './Extras/Extras.jsx';
import { Route, Routes } from 'react-router-dom';
import { Button } from '../../../components/index.js';


const Principal = () =>  (

        <>
            <Basicos />
            <Comision />
            <Ubicacion />
            <Multimedia />
            <Caracteristicas />
            <Extras />

            <Button to="/" onClick={window.scroll(0, 0)}>
                Atras
            </Button>
            <Button to="/publicar/contacto" onClick={window.scroll(0, 0)}>
                Continuar
            </Button>
        </>

    /*<Routes>
        <Route path='/' element={<Operaciones />} />
        <Route path='/principal/operaciones' element={<Operaciones />} />
        <Route path='/principal/ubicacion' element={<Ubicacion />} />
        <Route path='/principal/caracteristicas' element={<Caracteristicas />} />
    </Routes>*/
);

export default Principal;