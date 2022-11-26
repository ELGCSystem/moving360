import React from "react";
import './Instalaciones.css';
import { instalaciones } from './Instalaciones'
import { Input } from "../../../../components";

const Instalaciones = () => (
    <section className="instalaciones">
        <h2>Instalaciones</h2>

        {
            instalaciones.map((instalacion) => (
                <Input
                    key={instalacion.id}
                    displayName={instalacion.displayName}
                    name={instalacion.name}
                    type="checkbox"
                />
            ))
        }
    </section>
);

export default Instalaciones;