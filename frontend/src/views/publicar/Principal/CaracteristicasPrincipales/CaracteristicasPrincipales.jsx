import React from 'react';
import { Input, Contador, Select } from '../../../../components';
import { caracteristicasCheckboxes } from './CaracteristicasPrincipales';
import './CaracteristicasPrincipales.css';

const CaracteristicasPrincipales = () => (
    <section className='caracteristicas-principales'>
        <h2>Características principales</h2>
        <p>Contanos un poco más sobre tu propiedad.</p>

        <div className='dormitorios'>
            <Input
                displayName="Dormitorios"
                name="dormitorios"
                type="checkbox"
            />
            <Contador
                displayName="Cantidad de dormitorios"
                name="dormitorios-cantidad"
                max="20"
                min="1"
            />
            <Input
                displayName="Medidas de dormitorios"
                name="dormitorios-medidas"
                type="text"
            />
        </div>

        <div className='banos'>
            <Input
                displayName="Baños"
                name="banos"
                type="checkbox"
            />
            <Contador
                displayName="Cantidad de baños"
                name="banos-cantidad"
                max="10"
                min="1"
            />
            <Input
                displayName="Medidas de baños"
                name="banos-medidas"
                type="text"
            />
        </div>
        
        <div className='toilettes'>
            <Input
                displayName="Toilettes"
                name="toilettes"
                type="checkbox"
            />
            <Contador
                displayName="Cantidad de toilettes"
                name="toilettes-cantidad"
                max="10"
                min="1"
            />
            <Input
                displayName="Medidas de toilettes"
                name="toilettes-medidas"
                type="text"
            />
        </div>

        <div className='banos-suite'>
            <Input
                displayName="Baños en suite"
                name="banos-suite"
                type="checkbox"
            />
            <Contador
                displayName="Cantidad de baños en suite"
                name="banos-suite-cantidad"
                max="10"
                min="1"
            />
            <Input
                displayName="Medidas de baños en suite"
                name="banos-suite-medidas"
                type="text"
            />
        </div>

        <div className='ambientes'>
            <Contador
                displayName="Cantidad de ambientes *"
                name="ambientes-cantidad"
                max="20"
                min="1"
            />
        </div>

        {
            caracteristicasCheckboxes.map((campo) => (
                <div className={campo.className} key={campo.id}>
                    <Input
                        displayName={campo.displayName}
                        name={campo.name}
                        type="checkbox"
                    />
                    <Input
                        displayName={`Medidas de ${campo.displayName}`}
                        name={`${campo.name}-medidas`}
                        type="text"
                    />
                </div>
            ))
        }

        <div className='plantas'>
            <Input
                displayName="Plantas"
                name="plantas"
                type="checkbox"
            />
            <Contador
                displayName="Cantidad de plantas *"
                name="plantas-cantidad"
                max="5"
                min="1"
            />
        </div>

        <h3>Cocheras</h3>

        <div className='cocheras'>
            <Input
                displayName="Cocheras"
                name="cocheras"
                type="checkbox"
            />
            <Contador
                displayName="Cantidad de cocheras *"
                name="cocheras-cantidad"
                max="6"
                min="1"
            />
        </div>

        <div className="tipo-cochera">
            <Select
                displayName="Tipo de cochera"
                name="tipo-cochera"
            >
            </Select>
        </div>

        <div className="cobertura-cochera">
            <Select
                displayName="Cobertura de cochera"
                name="cobertura-cochera"
            >
            </Select>
        </div>

        <h3 className='antiguedad__subtitle'>Antigüedad</h3>

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
            displayName="Años"
            name="antiguedad-anos"
            type="number"
        />
        
    </section>
);

export default CaracteristicasPrincipales;