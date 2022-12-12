import { useState, useContext } from 'react';
import { Select, Input } from '../../../../components';
import { Store } from '../../../../Store.js';
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
    slope
} from './CaracteristicasGenerales.js';
import './CaracteristicasGenerales.css'; 

const CaracteristicasGenerales = () => {

    const [data, setData] = useState({
        frontSize: '',
        backSize: '',
        insideFlooring: '',
        woodFlooring: '',
        outsideFlooring: '',
        outsideWalls: '',
        ceiling: '',
        estateState: '',
        orientation: '',
        view: '',
        coast: '',
        slope: ''
    });

    const { dispatch: ctxDispatch } = useContext(Store);

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

            <h3>Terreno</h3>

            <Input
                displayName="Medidas frente (m2)"
                name="frontSize"
                type="number"
                onChange={handleChange}
            />

            <Input
                displayName="Medidas fondo (m2)"
                name="backSize"
                type="number"
                onChange={handleChange}
            />

            <h3>Pisos, paredes y techo</h3>

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
            
            <button onClick={() => console.log(data)}>Mostrar</button>

        </section>
    )
};

export default CaracteristicasGenerales;