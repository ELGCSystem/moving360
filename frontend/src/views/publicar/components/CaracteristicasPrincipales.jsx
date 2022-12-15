import { useState, useContext } from 'react';
import { Input, Contador, Select } from '../../../components';
import { Store } from '../../../Store.js';
import { capitalize } from '../../../utils/utils';
import {
    mainEnvironments,
    features,
    garagesType,
    garagesCover 
} from '../js/CaracteristicasPrincipales';
import '../css/CaracteristicasPrincipales.css';

const CaracteristicasPrincipales = () => {

    const [data, setData] = useState({
        hasBedrooms: false,
        bedroomsQuantity: 1,
        bedroomsSize: '',
        hasBathrooms: false,
        bathroomsQuantity: 1,
        bathroomsSize: '',
        hasToilettes: false,
        toilettesQuantity: 1,
        toilettesSize: '',
        hasSuiteBathrooms: false,
        suiteBathroomsQuantity: 1,
        suiteBathroomsSize: '',
        environmentsQuantity: 1,
        hasKitchen: false,
        kitchenSize: '',
        hasIntegratedKitchen: false,
        integratedKitchenSize: '',
        hasDinningRoom: false,
        dinningRoomSize: '',
        hasDailyDinningRoom: false,
        dailyDinningRoomSize: '',
        hasLivingRoom: false,
        livingRoomSize: '',
        hasLaundryRoom: false,
        laundryRoomSize: '',
        hasYard: false,
        yardSize: '',
        hasHall: false,
        hallSize: '',
        hasDesktop: false,
        desktopSize: '',
        hasPlayroom: false,
        playroomSize: '',
        hasTerrace: false,
        terraceSize: '',
        hasBarbecue: false,
        barbecueSize: '',
        hasPool: false,
        poolSize: '',
        hasServiceDependency: false,
        serviceDependencySize: '',
        hasFloors: false,
        floorsQuantity: 1,
        hasGarages: false,
        garagesQuantity: 1,
        garagesType: '',
        garagesCover: '',
        antiquity: '',
        antiquityYears: null
    });

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

        ctxDispatch({ type: 'SAVE_MAIN_FEATURES', payload: sendData });
        localStorage.setItem('mainFeatures', JSON.stringify(sendData));
        
    };

    const counterChange = (count, name) => {

        let sendData = data;

        setData({ ...data, [name]: count });
        sendData[name] = count;

        ctxDispatch({ type: 'SAVE_MAIN_FEATURES', payload: sendData });
        localStorage.setItem('mainFeatures', JSON.stringify(sendData));
    }

    return (
        <section className='caracteristicas-principales'>
            <h2>Características principales</h2>
            <p>Contanos un poco más sobre tu propiedad.</p>

            {
                mainEnvironments.map((field) => (
                    <div className={field.className} key={field.id}>
                        <Input
                            displayName={field.displayName}
                            name={`has${capitalize(field.name)}`}
                            type="checkbox"
                            onChange={handleChange}
                        />
                        <Contador
                            displayName={`Cantidad de ${field.displayName}`}
                            name={`${field.name}Quantity`}
                            max={field.max}
                            min="1"
                            onChange={counterChange}
                        />
                        <Input
                            displayName={`Medidas de ${field.displayName}`}
                            name={`${field.name}Size`}
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                ))
            }

            <Contador
                displayName="Cantidad de ambientes *"
                name="environmentsQuantity"
                max="20"
                min="1"
                onChange={counterChange}
            />

            {
                features.map((field) => (
                    <div className={field.className} key={field.id}>
                        <Input
                            displayName={field.displayName}
                            name={`has${capitalize(field.name)}`}
                            type="checkbox"
                            onChange={handleChange}
                        />
                        <Input
                            displayName={`Medidas de ${field.displayName}`}
                            name={`${field.name}Size`}
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                ))
            }

            <div className='plantas'>
                <Input
                    displayName="Plantas"
                    name="hasFloors"
                    type="checkbox"
                    onChange={handleChange}
                />
                <Contador
                    displayName="Cantidad de plantas *"
                    name="floorsQuantity"
                    max="5"
                    min="1"
                    onChange={counterChange}
                />
            </div>

            <h3>Cocheras</h3>

            <div className='cocheras'>
                <Input
                    displayName="Cocheras"
                    name="hasGarages"
                    type="checkbox"
                    onChange={handleChange}
                />
                <Contador
                    displayName="Cantidad de cocheras *"
                    name="garagesQuantity"
                    max="6"
                    min="1"
                    onChange={counterChange}
                />
            </div>

            <Select 
                displayName="Tipo de cochera" 
                name="garagesType" 
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    garagesType.map((type) => (
                        <option key={type.id}>
                            {type.title}
                        </option>
                    ))
                }
            </Select>

            <Select
                displayName="Cobertura de cochera" 
                name="garagesCover" 
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    garagesCover.map((cover) => (
                        <option key={cover.id}>
                            {cover.title}
                        </option>
                    ))
                }
            </Select>

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

            <button onClick={() => console.log(data.dormitorios)}>Mostrar</button>
            
        </section>
    )
};

export default CaracteristicasPrincipales;