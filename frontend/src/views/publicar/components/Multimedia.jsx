import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../../components';
import { useDispatch } from 'react-redux';
import { saveDataAction } from '../../../redux/estateDucks';
import { multimedia } from '../js/Fields';
import '../css/Multimedia.css';

const Multimedia = () => {
    
    const [data, setData] = useState(multimedia);
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(saveDataAction('SAVE_MULTIMEDIA', data));
    }

    return (
        <section className='multimedia'>
            <h2>Multimedia</h2>

            <article className='carga-imagen'>
                <h3>Carga de imagen</h3>
                <p>
                    La foto de usted vaya a tomar deberá ser en formato 360°, de lo contrario su publicación será negada.
                </p>
                <h4>Foto de portada</h4>
                <Input
                    displayName={<FaCamera />}
                    name="foto-principal"
                    type="file"
                />
                <p>
                    Las imágenes no podrán incluir datos de contacto como teléfono, dirección de correo o páginas web. Ver <Link to="/">Términos y condiciones.</Link>
                </p>
            </article>

            <article className='carga-recorrido-360'>
                <h3>Carga de Recorrido 360° (ya editado)</h3>
                <p>
                    Si usted posee archivos en formato 360° ya producidos y editados, puede subirlos.
                </p>
                <h4 className='carga-recorrido-360__subtitle'>Fotos Recorrido 360°</h4>
                <Input
                    displayName={<FaCamera />}
                    name="recorrido"
                    type="file"
                />
            </article>

            <article className='carga-material-360'>
                <h3>Carga de material 360° (sin editar)</h3>
                <p>
                    Si usted posee archivos en formato 360° puede subirlas para realizar su posterior edicion. De lo contrario, deberá solicitar un turno para la producción y para posteriormente su respectiva edición.
                </p>
                <h4 className='carga-material-360__subtitle'>Fotos 360°</h4>
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
                <h4 className='carga-material-360__turno'>En caso de no tener fotos 360°</h4>
                <Button to="/" type="blue">Solicitar Turno</Button>
                <div onClick={handleChange}>Enviar</div>
            </article>
        </section>
    )
};

export default Multimedia;