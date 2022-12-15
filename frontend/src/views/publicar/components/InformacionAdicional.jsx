import { useState, useContext } from "react"; 
import { Textarea } from "../../../components";
import { Store } from '../../../Store.js';

const InformacionAdicional = () => {

    const [data, setData] = useState({
        description: '',
        notes: ''
    });

    const { dispatch: ctxDispatch } = useContext(Store);

    const handleChange = e => {
        let sendData = data;

        setData({ ...data, [e.target.name]: e.target.value });
        sendData[e.target.name] = e.target.value;

        ctxDispatch({ type: 'SAVE_ADDITIONAL_INFORMATION', payload: sendData });
        localStorage.setItem('additionalInformation', JSON.stringify(sendData));
    }

    return (
        <section className="informacion-adicional">
            <h2>Información adicional</h2>
            <Textarea
                displayName="Descripción"
                name="description"
                onChange={handleChange}
            />
            <Textarea
                displayName="Notas (no se publican en internet)"
                name="notes"
                onChange={handleChange}
            />

            <button onClick={() => console.log(data)}>Mostrar</button>
        </section>
    )
}

export default InformacionAdicional;