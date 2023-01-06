import { useState } from 'react';
import { Input, Publicacion, Select } from '../../../components';
import { getUnits } from './Unidades';
import imagenPrincipal from './casa-ejemplo.jpg';
import inmobiliaria from './remax.jpg';
import Axios from 'axios';

const MisPublicaciones = () => {

    const [estates, setEstates] = useState([]);
    const [params, setParams] = useState({
        estate: null,
        unit: null,
        operation: null,
        price: null,
        title: null,
    });

    const getPosts = async (estate) => {

        let estateURL;

        switch (estate) {
            case "Casa":
                estateURL = "house";
                break;
            case "Departamento":
                estateURL = "department";
                break;
        }

        const url = `http://localhost:4000/api/${estateURL}/get/${JSON.stringify(params)}`;

        console.log(params);

        try {
            const { data } = await Axios.get(url);
            console.log(data);
            setEstates(data);

        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    const handleChange = e => {

        let value = e.target.value || null;
        setParams({ ...params, [e.target.name]: value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        getPosts(params.estate);
    }

    return (
        <section className="mis-publicaciones">
            <form onSubmit={submitHandler}>

                <Select
                    name="estate"
                    onChange={handleChange}>
                    <option value="">Buscar por inmueble...</option>
                    <option>Casa</option>
                    <option>Departamento</option>
                </Select>

                <Select
                    name="unit"
                    onChange={handleChange}>
                    <option value="">Buscar por unidad...</option>
                    {
                        getUnits(params.estate).map((item) => (
                            <option>{item.title}</option>
                        ))
                    }
                </Select>

                <Select
                    name="operation"
                    onChange={handleChange}>
                    <option value="">Buscar por operación...</option>
                    <option>Venta</option>
                    <option>Alquiler</option>
                    <option>Alquiler por temporada</option>
                </Select>

                <Input
                    name="price"
                    placeholder="Buscar por precio..."
                    onChange={handleChange}
                    type="number"
                />

                <Input
                    name="title"
                    placeholder="Buscar por título..."
                    onChange={handleChange}
                    type="text"
                />

                <button className='button button--blue'>Mostrar</button>
            </form>

            <h3>Se encontró {estates.length} resultado(s)</h3>

            {
                estates.map((estate) => (
                <Publicacion
                    key={estate._id}
                    imagen={imagenPrincipal}
                    precio={`${estate.dataBasic.currency} ${estate.dataBasic.price}`}
                    expensas={estate.expensas}
                    ubicacion={`${estate.location.streetName} ${estate.location.streetNumber}`}
                    ciudad={`${estate.location.locality}, ${estate.location.state}`}
                    tipoPublicacion=""
                    superficieTotal={`${estate.surface.total}m²`}
                    superficieCubierta={`${estate.surface.covered}m²`}
                    dormitorios={`${estate.mainFeatures.bedroomsQuantity} dorm.`}
                    banos={`${estate.mainFeatures.bathroomsQuantity} baño(s)`}
                    cocheras={`${estate.mainFeatures.garagesQuantity} coch.`}
                    titulo={estate.dataBasic.title}
                    descripcion={estate.additionalInformation.description}
                    inmobiliaria={inmobiliaria}
                />
                )) 
            }

        </section>
    )
};

export default MisPublicaciones;

/*




 */