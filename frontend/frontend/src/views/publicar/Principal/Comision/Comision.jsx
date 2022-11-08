import React from 'react';
import { Input } from '../../../../components';
import './Comision.css';

const Comision = () => (
    <section className='compartir-comision'>
        <h2>Compartir comisión</h2>

        <Input
            displayName="Compartir 50%"
            name="porcentaje-compartir"
            type="radio"
        />

        <Input
            displayName="Compartir 30%"
            name="porcentaje-compartir"
            type="radio"
        />

        <Input
            displayName="No compartir"
            name="porcentaje-compartir"
            type="radio"
        />

    </section>
);

export default Comision;