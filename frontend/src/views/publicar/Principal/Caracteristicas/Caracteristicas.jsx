import React from 'react';
import { Select, Input, Button } from '../../../../components';
import './Caracteristicas.css';

const Caracteristicas = () => (
    <section className='caracteristicas'>
        <h2>Características principales</h2>
        <p>Contanos un poco más sobre tu propiedad.</p>
        <Input
            displayName="Ambientes (opcional)"
            name="ambientes"
            type="number"
        />
        <Input
            displayName="Dormitorios (opcional)"
            name="dormitorios"
            type="number"
        />
        <Input
            displayName="Baños (opcional)"
            name="banos"
            type="number"
        />
        <Input
            displayName="Toilettes (opcional)"
            name="toilettes"
            type="number"
        />
        <Input
            displayName="Cocheras (opcional)"
            name="cocheras"
            type="number"
        />

        <h3 className='caracteristicas__superficie'>Superficie</h3>
        <Input
            displayName="Superficie cubierta (m2)"
            name="superficie-cubierta"
            type="number"
        />
        <Input
            displayName="Superficie total (m2)"
            name="superficie-total"
            type="number"
        />

        <h3 className='caracteristicas__antiguedad'>Antigüedad</h3>
        <Input
            displayName="A estrenar"
            name="antiguedad"
            type="radio"
        />
        <Input
            displayName="Años de antigüedad"
            name="antiguedad"
            type="radio"
        />
        
        <Input
            displayName="En construcción"
            name="antiguedad"
            type="radio"
        />

        <h3 className='caracteristicas__precio'>Precio</h3>
        <Select displayName="Precio de la propiedad" name="precio-propiedad-moneda" >
        </Select>
        <Input
            displayName=""
            name="precio-propiedad-valor"
            type="number"
        />
        <Select displayName="Expensas (opcional)" name="precio-expensas-moneda" >
        </Select>
        <Input
            displayName=""
            name="precio-expensas-valor"
            type="number"
        />

        <h3 className='caracteristicas__descripcion'>Descripción la propiedad</h3>

        <Input
            displayName="Descripción"
            name="descripcion"
            type="text"
        />
    </section>
);

export default Caracteristicas;