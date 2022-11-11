import React from 'react';
import { Select, Input, Button } from '../../../../components';
import './Ubicacion.css'

const Ubicacion = () => (
    <section className='ubicacion'>
        <h2>Ubicación</h2>
        <Select displayName="País *" name="pais">
        </Select>
        <Select displayName="Provincia *" name="provincia">
        </Select>
        <Select displayName="Partido *" name="partido" className="partido">
        </Select>
        <Select displayName="Localidad *" name="localidad" className="localidad">
        </Select>
        <Select displayName="Barrio" name="barrio">
        </Select>
        <Select displayName="SubBarrio" name="subbarrio">
        </Select>

        <Input
            displayName="Calle"
            name="calle"
            type="text"
            className="calle"
        />

        <Input
            displayName="Altura"
            name="altura"
            type="number"
        />

        <Input
            displayName="Piso"
            name="piso"
            type="number"
        />

        <Input
            displayName="Dpto."
            name="departamento"
            type="text"
        />

        <Input
            displayName="C.P."
            name="codigo-postal"
            type="number"
        />

        <h3>¿Cómo querés mostrar tu ubicación?</h3>
        <Input
            displayName="Exacta"
            name="muestra-ubicación"
            type="radio"
            className="muestra-ubicacion"
        />
        <Input
            displayName="Aproximada"
            name="muestra-ubicación"
            type="radio"
            className="muestra-ubicacion"
        />

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13121.608986308303!2d-58.59283116044926!3d-34.69503299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc6151b90a33f%3A0x4f6ccca5b2d439a0!2sEscuela%20tecnica%20n%C2%BA6!5e0!3m2!1ses!2sar!4v1666931952110!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <p>Recordá que si seleccionas la opción "Aproximada" tu propiedad no aparecerá en el mapa, solamente la localidad.</p>
    </section>
);

export default Ubicacion;