import { useState, useContext } from 'react';
import { Select, Input } from '../../../../components';
import { Store } from '../../../../Store.js';
import { estadoPropiedades } from './Basicos.js';
import './Basicos.css';

const Basicos = ({ tipoUnidad, operaciones }) => {

    const [data, setData] = useState({
        unidad: '',
        operacion: '',
        precio: null,
        noPublicar: false,
        moneda: '',
        estado: '',
        aptoCredito: false,
        aceptaPermuta: false,
        aptoProfesional: false,
        propiedadOcupada: false,
        aptoMascotas: false,
        titulo: '',
        comision: null
    });
    
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { houseData } = state;

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

            <Select displayName="Tipo de Unidad *" name="unidad" onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    tipoUnidad.map((unidad) => (
                        <option key={unidad.id}>
                            {unidad.title}
                        </option>
                    ))
                }
            </Select>

            <Select displayName="Tipo de Operación *" name="operacion" onChange={handleChange}>
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
                name="precio"
                type="number"
                onChange={handleChange}
            />

            <Input
                displayName="USD"
                name="moneda"
                type="radio"
                value="USD"
                onChange={handleChange}
            />

            <Input
                displayName="$"
                name="moneda"
                type="radio"
                value="$"
                onChange={handleChange}
            />

            <Select displayName="Estado *" name="estado" onChange={handleChange}>
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
                name="noPublicar"
                type="checkbox"
                className="no-publicar"
                onChange={handleChange}
            />

            <Input
                displayName="Apto crédito"
                name="aptoCredito"
                type="checkbox"
                className="apto-credito"
                onChange={handleChange}
            />

            <Input
                displayName="Acepta Permuta"
                name="aceptaPermuta"
                type="checkbox"
                className="acepta-permuta"
                onChange={handleChange}
            />
            
            <Input
                displayName="Apto profesional"
                name="aptoProfesional"
                type="checkbox"
                className="apto-profesional"
                onChange={handleChange}
            />

            <Input
                displayName="Propiedad ocupada"
                name="propiedadOcupada"
                type="checkbox"
                className="propiedad-ocupada"
                onChange={handleChange}
            />

            <Input
                displayName="Apto mascotas"
                name="aptoMascotas"
                type="checkbox"
                className="apto-mascotas"
                onChange={handleChange}
            /> 

            <Input
                displayName="Título del aviso *"
                name="titulo"
                type="text"
                className="titulo-aviso"
                onChange={handleChange}
            />

            <p>Máximo 100 caracteres. Ej: Vendo Depto. Excelente estado.</p>
            
            <h3>Compartir comisión</h3>

            <Input
                displayName="Compartir 50%"
                name="comision"
                type="radio"
                value="50"
                className="comision"
                onChange={handleChange}
            />

            <Input
                displayName="Compartir 30%"
                name="comision"
                type="radio"
                value="30"
                className="comision"
                onChange={handleChange}
            />

            <Input
                displayName="No compartir"
                name="comision"
                type="radio"
                value="0"
                className="comision"
                onChange={handleChange}
            />

            <button onClick={() => console.log(houseData)}>Mostrar</button>

        </section>
    )
};

export default Basicos;