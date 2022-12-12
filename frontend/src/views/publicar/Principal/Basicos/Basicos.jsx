import { useState, useContext } from 'react';
import { Select, Input } from '../../../../components';
import { Store } from '../../../../Store.js';
import { estadoPropiedades } from './Basicos.js';
import './Basicos.css';

const Basicos = ({ tipoUnidad, operaciones }) => {

    const [data, setData] = useState({
        unit: '',
        operation: '',
        price: null,
        dontShowPrice: false,
        currency: '',
        state: '',
        suitableCredit: false,
        acceptsExchange: false,
        suitableProfesional: false,
        propertyOccupied: false,
        suitablePets: false,
        title: '',
        commission: null
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

        ctxDispatch({ type: 'SAVE_DATA_BASIC', payload: sendData });
        localStorage.setItem('dataBasic', JSON.stringify(sendData));
        
    };

    return (
        <section className='datos-basicos'>
            <h2>Datos básicos</h2>

            <Select displayName="Tipo de Unidad *" name="unit" onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    tipoUnidad.map((unidad) => (
                        <option key={unidad.id}>
                            {unidad.title}
                        </option>
                    ))
                }
            </Select>

            <Select displayName="Tipo de Operación *" name="operation" onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    operaciones.map((operacion) => (
                        <option key={operacion.id}>
                            {operacion.title}
                        </option>
                    ))
                }
            </Select>
            
            <Input
                displayName="Precio *"
                name="price"
                type="number"
                onChange={handleChange}
            />

            <Input
                displayName="USD"
                name="currency"
                type="radio"
                value="USD"
                onChange={handleChange}
            />

            <Input
                displayName="$"
                name="currency"
                type="radio"
                value="$"
                onChange={handleChange}
            />

            <Select displayName="Estado *" name="state" onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    estadoPropiedades.map((estado) => (
                        <option key={estado.id}>
                            {estado.title}
                        </option>
                    ))
                }
            </Select>

            <Input
                displayName="No publicar"
                name="dontShowPrice"
                type="checkbox"
                className="no-publicar"
                onChange={handleChange}
            />

            <Input
                displayName="Apto crédito"
                name="suitableCredit"
                type="checkbox"
                className="apto-credito"
                onChange={handleChange}
            />

            <Input
                displayName="Acepta Permuta"
                name="acceptsExchange"
                type="checkbox"
                className="acepta-permuta"
                onChange={handleChange}
            />
            
            <Input
                displayName="Apto profesional"
                name="suitableProfesional"
                type="checkbox"
                className="apto-profesional"
                onChange={handleChange}
            />

            <Input
                displayName="Propiedad ocupada"
                name="propertyOccupied"
                type="checkbox"
                className="propiedad-ocupada"
                onChange={handleChange}
            />

            <Input
                displayName="Apto mascotas"
                name="suitablePets"
                type="checkbox"
                className="apto-mascotas"
                onChange={handleChange}
            /> 

            <Input
                displayName="Título del aviso *"
                name="title"
                type="text"
                className="titulo-aviso"
                onChange={handleChange}
            />

            <p>Máximo 100 caracteres. Ej: Vendo Depto. Excelente estado.</p>
            
            <h3>Compartir comisión</h3>

            <Input
                displayName="Compartir 50%"
                name="commission"
                type="radio"
                value="50"
                className="comision"
                onChange={handleChange}
            />

            <Input
                displayName="Compartir 30%"
                name="commission"
                type="radio"
                value="30"
                className="comision"
                onChange={handleChange}
            />

            <Input
                displayName="No compartir"
                name="commission"
                type="radio"
                value="0"
                className="comision"
                onChange={handleChange}
            />

        </section>
    )
};

export default Basicos;