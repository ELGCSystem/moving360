import { useState } from "react";
import { Input } from "../../../components";
import { useDispatch } from 'react-redux';
import { saveDataAction } from '../../../redux/estateDucks';
import { surface } from "../js/Fields";
import '../css/Superficies.css';

const Superficies = ({ estate }) => {

    const [data, setData] = useState(surface);
    const dispatch = useDispatch();

    const handleChange = e => {
        let sendData = data;

        setData({ ...data, [e.target.name]: e.target.value });
        sendData[e.target.name] = e.target.value;

        dispatch(saveDataAction('SAVE_SURFACE', sendData));
    }

    return (
        <section className="superficies">
            <h2>Superficies</h2>

            {
                estate !== "lote-terreno" ? (
                    <>
                        <Input
                            displayName="Superficie cubierta (m2) *"
                            name="covered"
                            type="number"
                            onChange={handleChange}
                        />
                        <Input
                            displayName="Superficie semi cubierta (m2)"
                            name="semiCovered"
                            type="number"
                            onChange={handleChange}
                        />
                        <Input
                            displayName="Superficie descubierta (m2)"
                            name="discovered"
                            type="number"
                            onChange={handleChange}
                        />
                    </>
                ) : null
            }

            <Input
                displayName="Superficie terreno (m2) *"
                name="total"
                type="number"
                onChange={handleChange}
            />
        </section>
    )
};

export default Superficies;