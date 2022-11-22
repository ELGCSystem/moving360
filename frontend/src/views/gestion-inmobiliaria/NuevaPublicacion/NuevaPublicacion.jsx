import React from "react";
import './NuevaPublicacion.css';
import { Card } from "../../../components";
import { secciones } from "./Secciones";

const NuevaPublicacion = () => (
    <section className="nueva-publicacion">
        <h2>Nueva publicación</h2>
        <p className="subtitle">Selecciona la sección de inmuebles en la que se publicará.</p>

        <div className="nueva-publicacion__cards">
            {
                secciones.map((card) => (
                    <Card
                        icon={card.icon}
                        title={card.title}
                        text={card.text}
                        button="Seleccionar"
                        url={card.url}
                        className="nueva-publicacion"
                    />
                ))
            }
        </div>

    </section>
);

export default NuevaPublicacion;