import { useState, useContext } from 'react';
import { Input, Contador, Select } from '../../../components';
import { Store } from '../../../Store.js';
import { capitalize } from '../../../utils/utils';
import { mainFeatures } from '../js/Fields';
import {
    getMainFeatures,
    mainEnvironments,
    features,
    setup,
    balconyType,
    garagesType,
    garagesCover,
    carType,
    accessType
} from '../js/CaracteristicasPrincipales';
import '../css/CaracteristicasPrincipales.css';

const CaracteristicasPrincipales = ({ estate }) => {

    const [data, setData] = useState(mainFeatures);
    const { dispatch: ctxDispatch } = useContext(Store);
    const fields = getMainFeatures(estate);


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
                mainEnvironments.map((field) =>

                    fields.includes(field.name) ? (
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
                    ) : null
                )
            }

            {
                fields.includes("environmentsQuantity") ? (
                    <Contador
                        displayName="Cantidad de ambientes *"
                        name="environmentsQuantity"
                        max="20"
                        min="1"
                        onChange={counterChange}
                    />
                ) : null
            }

            {
                fields.includes("setup") ? (
                    <Select 
                        displayName="Disposición" 
                        name="setup" 
                        onChange={handleChange}>
                        <option value="">Seleccione una opción...</option>
                        {
                            setup.map((item) => (
                                <option key={item.id}>
                                    {item.title}
                                </option>
                            ))
                        }
                    </Select>
                ) : null
            }

            {
                features.map((field) => 
                
                    fields.includes(field.name) ? (
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
                    ) : null
                )
            }

            {
                fields.includes("hotelExtras") ? (
                    <>
                        <Input
                            displayName="Cantidad de habitaciones"
                            name="roomsQuantity"
                            type="number"
                            onChange={handleChange}
                        />
                        <Contador
                            displayName="Cantidad de estrellas"
                            name="starsQuantity"
                            max="5"
                            min="1"
                            onChange={counterChange}
                        />
                        <Input
                            displayName="Cantidad de plazas"
                            name="placesQuantity"
                            type="number"
                            onChange={handleChange}
                        />
                        <Contador
                            displayName="Cantidad de pisos"
                            name="floorsQuantity"
                            max="20"
                            min="1"
                            onChange={counterChange}
                        />
                        <Input
                            displayName="Habitaciones por piso"
                            name="roomsPerFloor"
                            type="number"
                            onChange={handleChange}
                        />
                        <Input
                            displayName="Cantidad de personal"
                            name="staffQuantity"
                            type="number"
                            onChange={handleChange}
                        />
                    </>
                ) : null
            }

            {
                fields.includes("columnsSheds") ? (
                    <>
                        <Contador
                            displayName="Cantidad de columnas"
                            name="columnsQuantity"
                            max="20"
                            min="1"
                            onChange={counterChange}
                        />

                        <Contador
                            displayName="Cantidad de naves"
                            name="shedsQuantity"
                            max="10"
                            min="1"
                            onChange={counterChange}
                        />
                    </>
                ) : null
            }

            {
                fields.includes("pavementHectares") ? (
                    <>
                        <Input 
                            displayName="Distancia al pavimento (m)"
                            name="pavementDistance"
                            type="number"
                            onChange={handleChange}
                        />
                        <Input 
                            displayName="Cantidad de hectáreas"
                            name="hectaresQuantity"
                            type="number"
                            onChange={handleChange}
                        />
                    </>
                ) : null
            }

            {
                fields.includes("floors") ? (
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
                ) : null
            }

            {
                fields.includes("balcony") ? (
                    <div className="balcon">
                        <Input
                            displayName="Balcón"
                            name="hasBalcony"
                            type="checkbox"
                            onChange={handleChange}
                        />

                        <Select 
                            displayName="Tipo de Balcón" 
                            name="balconyType" 
                            onChange={handleChange}>
                            <option value="">Seleccione una opción...</option>
                            {
                                balconyType.map((item) => (
                                    <option key={item.id}>
                                        {item.title}
                                    </option>
                                ))
                            }
                        </Select>

                        <Input
                            displayName="Medidas de Balcón"
                            name="balconySize"
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                ) : null
            }

            {
                fields.includes("hasGarages") ? (
                    <>
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
                    </>
                ) : null
            }

            {
                fields.includes("garagesType") ? (
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
                ) : null
            }

            {
                fields.includes("garagesCover") ? (
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
                ) : null
            }

            {
                fields.includes("garagesExtras") ? (
                    <>
                        <Select 
                            displayName="Tipo de coche" 
                            name="carType" 
                            onChange={handleChange}>
                            <option value="">Seleccione una opción...</option>
                            {
                                carType.map((item) => (
                                    <option key={item.id}>
                                        {item.title}
                                    </option>
                                ))
                            }
                        </Select>

                        <Select 
                            displayName="Tipo de acceso" 
                            name="accessType" 
                            onChange={handleChange}>
                            <option value="">Seleccione una opción...</option>
                            {
                                accessType.map((item) => (
                                    <option key={item.id}>
                                        {item.title}
                                    </option>
                                ))
                            }
                        </Select>
                    </>
                ) : null
            }

            {
                fields.includes("size") ? (
                    <>
                        <Input
                            displayName="Largo (m)"
                            name="length"
                            type="number"
                            onChange={handleChange}
                        />

                        <Input
                            displayName="Ancho (m)"
                            name="width"
                            type="number"
                            onChange={handleChange}
                        />

                        <Input
                            displayName="Altura (m)"
                            name="height"
                            type="number"
                            onChange={handleChange}
                        />
                    </>
                ) : null
            }

            {
                fields.includes("antiquity") ? (
                    <>
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
                    </>
                ) : null
            }
            
        </section>
    )
};

export default CaracteristicasPrincipales;