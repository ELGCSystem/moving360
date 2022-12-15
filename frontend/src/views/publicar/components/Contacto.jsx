import { useState, useContext } from 'react';
import { Button, Input, Select } from '../../../components/index.js';
import { Store } from '../../../Store.js';
import '../css/Contacto.css'

const Contacto = () => {

    const [data, setData] = useState({
        email: '',
        telephone: '',
        mobile: '',
        alternativeTelephone: '',
        whatsApp: ''
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
                name="telephone"
                type="number"
                onChange={handleChange}
            />
            <Input
                displayName="Celular: *"
                name="mobile"
                type="number"
                onChange={handleChange}
            />
            <Input
                displayName="Teléfono alternativo:"
                name="alternativeTelephone"
                type="number"
                onChange={handleChange}
            />
            <Input
                displayName="WhatsApp"
                name="whatsApp"
                type="number"
                className="whatsapp-num"
                onChange={handleChange}
            />
        </section>
    )
};

export default Contacto;