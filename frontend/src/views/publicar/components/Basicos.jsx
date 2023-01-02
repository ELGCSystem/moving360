import { useState, useContext } from 'react';
import { Select, Input } from '../../../components';
import { Store } from '../../../Store.js';
import { propertyState } from '../js/Basicos.js';
import { expenses } from '../js/Basicos.js';
import { dataBasic } from '../js/Fields';
import '../css/Basicos.css';

const Basicos = ({ estate, unit, operations, section }) => {

    const [data, setData] = useState(dataBasic);
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

    let suitablePets = (data.operation === "Alquiler" ||
                       data.operation === "Alquiler por temporada" ||
                       section === "tiempo-compartido")
                       &&
                       (estate === "casa" ||
                       estate === "departamento" ||
                       estate === "departamento-tipo-ph" ||
                       estate === "quinta");

    let suitableExpenses = estate === "departamento" ||
                           estate === "oficina-consultorio" ||
                           estate === "local" ||
                           estate === "fondo-de-comercio" ||
                           estate === "parcelas-nichos-bovedas";

    return (
        <section className='datos-basicos'>
            <h2>Datos básicos</h2>

            <Select 
                displayName="Tipo de unidad *"
                name="unit" 
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    unit.map((item) => (
                        <option key={item.id}>
                            {item.title}
                        </option>
                    ))
                }
            </Select>

            <Select
                displayName="Tipo de operación *" 
                name="operation" 
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    operations.map((item) => (
                        <option key={item.id}>
                            {item.title}
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

            <Select 
                displayName="Estado *" 
                name="state" 
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    propertyState.map((item) => (
                        <option key={item.id}>
                            {item.title}
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

            {
                
                suitableExpenses ? (
                    <Select
                        displayName="Expensas *" 
                        name="expenses" 
                        className="expenses" 
                        onChange={handleChange}>
                        <option value="">Seleccione una opción...</option>
                        {
                            expenses.map((item) => (
                                <option key={item.id}>
                                    {item.title}
                                </option>
                            ))
                        }
                    </Select>
                ) : null
            }

            {
                suitableExpenses ? (
                    <Input
                        displayName="Valor expensas"
                        name="expensesValue"
                        type="number"
                        className="expenses-value"
                        onChange={handleChange}
                    />
                ) : null
            }

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

            {
                suitablePets ? (
                    <Input
                        displayName="Apto mascotas"
                        name="suitablePets"
                        type="checkbox"
                        className="apto-mascotas"
                        onChange={handleChange}
                    /> 
                ) : null
            }

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

            <button onClick={() => console.log(data)}>Mostrar</button>
        </section>
    )
};

export default Basicos;