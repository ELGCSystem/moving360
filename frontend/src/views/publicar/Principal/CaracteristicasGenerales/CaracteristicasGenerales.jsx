import { useState, useContext } from 'react';
import { Select, Input } from '../../../../components';
import { Store } from '../../../../Store.js';
import {
    pisoInterior,
    pisoMadera,
    pisoExterior,
    paredes,
    techo,
    estadoPropiedad,
    orientacion,
    vista,
    costa,
    pendiente
} from './CaracteristicasGenerales.js';
import './CaracteristicasGenerales.css'; 

const CaracteristicasGenerales = () => {

    const [data, setData] = useState({
        terrenoFrente: '',
        terrenoFondo: '',
        pisoInterior: '',
        pisoMadera: '',
        pisoExterior: '',
        paredes: '',
        techo: '',
        estado: '',
        orientacion: '',
        vista: '',
        costa: '',
        pendiente: ''
    });

    const { dispatch: ctxDispatch } = useContext(Store);

    const handleChange = e => {
        let sendData = data;

        setData({ ...data, [e.target.name]: e.target.value });
        sendData[e.target.name] = e.target.value;

        ctxDispatch({ type: 'SAVE_GENERAL', payload: sendData });
        localStorage.setItem('general', JSON.stringify(sendData));
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
                name="terrenoFrente"
                type="number"
                onChange={handleChange}
            />

            <Input
                displayName="Medidas fondo (m2)"
                name="terrenoFondo"
                type="number"
                onChange={handleChange}
            />

            <h3>Pisos, paredes y techo</h3>

            <Select 
                displayName="Tipo de piso (interior)" 
                name="pisoInterior"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    pisoInterior.map((piso) => (
                        <option key={piso.id}>
                            {piso.title}
                        </option>
                    ))
                }
            </Select>

            <Select 
                displayName="Tipo de piso de madera" 
                name="pisoMadera"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    pisoMadera.map((piso) => (
                        <option key={piso.id}>
                            {piso.title}
                        </option>
                    ))
                }
            </Select>

            <Select 
                displayName="Tipo de piso (exterior)"
                name="pisoExterior"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    pisoExterior.map((piso) => (
                        <option key={piso.id}>
                            {piso.title}
                        </option>
                    ))
                }
            </Select>

            <Select 
                displayName="Paredes (exteriores)" 
                name="paredes"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    paredes.map((pared) => (
                        <option key={pared.id}>
                            {pared.title}
                        </option>
                    ))
                }
            </Select>

            <Select 
                displayName="Tipo de techo" 
                name="techo"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    techo.map((item) => (
                        <option key={item.id}>
                            {item.title}
                        </option>
                    ))
                }
            </Select>

            <h3>Adicionales</h3>

            <Select 
                displayName="Estado de la propiedad"
                name="estado"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    estadoPropiedad.map((estado) => (
                        <option key={estado.id}>
                            {estado.title}
                        </option>
                    ))
                }
            </Select>

            <Select 
                displayName="Orientación" 
                name="orientacion"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    orientacion.map((item) => (
                        <option key={item.id}>
                            {item.title}
                        </option>
                    ))
                }
            </Select>

            <Select 
                displayName="Tipo de vista" 
                name="vista"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    vista.map((item) => (
                        <option key={item.id}>
                            {item.title}
                        </option>
                    ))
                }
            </Select>

            <Select 
                displayName="Tipo de costa" 
                name="costa"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    costa.map((item) => (
                        <option key={item.id}>
                            {item.title}
                        </option>
                    ))
                }
            </Select>

            <Select 
                displayName="Tipo de pendiente" 
                name="pendiente"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    pendiente.map((item) => (
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