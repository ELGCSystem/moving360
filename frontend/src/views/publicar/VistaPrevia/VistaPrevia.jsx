import { useState, useContext } from 'react';
import { Button, Card, Publicacion } from '../../../components/index.js';
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons';
import { FaAngleLeft, FaUpload } from 'react-icons/fa';
import { Store } from '../../../Store.js';
import imagenPrincipal from './casa-ejemplo.jpg';
import inmobiliaria from './remax.jpg';
import './VistaPrevia.css';

const VistaPrevia = () => {

    const { state } = useContext(Store);
    const { houseData } = state;

    return (
        <section className='vista-previa'>
            <div>
                <h2>Vista Previa</h2>
                <p>Así se verá tu aviso.</p>
                <Publicacion
                    imagen={imagenPrincipal}
                    precio={`
                        ${houseData.dataBasic.moneda}
                        ${houseData.dataBasic.precio}
                    `}
                    expensas=''
                    ubicacion={houseData.location.localidad}
                    ciudad={houseData.location.partido}
                    tipoPublicacion='98,2% coincidencia'
                    superficieTotal={`
                        ${houseData.surface.superficieTerreno}
                        m2
                    `}
                    superficieCubierta={`
                        ${houseData.surface.superficieCubierta}
                        m2
                    `}
                    dormitorios={`
                        ${houseData.mainFeatures.cantidadDormitorios}
                        dorm.
                    `}
                    banos={`
                        ${houseData.mainFeatures.cantidadBanos}
                        baño(s)
                    `}
                    cocheras={`
                        ${houseData.mainFeatures.cantidadCocheras}
                        coch.
                    `}
                    titulo={houseData.dataBasic.titulo}
                    descripcion={houseData.additionalInformation.descripcion}
                    inmobiliaria={inmobiliaria}
                />
                
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
                <div onClick={() => console.log(houseData)}>Mostrar</div>
            </div>
        </section>
    );
}
export default VistaPrevia;


/*

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


*/