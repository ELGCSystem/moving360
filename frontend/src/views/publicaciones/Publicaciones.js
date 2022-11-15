import React, { useEffect } from 'react';
import { inmuebles } from './Inmuebles.js';
import { Publicacion } from '../../components/index.js';
import Filtros from './Filtros.jsx';
import './Publicaciones.css';

const Publicaciones = () => {
  useEffect(() => {
    document.title = 'Publicaciones - Moving360';
  }, []);

  return (
    <section className='publicaciones'>
      {
        inmuebles.map((inmueble) => (
          <Publicacion
            imagen={inmueble.imagen}
            precio={inmueble.precio}
            expensas={inmueble.expensas}
            ubicacion={inmueble.ubicacion}
            ciudad={inmueble.ciudad}
            tipoPublicacion={inmueble.tipoPublicacion}
            superficieTotal={inmueble.superficieTotal}
            superficieCubierta={inmueble.superficieCubierta}
            dormitorios={inmueble.dormitorios}
            banos={inmueble.banos}
            cocheras={inmueble.cocheras}
            titulo={inmueble.titulo}
            descripcion={inmueble.descripcion}
            inmobiliaria={inmueble.inmobiliaria}
          />
        )) 
      }
    </section>
  );
};

export default Publicaciones;
