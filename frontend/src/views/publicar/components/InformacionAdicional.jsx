import { useState } from "react"; 
import { Textarea } from "../../../components";
import { useDispatch } from 'react-redux';
import { saveDataAction } from '../../../redux/estateDucks';
import { addiotinalInformation } from "../js/Fields";

const InformacionAdicional = () => {

    const [data, setData] = useState(addiotinalInformation);
    const dispatch = useDispatch();

    const handleChange = e => {
        let sendData = data;

        setData({ ...data, [e.target.name]: e.target.value });
        sendData[e.target.name] = e.target.value;

        dispatch(saveDataAction('SAVE_ADDITIONAL_INFORMATION', sendData));
    };

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