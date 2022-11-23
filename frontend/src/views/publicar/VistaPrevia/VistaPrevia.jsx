import React from 'react';
import { Button, Card, Publicacion } from '../../../components/index.js';
import imagenPrincipal from './casa-ejemplo.jpg';
import inmobiliaria from './remax.jpg';
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons';
import { FaAngleLeft, FaUpload } from 'react-icons/fa';
import './VistaPrevia.css';

const VistaPrevia = () => (
    <section className='vista-previa'>
        <div>
            <h2>Vista Previa</h2>
            <p>Así se verá tu aviso.</p>
            <Publicacion
                imagen={imagenPrincipal}
                precio='USD 2.800'
                expensas='$35.000'
                ubicacion='Los Sauces'
                ciudad='Nordelta'
                tipoPublicacion='Súper Destacado'
                superficieTotal='1091m2'
                superficieCubierta='565m2'
                dormitorios='5 dorm.'
                banos='6 baños'
                cocheras='1 coch.'
                titulo='Casa Amoblada en Alquiler en Los Sauces Nordelta'
                descripcion='Casa de 5 dormitorios en alquiler con muebles en Los Sauces, Nordelta. Disponible a partir del 22 de agosto de 2022.'
                inmobiliaria={inmobiliaria}
            />
            <Card
                icon={faHouseChimneyUser}
                title='Nombre Dueño'
                text='Celular'
                text2='Telefono'
                className='datos-contacto'
            />
            <p>
                Luego de publicar, podes modificar los datos de contacto entrando a "Ver publicaciones" y a "Editar publicación".
            </p>
        </div>

        <div className="buttons">
            <Button
                to="/publicar/contacto"
                onClick={window.scroll(0, 0)}
            >
                <FaAngleLeft /> Atras
            </Button>
            <Button 
                to="/"
                type="blue"
            >
                <FaUpload /> Publicar
            </Button>
        </div>
    </section>
);

export default VistaPrevia;