import { useState, useContext } from 'react';
import { Input, Contador, Select } from '../../../../components';
import { Store } from '../../../../Store.js';
import { 
    caracteristicasCheckboxes,
    tipoCochera,
    coberturaCochera 
} from './CaracteristicasPrincipales';
import './CaracteristicasPrincipales.css';

const CaracteristicasPrincipales = () => {

    const [data, setData] = useState({
        dormitorios: false,
        cantidadDormitorios: 1,
        medidasDormitorios: '',
        banos: false,
        cantidadBanos: 1,
        medidasBanos: '',
        toilettes: false,
        cantidadToilettes: 1,
        medidasToilettes: '',
        banosSuite: false,
        cantidadBanosSuite: 1,
        medidasBanosSuite: '',
        cantidadAmbientes: 1,
        cocina: false,
        medidasCocina: '',
        cocinaIntegrada: false,
        medidasCocinaIntegrada: '',
        comedor: false,
        medidasComedor: '',
        comedorDiario: false,
        medidasComedorDiario: '',
        living: false,
        medidasLiving: '',
        lavadero: false,
        medidasLavadero: '',
        patio: false,
        medidasPatio: '',
        hall: false,
        medidasHall: '',
        escritorio: false,
        medidasEscritorio: '',
        playroom: false,
        medidasPlayroom: '',
        terraza: false,
        medidasTerraza: '',
        quincho: false,
        medidasQuincho: '',
        pileta: false,
        medidasPileta: '',
        dependenciaServicio: false,
        medidasDependenciaServicio: '',
        plantas: false,
        cantidadPlantas: 1,
        cocheras: false,
        cantidadCocheras: 1,
        tipoCochera: '',
        coberturaCochera: '',
        antiguedad: '',
        anosAntiguedad: null
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

            <div className='dormitorios'>
                <Input
                    displayName="Dormitorios"
                    name="dormitorios"
                    type="checkbox"
                    onChange={handleChange}
                />
                <Contador
                    displayName="Cantidad de dormitorios"
                    name="cantidadDormitorios"
                    max="20"
                    min="1"
                    onChange={counterChange}
                />
                <Input
                    displayName="Medidas de dormitorios"
                    name="medidasDormitorios"
                    type="text"
                    onChange={handleChange}
                />
            </div>

            <div className='banos'>
                <Input
                    displayName="Baños"
                    name="banos"
                    type="checkbox"
                    onChange={handleChange}
                />
                <Contador
                    displayName="Cantidad de baños"
                    name="cantidadBanos"
                    max="10"
                    min="1"
                    onChange={counterChange}
                />
                <Input
                    displayName="Medidas de baños"
                    name="medidasBanos"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            
            <div className='toilettes'>
                <Input
                    displayName="Toilettes"
                    name="toilettes"
                    type="checkbox"
                    onChange={handleChange}
                />
                <Contador
                    displayName="Cantidad de toilettes"
                    name="cantidadToilettes"
                    max="10"
                    min="1"
                    onChange={counterChange}
                />
                <Input
                    displayName="Medidas de toilettes"
                    name="medidasToilettes"
                    type="text"
                    onChange={handleChange}
                />
            </div>

            <div className='banos-suite'>
                <Input
                    displayName="Baños en suite"
                    name="banosSuite"
                    type="checkbox"
                    onChange={handleChange}
                />
                <Contador
                    displayName="Cantidad de baños en suite"
                    name="cantidadBanosSuite"
                    max="10"
                    min="1"
                    onChange={counterChange}
                />
                <Input
                    displayName="Medidas de baños en suite"
                    name="medidasBanosSuite"
                    type="text"
                    onChange={handleChange}
                />
            </div>

            <div className='ambientes'>
                <Contador
                    displayName="Cantidad de ambientes *"
                    name="cantidadAmbientes"
                    max="20"
                    min="1"
                    onChange={counterChange}
                />
            </div>

            {
                caracteristicasCheckboxes.map((campo) => (
                    <div className={campo.className} key={campo.id}>
                        <Input
                            displayName={campo.displayName}
                            name={campo.name}
                            type="checkbox"
                            onChange={handleChange}
                        />
                        <Input
                            displayName={`Medidas de ${campo.displayName}`}
                            name={`medidas${campo.name}`}
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                ))
            }

            <div className='plantas'>
                <Input
                    displayName="Plantas"
                    name="plantas"
                    type="checkbox"
                    onChange={handleChange}
                />
                <Contador
                    displayName="Cantidad de plantas *"
                    name="cantidadPlantas"
                    max="5"
                    min="1"
                    onChange={counterChange}
                />
            </div>

            <h3>Cocheras</h3>

            <div className='cocheras'>
                <Input
                    displayName="Cocheras"
                    name="cocheras"
                    type="checkbox"
                    onChange={handleChange}
                />
                <Contador
                    displayName="Cantidad de cocheras *"
                    name="cantidadCocheras"
                    max="6"
                    min="1"
                    onChange={counterChange}
                />
            </div>

            <div className="tipo-cochera">
                <Select 
                    displayName="Tipo de cochera" 
                    name="tipoCochera" 
                    onChange={handleChange}>
                    <option value="">Seleccione una opción...</option>
                    {
                        tipoCochera.map((tipo) => (
                            <option key={tipo.id}>
                                {tipo.title}
                            </option>
                        ))
                    }
                </Select>
            </div>

            <div className="cobertura-cochera">
                <Select
                    displayName="Cobertura de cochera" 
                    name="coberturaCochera" 
                    onChange={handleChange}>
                    <option value="">Seleccione una opción...</option>
                    {
                        coberturaCochera.map((cobertura) => (
                            <option key={cobertura.id}>
                                {cobertura.title}
                            </option>
                        ))
                    }
                </Select>
            </div>

            <h3 className='antiguedad__subtitle'>Antigüedad</h3>

            <Input
                    displayName="A estrenar"
                    name="antiguedad"
                    type="radio"
                    value="A estrenar"
                    onChange={handleChange}
            />      

            <Input
                displayName="Años de antigüedad"
                name="antiguedad"
                type="radio"
                value="Años de antigüedad"
                onChange={handleChange}
            />

            <Input
                displayName="Años"
                name="anosAntiguedad"
                type="number"
                onChange={handleChange}
            />

            <button onClick={() => console.log(data)}>Mostrar</button>
            
        </section>
    )
};

export default CaracteristicasPrincipales;