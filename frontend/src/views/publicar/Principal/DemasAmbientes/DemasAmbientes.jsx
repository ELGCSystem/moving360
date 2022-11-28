import React from "react";
import { Input } from "../../../../components";
import { demasAmbientes } from "./DemasAmbientes";
import './DemasAmbientes.css';

const DemasAmbientes = () => (
    <section className="demas-ambientes">
        <h2>Demas ambientes</h2>

        {
            demasAmbientes.map((ambiente) => (
                <Input
                    key={ambiente.id}
                    displayName={ambiente.displayName}
                    name={ambiente.name}
                    type="checkbox"
                />
            ))
        }
    </section>
);

export default DemasAmbientes;