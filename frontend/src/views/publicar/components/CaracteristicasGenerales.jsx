import { useState, useContext } from 'react';
import { Select, Input } from '../../../components';
import { Store } from '../../../Store.js';
import { generalFeatures } from '../js/Fields';
import {
    insideFlooring,
    woodFlooring,
    outsideFlooring,
    outsideWalls,
    ceiling,
    estateState,
    orientation,
    view,
    coast,
    slope,
    industrialRoofType,
    gateType,
    heatingType,
    measures,
    getGeneralFeatures
} from '../js/CaracteristicasGenerales.js';
import '../css/CaracteristicasGenerales.css'; 

const CaracteristicasGenerales = ({ estate }) => {

    const [data, setData] = useState(generalFeatures);
    const { dispatch: ctxDispatch } = useContext(Store);
    const fields = getGeneralFeatures(estate);

    const handleChange = e => {
        let sendData = data;

        setData({ ...data, [e.target.name]: e.target.value });
        sendData[e.target.name] = e.target.value;

        ctxDispatch({ type: 'SAVE_GENERAL_FEATURES', payload: sendData });
        localStorage.setItem('generalFeatures', JSON.stringify(sendData));
    }

    return (
        <section className='caracteristicas-generales'>
            <h2>Características generales</h2>
            <p>
                Estos campos opcionales mejoran el posicionamiento de tu aviso.
            </p>

            {
                fields.includes("terrain") ? (
                    <>
                        <h3>Terreno</h3>

                        <Input
                            displayName="Medidas frente (m)"
                            name="frontSize"
                            type="number"
                            onChange={handleChange}
                        />
                        <Input
                            displayName="Medidas fondo (m)"
                            name="backSize"
                            type="number"
                            onChange={handleChange}
                        />
                    </>
                ) : null
            }

            {
                fields.includes("measures") ? (
                    <>
                        <h3>Medidas</h3>

                        {
                            measures.map((field) => (
                                <Input
                                    displayName={field.displayName}
                                    name={field.name}
                                    type="number"
                                    onChange={handleChange}
                                />
                            ))
                        }
                    
                    </>
                ) : null
            }

            {
                fields.includes("fullLoadFactor") ? (
                    <Input
                    displayName="F.O.T."
                    name="fullLoadFactor"
                    type="number"
                    onChange={handleChange}
                    />
                    ) : null
            }

            {
                fields.includes("landCoverFactor") ? (
                    <Input
                    displayName="F.O.S."
                    name="landCoverFactor"
                    type="number"
                    onChange={handleChange}
                    />
                    ) : null
            }

            {
                fields.includes("linealMeasures") ? (
                    <>
                        <Input
                            displayName="Medida lineal derecha"
                            name="linealRightMeasure"
                            type="text"
                            onChange={handleChange}
                        />
                        <Input
                            displayName="Medida lineal izquierda"
                            name="linealLeftMeasure"
                            type="text"
                            onChange={handleChange}
                        />
                    </>
                ) : null
            }

            {
                fields.includes("zoning") ? (
                    <Input
                        displayName="Zonificación"
                        name="zoning"
                        type="text"
                        onChange={handleChange}
                    />
                ) : null
            }

            {
                fields.includes("flooring") ? (
                    <>
                        <Select 
                            displayName="Tipo de piso (interior)" 
                            name="insideFlooring"
                            onChange={handleChange}>
                            <option value="">Seleccione una opción...</option>
                            {
                                insideFlooring.map((item) => (
                                    <option key={item.id}>
                                        {item.title}
                                    </option>
                                ))
                            }
                        </Select>

                        <Select 
                            displayName="Tipo de piso de madera" 
                            name="woodFlooring"
                            onChange={handleChange}>
                            <option value="">Seleccione una opción...</option>
                            {
                                woodFlooring.map((item) => (
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
                fields.includes("wallsCeiling") ? (
                    <>

                        <Select 
                            displayName="Tipo de piso (exterior)"
                            name="outsideFlooring"
                            onChange={handleChange}>
                            <option value="">Seleccione una opción...</option>
                            {
                                outsideFlooring.map((item) => (
                                    <option key={item.id}>
                                        {item.title}
                                    </option>
                                ))
                            }
                        </Select>

                        <Select 
                            displayName="Paredes (exteriores)" 
                            name="outsideWalls"
                            onChange={handleChange}>
                            <option value="">Seleccione una opción...</option>
                            {
                                outsideWalls.map((item) => (
                                    <option key={item.id}>
                                        {item.title}
                                    </option>
                                ))
                            }
                        </Select>

                        <Select 
                            displayName="Tipo de techo" 
                            name="ceiling"
                            onChange={handleChange}>
                            <option value="">Seleccione una opción...</option>
                            {
                                ceiling.map((item) => (
                                    <option key={item.id}>
                                        {item.title}
                                    </option>
                                ))
                            }
                        </Select>
                    </>
                ) : null
            }

            <h3>Adicionales</h3>

            <Select 
                displayName="Estado de la propiedad"
                name="estateState"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    estateState.map((item) => (
                        <option key={item.id}>
                            {item.title}
                        </option>
                    ))
                }
            </Select>

            {
                fields.includes("orientation") ? (
                    <Select 
                        displayName="Orientación" 
                        name="orientation"
                        onChange={handleChange}>
                        <option value="">Seleccione una opción...</option>
                        {
                            orientation.map((item) => (
                                <option key={item.id}>
                                    {item.title}
                                </option>
                            ))
                        }
                    </Select>
                ) : null
            }

            {
                fields.includes("cornerDistance") ? (
                    <>
                        <Input
                            displayName="Metros de la esquina"
                            name="cornerDistance"
                            type="number"
                            onChange={handleChange}
                        />
                    </>
                ) : null
            }

            {
                fields.includes("monthlyIncome") ? (
                    <Input
                        displayName="Rentabilidad mensual"
                        name="monthlyIncome"
                        type="text"
                        onChange={handleChange}
                    />
                ) : null
            }

            {
                fields.includes("yearlyIncome") ? (
                    <Input
                        displayName="Rentabilidad anual"
                        name="yearlyIncome"
                        type="text"
                        onChange={handleChange}
                    />
                ) : null
            }

            {
                fields.includes("cutlery") ? (
                    <Input
                        displayName="Cantidad de cubiertos"
                        name="cutleryQuantity"
                        type="number"
                        onChange={handleChange}
                    />
                ) : null
            }

            {
                fields.includes("roofGateHeating") ? (
                    <>
                        <Select 
                            displayName="Tipo de techo industrial" 
                            name="industrialRoofType"
                            onChange={handleChange}>
                            <option value="">Seleccione una opción...</option>
                            {
                                industrialRoofType.map((item) => (
                                    <option key={item.id}>
                                        {item.title}
                                    </option>
                                ))
                            }
                        </Select>

                        <Select 
                            displayName="Tipo de portón" 
                            name="gateType"
                            onChange={handleChange}>
                            <option value="">Seleccione una opción...</option>
                            {
                                gateType.map((item) => (
                                    <option key={item.id}>
                                        {item.title}
                                    </option>
                                ))
                            }
                        </Select>

                        <Select 
                            displayName="Tipo de calefacción" 
                            name="heatingType"
                            onChange={handleChange}>
                            <option value="">Seleccione una opción...</option>
                            {
                                heatingType.map((item) => (
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
                fields.includes("viewCoastSlope") ? (
                    <>
                        <Select 
                            displayName="Tipo de vista" 
                            name="view"
                            onChange={handleChange}>
                            <option value="">Seleccione una opción...</option>
                            {
                                view.map((item) => (
                                    <option key={item.id}>
                                        {item.title}
                                    </option>
                                ))
                            }
                        </Select>

                        <Select 
                            displayName="Tipo de costa" 
                            name="coast"
                            onChange={handleChange}>
                            <option value="">Seleccione una opción...</option>
                            {
                                coast.map((item) => (
                                    <option key={item.id}>
                                        {item.title}
                                    </option>
                                ))
                            }
                        </Select>

                        <Select 
                            displayName="Tipo de pendiente" 
                            name="slope"
                            onChange={handleChange}>
                            <option value="">Seleccione una opción...</option>
                            {
                                slope.map((item) => (
                                    <option key={item.id}>
                                        {item.title}
                                    </option>
                                ))
                            }
                        </Select>
                    </>
                ) : null
            }

        </section>
    )
};

export default CaracteristicasGenerales;