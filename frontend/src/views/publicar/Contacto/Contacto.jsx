import { useState, useContext } from 'react';
import { Button, Input, Select } from '../../../components/index.js';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { Store } from '../../../Store.js';
import './Contacto.css'

const Contacto = () => {

    const [data, setData] = useState({
        email: '',
        telefono: '',
        celular: '',
        telefonoAlternativo: '',
        whatsappCodigo: '+54',
        whatsappNumero: ''
    });

    const { dispatch: ctxDispatch } = useContext(Store);

    const handleChange = e => {
        let sendData = data;

        setData({ ...data, [e.target.name]: e.target.value });
        sendData[e.target.name] = e.target.value;

        ctxDispatch({ type: 'SAVE_CONTACT_OWNER', payload: sendData });
        localStorage.setItem('contactOwner', JSON.stringify(sendData));
    }

    return (
        <>
            <section className="dueno">
                <h2>Datos de contacto del dueño</h2>
                <Input
                    displayName="Email: *"
                    name="email"
                    type="email"
                    onChange={handleChange}
                />
                <Input
                    displayName="Teléfono: *"
                    name="telefono"
                    type="number"
                    onChange={handleChange}
                />
                <Input
                    displayName="Celular: *"
                    name="celular"
                    type="number"
                    onChange={handleChange}
                />
                <Input
                    displayName="Teléfono alternativo:"
                    name="telefonoAlternativo"
                    type="number"
                    onChange={handleChange}
                />
                <Select 
                    displayName="Whatsapp (Cód. país + número): *"
                    name="whatsappCodigo"
                    className="whatsapp"
                    onChange={handleChange}
                >  
                </Select>
                <Input
                    name="whatsappNumero"
                    type="number"
                    className="whatsapp-num"
                    onChange={handleChange}
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
                    onClick={() => {
                        window.scroll(0, 0);
                        window.location.href = "/publicar/vista-previa";
                    }}
                    type="blue"
                >
                    Continuar <FaAngleRight />
                </Button>
            </div>
        </>
    )
};

export default Contacto;