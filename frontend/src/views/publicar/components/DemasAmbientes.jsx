import { useState } from "react";
import { Input } from "../../../components";
import { useDispatch } from 'react-redux';
import { saveDataAction } from '../../../redux/estateDucks';
import { otherEnvironments, getOtherEnvironments } from "../js/DemasAmbientes";
import { otherEnvironments as otherEnvironmentsData } from "../js/Fields";
import '../css/DemasAmbientes.css';

const DemasAmbientes = ({ estate }) => {

    const [data, setData] = useState(otherEnvironmentsData);
    const dispatch = useDispatch();
    const fields = getOtherEnvironments(estate);

    const handleChange = e => {
        let sendData = data;
        let value = data[e.target.name];

        setData({ ...data, [e.target.name]: !value });
        sendData[e.target.name] = !value;

        dispatch(saveDataAction('SAVE_OTHER_ENVIRONMENTS', sendData));
    };

    return (
        <section className="demas-ambientes">
            <h2>Demas ambientes</h2>

            {
                otherEnvironments.map((field) => 
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

export default DemasAmbientes;