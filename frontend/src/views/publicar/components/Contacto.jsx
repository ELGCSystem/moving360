import { useState } from 'react';
import { Input } from '../../../components/index.js';
import { useDispatch } from 'react-redux';
import { saveDataAction } from '../../../redux/estateDucks';
import { contactOwner } from '../js/Fields.js';
import '../css/Contacto.css'

const Contacto = () => {

    const [data, setData] = useState(contactOwner);
    const dispatch = useDispatch();

    const handleChange = e => {
        let sendData = data;

        setData({ ...data, [e.target.name]: e.target.value });
        sendData[e.target.name] = e.target.value;

        dispatch(saveDataAction('SAVE_CONTACT_OWNER', sendData));
    };

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
    );
};

export default Contacto;