import { useState, useContext } from "react";
import { Input } from "../../../components";
import { Store } from '../../../Store.js';
import { otherEnvironments } from "../js/DemasAmbientes";
import '../css/DemasAmbientes.css';

const DemasAmbientes = () => {

    const [data, setData] = useState({
        loft: false,
        beforeKitchen: false,
        beforeLiving: false,
        rooftop: false,
        balcony: false,
        balconyTerraced: false,
        bar: false,
        trunk: false,
        library: false,
        cellar: false,
        toolRoom: false,
        ironingRoom: false,
        betweenFloor: false,
        studio: false,
        familyRoom: false,
        gallery: false,
        shed: false,
        garage: false,
        garden: false,
        freeBackground: false,
        local: false,
        office: false,
        palier: false,
        grill: false,
        livingRoom: false,
        basement: false,
        suiteRoom: false,
        lobby: false,
        dressingRoom: false,
        lockerRoom: false,
    });

    const { dispatch: ctxDispatch } = useContext(Store);

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
                otherEnvironments.map((field) => (
                    <Input
                        key={field.id}
                        displayName={field.displayName}
                        name={field.name}
                        type="checkbox"
                        onChange={handleChange}
                    />
                ))
            }

            <button onClick={() => console.log(data)}></button>

        </section>
    )
};

export default DemasAmbientes;