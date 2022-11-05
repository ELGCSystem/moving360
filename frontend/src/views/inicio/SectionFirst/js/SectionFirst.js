import React from 'react';
import '../css/SectionFirst.css';
import { Button } from 'react-bootstrap';

const SectionFirst = () => {
  return (
    <div className='SectionFirst'>
        <h1 className='SectionFirst__title'>¡Simplifica tus busquedas!</h1>
        <h3 className='SectionFirst__subtitle'>Beneficios de Loguearse</h3>
        <div className='list__container'>
            <ul className='SectionFirst__list--left'>
                <li className='list__options'>Búsquedas Personalizadas</li>
                <li className='list__options'>Consultar estadísticas actualizadas de cada publicación</li>
                <li className='list__options'>Consultar y/o solicitar garantías</li>
            </ul>
            <ul className='SectionFirst__list--right'>
                <li className='list__options'>Acceso a Mensajería interna con las inmobiliarias</li>
                <li className='list__options'>Ofertar y opinar sobre un inmueble</li>
                <li className='list__options'>Búsquedas Personalizadas</li>
            </ul>      
        </div>
        <Button variant='primary' href="#" className='register'>Registrarse</Button>
    </div>
  )
}

export default SectionFirst
