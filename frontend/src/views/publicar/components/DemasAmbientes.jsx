import { useState, useContext } from "react";
import { Input } from "../../../components";
import { Store } from '../../../Store.js';
import { otherEnvironments, getOtherEnvironments } from "../js/DemasAmbientes";
import { otherEnvironments as otherEnvironmentsData } from "../js/Fields";
import '../css/DemasAmbientes.css';

const DemasAmbientes = ({ estate }) => {

    const [data, setData] = useState(otherEnvironmentsData);
    const { dispatch: ctxDispatch } = useContext(Store);
    const fields = getOtherEnvironments(estate);

    const handleChange = e => {
        let sendData = data;
        let value = data[e.target.name];

        setData({ ...data, [e.target.name]: !value });
        sendData[e.target.name] = !value;

        ctxDispatch({ type: 'SAVE_OTHER_ENVIRONMENTS', payload: sendData });
        localStorage.setItem('otherEnvironments', JSON.stringify(sendData));
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