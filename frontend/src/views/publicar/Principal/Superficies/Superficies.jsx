import { useState, useContext } from "react";
import { Input } from "../../../../components";
import { Store } from '../../../../Store.js';
import './Superficies.css';

const Superficies = () => {

    const [data, setData] = useState({
        superficieCubierta: null,
        superficieSemicubierta: null,
        superficieDescubierta: null,
        superficieTerreno: null,
    });

    const { dispatch: ctxDispatch } = useContext(Store);

    const handleChange = e => {
        let sendData = data;

        setData({ ...data, [e.target.name]: e.target.value });
        sendData[e.target.name] = e.target.value;

        ctxDispatch({ type: 'SAVE_SURFACE', payload: sendData });
        localStorage.setItem('surface', JSON.stringify(sendData));
    }

    return (
        <section className="superficies">
            <h2>Superficies</h2>
            <Input
                displayName="Superficie cubierta (m2) *"
                name="superficieCubierta"
                type="number"
                onChange={handleChange}
            />
            <Input
                displayName="Superficie semi cubierta (m2)"
                name="superficieSemicubierta"
                type="number"
                onChange={handleChange}
            />
            <Input
                displayName="Superficie descubierta (m2)"
                name="superficieDescubierta"
                type="number"
                onChange={handleChange}
            />
            <Input
                displayName="Superficie terreno (m2) *"
                name="superficieTerreno"
                type="number"
                onChange={handleChange}
            />
        </section>
    )
};

export default Superficies;