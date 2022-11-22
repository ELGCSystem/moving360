import React from "react";
import { Input } from "../../../../components";
import './Superficies.css';

const Superficies = () => (
    <section className="superficies">
        <h2>Superficies</h2>
        <Input
            displayName="Superficie cubierta (m2) *"
            name="superficie-cubierta"
            type="number"
        />
        <Input
            displayName="Superficie semi cubierta (m2)"
            name="superficie-semicubierta"
            type="number"
        />
        <Input
            displayName="Superficie descubierta (m2)"
            name="superficie-descubierta"
            type="number"
        />
        <Input
            displayName="Superficie terreno (m2) *"
            name="superficie-terreno"
            type="number"
        />
    </section>
);

export default Superficies;