import React from 'react';
import { Select, Input } from '../../../../components';
import {
    generales,
    caracteristicas,
    servicios,
    ambientes,
    adicionales
} from './CaracteristicasGenerales';
import './CaracteristicasGenerales.css'; 

const CaracteristicasGenerales = () => (
    <section className='caracteristicas-generales'>
        <h2>Características generales</h2>
        <p>
            Estos campos opcionales mejoran el posicionamiento de tu aviso.
        </p>

        <h3>Terreno</h3>

        <Input
            displayName="Medidas frente (m2)"
            name="terreno-frente"
            type="text"
        />

        <Input
            displayName="Medidas fondo (m2)"
            name="terreno-fondo"
            type="text"
        />

        <h3>Pisos, paredes y techo</h3>

        <Select
            displayName="Tipo de piso (interior)"
            name="piso-interior"
        >
        </Select>

        <Select
            displayName="Tipo de piso de madera"
            name="piso-madera"
        >
        </Select>

        <Select
            displayName="Tipo de piso (exterior)"
            name="piso-exterior"
        >
        </Select>

        <Select
            displayName="Paredes (exteriores)"
            name="paredes-exteriores"
        >
        </Select>

        <Select
            displayName="Tipo de techo"
            name="techo"
        >
        </Select>

        <h3>Adicionales</h3>

        <Select
            displayName="Estado de la propiedad"
            name="estado"
        >
        </Select>
        <Select
            displayName="Orientación"
            name="orientacion"
        >
        </Select>
        <Select
            displayName="Tipo de vista"
            name="vista"
        >
        </Select>
        <Select
            displayName="Tipo de costa"
            name="costa"
        >
        </Select>
        <Select
            displayName="Tipo de pendiente"
            name="vista"
        >
        </Select>
        
    </section>
);

/*

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

*/

export default CaracteristicasGenerales;