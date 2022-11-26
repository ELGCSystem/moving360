import React, { useEffect } from 'react';
import Contacto from './Contacto/Contacto.jsx';
import VistaPrevia from './VistaPrevia/VistaPrevia.jsx';
import './Publicar.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Casa,
  Departamento,
  DepartamentoPH,
  Cochera,
  OficinaConsultorio,
  Local,
  Galpon,
  FondoComercio,
  Campo,
  Quinta,
  LoteTerreno,
  Hotel,
  ParcelaNichoBoveda,
  CamasNauticas
} from './Inmuebles/index.js';

const Publicar = () => {

  useEffect(() => {
    document.title = "Publicar - Moving360"
  }, []);

  return (
    <div className='publicar'>
      <form>
        <Routes>
          <Route path=':seccion/casa/*' element={<Casa />} />
          <Route path=':seccion/departamento/*' element={<Departamento />} />
          <Route path=':seccion/departamento-tipo-ph/*' element={<DepartamentoPH />} />
          <Route path=':seccion/cochera/*' element={<Cochera />} />
          <Route path=':seccion/oficina-consultorio/*' element={<OficinaConsultorio />} />
          <Route path=':seccion/local/*' element={<Local />} />
          <Route path=':seccion/galpon/*' element={<Galpon />} />
          <Route path=':seccion/fondo-de-comercio/*' element={<FondoComercio />} />
          <Route path=':seccion/campo/*' element={<Campo />} />
          <Route path=':seccion/quinta/*' element={<Quinta />} />
          <Route path=':seccion/lote-terreno/*' element={<LoteTerreno />} />
          <Route path=':seccion/hotel/*' element={<Hotel />} />
          <Route path=':seccion/parcelas-nichos-bovedas/*' element={<ParcelaNichoBoveda />} />
          <Route path=':seccion/camas-nauticas/*' element={<CamasNauticas />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='vista-previa' element={<VistaPrevia />} />
        </Routes>
      </form>
    </div>
  )
}

export default Publicar;