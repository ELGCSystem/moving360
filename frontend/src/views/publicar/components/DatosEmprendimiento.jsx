import { useState } from "react";
import { Select, Input, Contador } from "../../../components";
import { useDispatch } from 'react-redux';
import { saveDataAction } from '../../../redux/estateDucks';
import { dataEntrepreneurship } from "../js/Fields";
import { state, months, years } from "../js/DatosEmprendimiento";
import "../css/DatosEmprendimientos.css";

const DatosEmprendimiento = ({ estate }) => {

    const [data, setData] = useState(dataEntrepreneurship);
    const dispatch = useDispatch();

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

        dispatch(saveDataAction('SAVE_DATA_ENTREPRENEURSHIP', sendData));       
    };

    const counterChange = (count, name) => {
        let sendData = data;

        setData({ ...data, [name]: count });
        sendData[name] = count;

        dispatch(saveDataAction('SAVE_DATA_ENTREPRENEURSHIP', sendData));
    };

    return (
        <section className="datos-emprendiemiento">
            <h2>Datos del emprendimiento</h2>

            <Select
                displayName="Estado"
                name="state"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    state.map((item) => (
                        <option key={item.id}>
                            {item.title}
                        </option>
                    ))
                }
            </Select>

            <Select
                displayName="Mes"
                name="maximumDateMonth"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    months.map((item) => (
                        <option key={item.id}>
                            {item.title}
                        </option>
                    ))
                }
            </Select>

            <Select
                displayName="Año"
                name="maximumDateYear"
                onChange={handleChange}>
                <option value="">Seleccione una opción...</option>
                {
                    years.map((item) => (
                        <option key={item.id}>
                            {item.title}
                        </option>
                    ))
                }
            </Select>

            {
                estate === "departamento" ? (
                    <Contador 
                        displayName="Cantidad de dormitorios" 
                        name="bedroomsQuantity"
                        min="1"
                        max="10"
                        onChange={counterChange}
                    />
                ) : null
            }

            <Input 
                displayName="Pertenece a un Country / Barrio cerrado" 
                name="insideCountry"
                type="checkbox"
                onChange={handleChange}
            />

        </section>
    )
};

export default DatosEmprendimiento;