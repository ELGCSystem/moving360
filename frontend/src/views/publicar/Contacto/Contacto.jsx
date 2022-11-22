import React from 'react';
import { Button, Input, Select } from '../../../components/index.js';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import './Contacto.css'

const Contacto = () => (
    <>
        <section className="dueno">
            <h2>Datos de contacto del dueño</h2>
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

        <div className="buttons">
            <Button 
                to="/publicar/principal"
                onClick={window.scroll(0, 0)}
            >
                <FaAngleLeft /> Atras
            </Button>
            <Button
                to="/publicar/vista-previa"
                onClick={window.scroll(0, 0)}
                type="blue"
            >
                Continuar <FaAngleRight />
            </Button>
        </div>
    </>
);

export default Contacto;