import React from 'react';
import { Select, Input } from '../../../../components';

const Inmobiliario = () => (
    <section>
        <h2>Datos de contacto inmobiliario</h2>
        <hr />
        <Input
            displayName="Email: *"
            name="email"
            type="email"
        />
        <Input
            displayName="Teléfono: *"
            name="tel"
            type="number"
        />
        <Input
            displayName="Celular: *"
            name="celular"
            type="number"
        />
        <Input
            displayName="Días y horarios de atención:"
            name="dias-horarios"
            type="text"
        />
        <Input
            displayName="Teléfono alternativo:"
            name="tel-alt"
            type="number"
        />
        <Select 
            displayName="Whatsapp (Cód. país + número): *"
            name="whatsapp-cod"
        >  
        </Select>
        <Input
            name="whatsapp-num"
            type="number"
        />
    </section>
);

export default Inmobiliario;