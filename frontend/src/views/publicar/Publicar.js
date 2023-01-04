import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa/index.esm.js';
import { Button } from '../../components/index.js';
import Inmueble from './Inmueble.jsx';
import PostButton from './PostButton.js';
import './css/Publicar.css';

const Publicar = () => {

  useEffect(() => {
    document.title = "Publicar - Moving360"
  }, []);

  const { section, estate } = useParams();

  return (
    <div className='publicar'>

      <Button 
          to="/gestion-inmobiliaria/nueva-publicacion"
          onClick={window.scroll(0, 0)}
          className="atras">
          <FaAngleLeft /> Atras
      </Button>

      <form>
        <Inmueble section={section} estate={estate}/>
        <PostButton estate={estate} />
      </form>
      
    </div>
  )
};

export default Publicar;