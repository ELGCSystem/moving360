import { useState } from "react";
import { Input } from "../../../components";
import { useDispatch } from 'react-redux';
import { saveDataAction } from '../../../redux/estateDucks';
import { services, getServices } from "../js/Servicios";
import { services as servicesData } from "../js/Fields";
import '../css/Servicios.css';

const Servicios = ({ estate }) => {

    const [data, setData] = useState(servicesData);
    const dispatch = useDispatch();
    const fields = getServices(estate);

    const handleChange = e => {
        let sendData = data;
        let value = data[e.target.name];

        setData({ ...data, [e.target.name]: !value });
        sendData[e.target.name] = !value;

        dispatch(saveDataAction('SAVE_SERVICES', sendData));
    };

    return (
        <section className="servicios">
            <h2>Servicios</h2>

            {
                services.map((field) => 
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

export default Servicios;