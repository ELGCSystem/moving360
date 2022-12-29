import { useState, useContext } from "react";
import { Input } from "../../../../components";
import { Store } from '../../../../Store.js';
import { buildingInstallations } from '../../js/Instalaciones';
import { building } from '../../js/Fields';
import '../../css/Instalaciones.css';

const InstalacionesEdificio = () => {

    const [data, setData] = useState(building.installations);
    const { dispatch: ctxDispatch } = useContext(Store);

    const handleChange = e => {
        let sendData = data;
        let value = data[e.target.name];

        setData({ ...data, [e.target.name]: !value });
        sendData[e.target.name] = !value;

        ctxDispatch({ type: 'SAVE_BUILDING_INSTALLATIONS', payload: sendData });
        localStorage.setItem('buildingInstallations', JSON.stringify(sendData));
    };

    return (
        <section className="instalaciones">
            <h2>Instalaciones del edificio</h2>

            {
                buildingInstallations.map((field) => (
                    <Input
                        key={field.id}
                        displayName={field.displayName}
                        name={field.name}
                        type="checkbox"
                        onChange={handleChange}
                    />
                ))
            }

            <button onClick={() => console.log(data)}>Mostrar</button>
        </section>
    )
};

export default InstalacionesEdificio;