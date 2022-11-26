import React from "react";
import { servicios } from "./Servicios";
import { Input } from "../../../../components";
import './Servicios.css';

const Servicios = () => (
    <section className="servicios">
        <h2>Servicios</h2>

        {
            servicios.map((servicio) => (
                <Input
                    key={servicio.id}
                    displayName={servicio.displayName}
                    name={servicio.name}
                    type="checkbox"
                />
            ))
        }
    </section>
);

export default Servicios;