import React from "react";
import { inmuebles } from '../MisPublicaciones/Inmuebles.js';
import { Publicacion } from '../../../components';

const MisPublicaciones = () => (
    <section className="mis-publicaciones">
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

export default MisPublicaciones;