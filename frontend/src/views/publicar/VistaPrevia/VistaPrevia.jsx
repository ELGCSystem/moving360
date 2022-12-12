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
                        ${houseData.dataBasic.currency}
                        ${houseData.dataBasic.price}
                    `}
                    expensas=''
                    ubicacion={houseData.location.locality}
                    ciudad={houseData.location.state}
                    tipoPublicacion='98,2% coincidencia'
                    superficieTotal={`
                        ${houseData.surface.total}
                        m2
                    `}
                    superficieCubierta={`
                        ${houseData.surface.covered}
                        m2
                    `}
                    dormitorios={`
                        ${houseData.mainFeatures.bedroomsQuantity}
                        dorm.
                    `}
                    banos={`
                        ${houseData.mainFeatures.bathroomsQuantity}
                        baño(s)
                    `}
                    cocheras={`
                        ${houseData.mainFeatures.garagesQuantity}
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
                
                <button className="button button--blue">
                    <FaUpload /> Publicar
                </button>
            </div>
        </section>
    );
}
export default VistaPrevia;


/*


<Button 
                    to="/"
                    type="blue"
                >
                    <FaUpload /> Publicar
                </Button>

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