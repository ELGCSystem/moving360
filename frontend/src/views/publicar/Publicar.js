import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa/index.esm.js';
import { Store } from '../../Store.js';
import { Button } from '../../components/index.js';
import { getPosts, isOportunidadesSuitable } from './js/CalcularPrecio.js';
import Inmueble from './Inmueble.jsx';
import './css/Publicar.css';
import axios from 'axios';
import { translateEstates } from '../../utils/utils.js';

const Publicar = () => {

  useEffect(() => {
    document.title = "Publicar - Moving360"
  }, []);

  const { state } = useContext(Store);
  const { estateData } = state;

  let navigate = useNavigate();

  let { section, estate } = useParams();

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(estateData);

    let posts = await getPosts(estate,
                               estateData.dataBasic.unit,
                               estateData.dataBasic.operation);
    
    if (isOportunidadesSuitable(posts,
                                estateData.dataBasic.price,
                                estateData.surface.covered))
      console.log("Tu inmueble de publicará en la sección de oportunidades");
    else
      console.log("Te invitamos a publicar tu inmueble en la sección oportunidades");
    
    try {

      const { data } = await axios.post(`http://localhost:10000/api/${translateEstates(estate)}/signup`, {
        dataBasic: estateData.dataBasic,
        dataEntrepreneurship: estateData.dataEntrepreneurship,
        dataCountry: estateData.dataCountry,
        surface: estateData.surface,
        location: estateData.location,
        mainFeatures: estateData.mainFeatures,
        generalFeatures: estateData.generalFeatures,
        otherEnvironments: estateData.otherEnvironments,
        installations: estateData.installations,
        services: estateData.services,
        building: estateData.building,
        multimedia: estateData.multimedia,
        additionalInformation: estateData.additionalInformation,
        contactOwner: estateData.contactOwner
      });

      // window.location.href = "/gestion-inmobiliaria";
      // navigate("/publicar/vista-previa");
      
      console.log(data);

    } catch (error) {
      console.log(error.response.data.message);
    }
    
  }

  return (
    <div className='publicar'>

      <Button 
          to="/gestion-inmobiliaria/nueva-publicacion"
          onClick={window.scroll(0, 0)}
          className="atras"
      >
          <FaAngleLeft /> Atras
      </Button>

      <form onSubmit={submitHandler}>
        <Inmueble section={section} estate={estate}/>
        <button className='button button--blue'>Publicar</button>
      </form>
    </div>
  )
}

export default Publicar;