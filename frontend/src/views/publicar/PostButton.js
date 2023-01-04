import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPosts, isOportunidadesSuitable } from './js/CalcularPrecio.js';
import { translateEstates } from '../../utils/utils.js';
import axios from 'axios';  

const PostButton = ({ estate }) => {

    const estateData = useSelector(store => store.estate);
    let navigate = useNavigate();

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
    
          const { data } = await axios.post(`http://localhost:4000/api/${translateEstates(estate)}/signup`, {
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
    
          // navigate("/publicar/vista-previa");
          
          console.log(data);
    
        } catch (error) {
          console.log(error.response.data.message);
        }
    };

    return (
        <button 
            className='button button--blue'
            onClick={submitHandler}>
            Publicar
        </button>
    );
}

export default PostButton;