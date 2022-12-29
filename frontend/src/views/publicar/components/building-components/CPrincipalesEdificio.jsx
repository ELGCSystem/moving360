import { useState, useContext } from 'react';
import { Input, Contador, Select } from '../../../../components';
import { Store } from '../../../../Store.js';
import { buildingType, elevatorType } from '../../js/CaracteristicasPrincipales';
import { building } from '../../js/Fields';
import '../../css/CaracteristicasPrincipales.css';

const CPrincipalesEdificio = () => {

    const [data, setData] = useState(building.mainFeatures);
    const { dispatch: ctxDispatch } = useContext(Store);

    const handleChange = e => {

        let sendData = data;

        if (e.target.type === "checkbox") {
            let value = data[e.target.name];
            setData({ ...data, [e.target.name]: !value });
            sendData[e.target.name] = !value;
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
            sendData[e.target.name] = e.target.value;
        }

        ctxDispatch({ type: 'SAVE_BUILDING_MAIN_FEATURES', payload: sendData });
        localStorage.setItem('buildingMainFeatures', JSON.stringify(sendData));
        
    };

    const counterChange = (count, name) => {

        let sendData = data;

        setData({ ...data, [name]: count });
        sendData[name] = count;

        ctxDispatch({ type: 'SAVE_BUILDING_MAIN_FEATURES', payload: sendData });
        localStorage.setItem('buildingMainFeatures', JSON.stringify(sendData));
    }

    return (
        <section className='caracteristicas-principales'>
            <h2>Características principales del edificio</h2>
            <p>Contanos un poco más sobre tu propiedad.</p>

            <Contador
                displayName="Cantidad de pisos *"
                name="floorsQuantity"
                max="20"
                min="1"
                onChange={counterChange}
            />

            <Contador
                displayName="Dptos. por piso *"
                name="flatsPerFloor"
                max="20"
                min="1"
                onChange={counterChange}
            />

            <Contador
                    displayName="Cantidad de cocheras *"
                    name="garagesQuantity"
                    max="6"
                    min="1"
                    onChange={counterChange}
            />

            <Select
                displayName="Tipo de edificio"
                name="buildingType"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    buildingType.map((item) => (
                        <option key={item.id}>
                            {item.title}
                        </option>
                    )) 
                }
            </Select>

            <div className="ascensor">
                <Input
                    displayName="Ascensor"
                    name="hasElevator"
                    type="checkbox"
                    onChange={handleChange}
                />

                <Select
                    displayName="Tipo de ascensor"
                    name="elevatorType"
                    onChange={handleChange}>
                    <option value="">Seleccione una opción...</option>
                    {
                        elevatorType.map((item) => (
                            <option key={item.id}>
                                {item.title}
                            </option>
                        )) 
                    }
                </Select>
            </div>
            
            <h3 className='antiguedad__subtitle'>Antigüedad</h3>

            <Input
                displayName="A estrenar"
                name="antiquity"
                type="radio"
                value="A estrenar"
                onChange={handleChange}
            />     

            <Input
                displayName="Años de antigüedad"
                name="antiquity"
                type="radio"
                value="Años de antigüedad"
                onChange={handleChange}
            />

            <Input
                displayName="Años"
                name="antiquityYears"
                type="number"
                onChange={handleChange}
            />
            
        </section>
    )
};

export default CPrincipalesEdificio;