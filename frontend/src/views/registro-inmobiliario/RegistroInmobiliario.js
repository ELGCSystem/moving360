import React, { useEffect } from 'react';
import './RegistroInmobiliario.css';
import Informacion from './Informacion/Informacion.jsx';
import Pago from './Pago/Pago.jsx';
import Finalizar from './Finalizar/Finalizar.jsx';
import DetallesCompra from './DetallesCompra/DetallesCompra.jsx';
import Pasos from './Pasos/Pasos.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';

const RegistroInmobiliario = () => {

  useEffect(() => {
    document.title = "Registro Inmobiliario - Moving360"
  }, []);

  return (
    <div className='registro-inmobiliario'>

      <Pasos />

      <form>
        <Routes>
          <Route path='*' element={<Navigate to='informacion' />} />
          <Route path='informacion' element={<Informacion />} />
          <Route path='pago' element={<Pago />} />
          <Route path='finalizar' element={<Finalizar />} />
        </Routes>
      </form>

      <DetallesCompra />

    </div>
  )
}

export default RegistroInmobiliario;
