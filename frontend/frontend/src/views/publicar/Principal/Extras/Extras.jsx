import React from 'react';
import { Select, Input, Button } from '../../../../components';
import { generales, caracteristicas, servicios, ambientes, adicionales } from './Extras';

const Extras = () => (
    <section className='caracteristicas-extras'>
        <h2>Características generales</h2>
        <hr />
        <p>
            Estos campos opcionales mejoran el posicionamiento de tu aviso.
        </p>
        {
            generales.map((caracteristica) => (
                <Input
                    displayName={caracteristica.displayName}
                    name={caracteristica.name}
                    type="checkbox"
                />
            ))
        }

        <h3>Características</h3>
        {
            caracteristicas.map((caracteristica) => (
                <Input
                    displayName={caracteristica.displayName}
                    name={caracteristica.name}
                    type="checkbox"
                />
            ))
        }

        <h3>Servicios</h3>
        {
            servicios.map((caracteristica) => (
                <Input
                    displayName={caracteristica.displayName}
                    name={caracteristica.name}
                    type="checkbox"
                />
            ))
        }

        <h3>Ambientes</h3>
        {
            ambientes.map((caracteristica) => (
                <Input
                    displayName={caracteristica.displayName}
                    name={caracteristica.name}
                    type="checkbox"
                />
            ))
        }

        <h3>Adicionales</h3>
        {
            adicionales.map((caracteristica) => (
                <Select
                    displayName={caracteristica.displayName}
                    name={caracteristica.name}
                >
                </Select>
            ))
        }
    </section>
);

export default Extras;