import { useState, useContext } from "react";
import { Input } from "../../../components";
import { Store } from '../../../Store.js';
import { installations, getInstallations} from '../js/Instalaciones';
import { installations as installationsData } from "../js/Fields";
import '../css/Instalaciones.css';

const Instalaciones = ({ estate }) => {

    const [data, setData] = useState(installationsData);
    const { dispatch: ctxDispatch } = useContext(Store);
    const fields = getInstallations(estate);

    const handleChange = e => {
        let sendData = data;
        let value = data[e.target.name];

        setData({ ...data, [e.target.name]: !value });
        sendData[e.target.name] = !value;

        ctxDispatch({ type: 'SAVE_INSTALLATIONS', payload: sendData });
        localStorage.setItem('installations', JSON.stringify(sendData));
    };

    return (
        <section className="instalaciones">
            <h2>Instalaciones</h2>

            {
                installations.map((field) => 
                    fields.includes(field.name) ? (
                        <Input
                            key={field.id}
                            displayName={field.displayName}
                            name={field.name}
                            type="checkbox"
                            onChange={handleChange}
                        />
                    ) : null
                )
            }
        </section>
    )
};

export default Instalaciones;