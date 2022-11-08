import React, { useEffect } from 'react';
import Principal from './Principal/Principal.jsx';
import Contacto from './Contacto/Contacto.jsx';
import VistaPrevia from './VistaPrevia/VistaPrevia.jsx';
import './Publicar.css';
import { Navigate, Route, Routes } from 'react-router-dom';

const Publicar = () => {

  useEffect(() => {
    document.title = "Publicar - Moving360"
  }, []);

  return (
    <div className='procedimiento'>
      <form>
        <Routes>
          <Route path='*' element={<Navigate to='principal' />} />
          <Route path='principal' element={<Principal />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='vista-previa' element={<VistaPrevia />} />
        </Routes>
      </form>
    </div>
  )
}

export default Publicar;
