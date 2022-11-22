import React from 'react';
import { FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../../../components';
import './Multimedia.css';

const Multimedia = () => (
    <>
        <section className='carga-imagen'>
            <h2>Carga de imagen</h2>
            <p>
                La foto de usted vaya a tomar deberá ser en formato 360°, de lo contrario su publicación será negada.
            </p>
            <h4>Foto principal</h4>
            <Input
                displayName={<FaCamera />}
                name="foto-principal"
                type="file"
            />
            <p>
                Las imágenes no podrán incluir datos de contacto como teléfono, dirección de correo o páginas web. Ver <Link to="/">Términos y condiciones.</Link>
            </p>
        </section>

        <section className='carga-recorrido-360'>
            <h2>Carga de Recorrido 360°</h2>
            <p>
                Si usted posee archivos en formato 360° puede subirlas para realizar su posterior edicion. De lo contrario, deberá solicitar un turno para la producción y para posteriormente su respectiva edición.
            </p>
            <h4 className='carga-recorrido-360__subtitle'>Fotos Recorrido 360°</h4>
            <Input
                displayName={<FaCamera />}
                name="recorrido"
                type="file"
            />
            <Input
                displayName={<FaCamera />}
                name="recorrido"
                type="file"
            />
            <Input
                displayName={<FaCamera />}
                name="recorrido"
                type="file"
            />
            <Input
                displayName={<FaCamera />}
                name="recorrido"
                type="file"
            />
            <Input
                displayName={<FaCamera />}
                name="recorrido"
                type="file"
            />
            <Input
                displayName={<FaCamera />}
                name="recorrido"
                type="file"
            />
            <Input
                displayName={<FaCamera />}
                name="recorrido"
                type="file"
            />
            <Input
                displayName={<FaCamera />}
                name="recorrido"
                type="file"
            />
            <Input
                displayName={<FaCamera />}
                name="recorrido"
                type="file"
            />
            <Input
                displayName={<FaCamera />}
                name="recorrido"
                type="file"
            />
            <Input
                displayName={<FaCamera />}
                name="recorrido"
                type="file"
            />
            <Input
                displayName={<FaCamera />}
                name="recorrido"
                type="file"
            />
            <h4 className='carga-recorrido-360__turno'>En caso de no tener fotos 360°</h4>
            <Button to="/" type="blue">Solicitar Turno</Button>
        </section>
    </>
);

export default Multimedia;