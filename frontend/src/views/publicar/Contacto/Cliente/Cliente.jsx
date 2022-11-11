import React from 'react';
import { Select, Input } from '../../../../components';
import './Cliente.css';

const Cliente = () => (
    <section className='cliente'>
        <h2>Datos de contacto cliente</h2>
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
            displayName="Teléfono alternativo:"
            name="tel-alt"
            type="number"
        />
        <Select 
            displayName="Whatsapp (Cód. país + número): *"
            name="whatsapp-cod"
            className="whatsapp"
        >  
        </Select>
        <Input
            name="whatsapp-num"
            type="number"
            className="whatsapp-num"
        />
    </section>
);

export default Cliente;