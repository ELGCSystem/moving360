import React from 'react';
import { Select, Input } from '../../../../components';
import { operaciones, propiedades } from './Operaciones';
import './Basicos.css';

const Basicos = () => (
    <section className='datos-basicos'>
        <h2>Datos básicos</h2>

        <Select displayName="Tipo de Unidad *" name="tipo-unidad"> 
        </Select>

        <Select displayName="Tipo de Operación *" name="tipo-operacion">  
        </Select>
        
        <Input
            displayName="Precio *"
            name="precio"
            type="number"
        />

        <Input
            displayName="USD"
            name="moneda"
            type="radio"
        />

        <Input
            displayName="$"
            name="moneda"
            type="radio"
        />

        <Select displayName="Estado *" name="estado"> 
        </Select>

        <Input
            displayName="Apto crédito"
            name="apto-credito"
            type="checkbox"
            className="apto-credito"
        />

        <Input
            displayName="Acepta Permuta"
            name="acepta-permuta"
            type="checkbox"
            className="acepta-permuta"
        />

        <Input
            displayName="Título del aviso *"
            name="titulo"
            type="text"
            className="titulo-aviso"
        />

        <p>Máximo 100 caracteres. Ej: Vendo Depto. Excelente estado.</p>
        
    </section>
);

export default Basicos;