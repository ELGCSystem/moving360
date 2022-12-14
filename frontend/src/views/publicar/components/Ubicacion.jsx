import { useState, useEffect, useContext } from 'react';
import { Select, Input } from '../../../components';
import { useDispatch } from 'react-redux';
import { saveDataAction } from '../../../redux/estateDucks';
import { location } from '../js/Fields';
import Axios from 'axios';
import '../css/Ubicacion.css'

const Ubicacion = () => {

    const [data, setData] = useState(location);

    const [provincias, setProvincias] = useState([]);
    const [partidos, setPartidos] = useState([]);
    const [localidades, setLocalidades] = useState([]);

    // Llama a la API solo una vez, al montar el componente.
    useEffect(() => {
        getProvincias();
    }, []);

    const dispatch = useDispatch();

    const getProvincias = async () => {
        try {
            const url = 'https://apis.datos.gob.ar/georef/api/provincias';
            const { data: resProvincias } = await Axios.get(url);
            setProvincias(resProvincias.provincias);
        } catch (error) {
            console.log(error)
        }
    }
    
    const getPartidos = async (e) => {
        
        let nombreProvincia = e.target.value;

        /*
            En caso de que el nombre de la provincia sea "Buenos Aires",
            se especifica si es la provincia o la ciudad mediante el id.
        */
        switch (nombreProvincia) {
            case "Buenos Aires":
                nombreProvincia = "06";
                break;
            case "Ciudad Autónoma de Buenos Aires":
                nombreProvincia = "02";
                break;
        }

        try {
            const url = `https://apis.datos.gob.ar/georef/api/departamentos`;

            const params = {
                provincia: nombreProvincia,
                max: 5000
            };

            const { data } = await Axios.get(url, { params: params });
            setPartidos(data.departamentos);
        } catch (error) {
            console.log(error)
        }
    }

    const getLocalidades = async (e) => {

        let nombrePartido = e.target.value;

        nombrePartido = nombrePartido === "Comuna 1" ?
                        "02007" : 
                        nombrePartido;


        try {
            const url = `https://apis.datos.gob.ar/georef/api/localidades`;

            const params = {
                departamento: nombrePartido,
                max: 5000
            };

            const { data } = await Axios.get(url, { params: params });

            setLocalidades(data.localidades);
        } catch (error) {
            console.log(error)
        }
    }

    const getCoordinates = async () => {
        try {
            const url = `https://apis.datos.gob.ar/georef/api/direcciones`;

            const params = {
                provincia: data['province'],
                departamento: data['state'],
                localidad: data['locality'],
                direccion: `${data['streetName']} ${data['streetNumber']}`
            }

            const { data: res } = await Axios.get(url, { params: params });
            console.log(res.direcciones[0].ubicacion);

        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = e => {
        let sendData = data;
        
        setData({ ...data, [e.target.name]: e.target.value });
        sendData[e.target.name] = e.target.value;

        dispatch(saveDataAction('SAVE_LOCATION', sendData));
    }    

    return (
        <section className='ubicacion'>

            <h2>Ubicación</h2>

            <Select displayName="País *" name="country">
                <option>Argentina</option>
            </Select>

            <Select
                displayName="Provincia *"
                name="province"
                onChange={(e) => {
                    getPartidos(e);
                    handleChange(e);
                }}>
                <option value="-1">Seleccione una opción...</option>
                {
                    provincias.map((provincia) => (
                        <option key={provincia.id}>
                            {provincia.nombre}
                        </option>
                    ))
                }
            </Select>

            <Select
                displayName="Partido *"
                name="state"
                className="partido"
                onChange={(e) => {
                    getLocalidades(e);
                    handleChange(e);
                }}>
                <option value="-1">Seleccione una opción...</option>
                {
                    partidos.map((partido) => (
                        <option key={partido.id}>
                            {partido.nombre}
                        </option>
                    ))
                }
            </Select>

            <Select
                displayName="Localidad *"
                name="locality"
                className="localidad"
                onChange={handleChange}>
                <option value="-1">Seleccione una opción...</option>
                {
                    localidades.map((localidad) => (
                        <option key={localidad.id}>
                            {localidad.nombre}
                        </option>
                    ))
                }
            </Select>

            <Input
                displayName="Calle *"
                name="streetName"
                type="text"
                className="calle"
                onChange={handleChange}
            />

            <Input
                displayName="Altura *"
                name="streetNumber"
                type="number"
                onChange={handleChange}
            />

            <Input
                displayName="Piso"
                name="flat"
                type="number"
                onChange={handleChange}
            />

            <Input
                displayName="Dpto."
                name="department"
                type="text"
                onChange={handleChange}
            />

            <Input
                displayName="C.P."
                name="postalCode"
                type="number"
                onChange={handleChange}
            />

            <h3>¿Cómo querés mostrar tu ubicación?</h3>

            <Input
                displayName="Exacta"
                name="locationType"
                type="radio"
                className="muestra-ubicacion"
                value="Exacta"
                onChange={handleChange}
            />
            <Input
                displayName="Aproximada"
                name="locationType"
                type="radio"
                className="muestra-ubicacion"
                value="Aproximada"
                onChange={handleChange}
            />

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13121.608986308303!2d-58.59283116044926!3d-34.69503299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc6151b90a33f%3A0x4f6ccca5b2d439a0!2sEscuela%20tecnica%20n%C2%BA6!5e0!3m2!1ses!2sar!4v1666931952110!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <p>Recordá que si seleccionas la opción "Aproximada" tu propiedad no aparecerá en el mapa, solamente la localidad.</p>

            <button onClick={getCoordinates}>Buscar</button>
        </section>
    )
}

export default Ubicacion;