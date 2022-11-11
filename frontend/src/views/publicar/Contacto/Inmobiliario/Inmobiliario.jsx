import React from 'react';
import { Select, Input } from '../../../../components';
import './Inmobiliario.css';

const Inmobiliario = () => (
    <section className='inmobiliario'>
        <h2>Datos de contacto inmobiliario</h2>
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
            className='whatsapp'
        >  
        </Select>
        <Input
            name="whatsapp-num"
            type="number"
            className='whatsapp-num'
        />
    </section>
);

export default Inmobiliario;