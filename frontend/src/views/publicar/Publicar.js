import { useEffect, useContext } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa/index.esm.js';
import { Store } from '../../Store.js';
import { Button } from '../../components/index.js';
import { getPosts, isOportunidadesSuitable } from './js/CalcularPrecio.js';
import {
  Casa,
  Departamento,
  DepartamentoPH,
  Cochera,
  OficinaConsultorio,
  Local,
  Galpon,
  FondoComercio,
  Campo,
  Quinta,
  LoteTerreno,
  Hotel,
  ParcelaNichoBoveda,
  CamasNauticas
} from './Inmuebles/index.js';
import './css/Publicar.css';
import axios from 'axios';

const Publicar = () => {

  useEffect(() => {
    document.title = "Publicar - Moving360"
  }, []);

  const { state } = useContext(Store);
  const { houseData } = state;

  let navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    let posts = await getPosts("Casa",
                                houseData.dataBasic.unit,
                                houseData.dataBasic.operation);
    
    if (isOportunidadesSuitable(posts,
                                houseData.dataBasic.price,
                                houseData.surface.covered))
      console.log("Tu inmueble de publicará en la sección de oportunidades");
    else
      console.log("Te invitamos a publicar tu inmueble en la sección oportunidades");
    
    // try {

    //   const { data } = await axios.post("http://localhost:4000/api/house/signup", {
    //     dataBasic: houseData.dataBasic,
    //     dataCountry: houseData.dataCountry,
    //     surface: houseData.surface,
    //     location: houseData.location,
    //     mainFeatures: houseData.mainFeatures,
    //     generalFeatures: houseData.generalFeatures,
    //     otherEnvironments: houseData.otherEnvironments,
    //     installations: houseData.installations,
    //     services: houseData.services,
    //     multimedia: houseData.multimedia,
    //     additionalInformation: houseData.additionalInformation,
    //     contactOwner: houseData.contactOwner
    //   });

    //   // window.location.href = "/gestion-inmobiliaria";
    //   // navigate("/publicar/vista-previa");

      
    //   console.log(data);

    // } catch (error) {
    //   console.log(error.response.data.message);
    // }
    
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
        <Routes>
          <Route path=':seccion/casa/*' element={<Casa />} />
          <Route path=':seccion/departamento/*' element={<Departamento />} />
          <Route path=':seccion/departamento-tipo-ph/*' element={<DepartamentoPH />} />
          <Route path=':seccion/cochera/*' element={<Cochera />} />
          <Route path=':seccion/oficina-consultorio/*' element={<OficinaConsultorio />} />
          <Route path=':seccion/local/*' element={<Local />} />
          <Route path=':seccion/galpon/*' element={<Galpon />} />
          <Route path=':seccion/fondo-de-comercio/*' element={<FondoComercio />} />
          <Route path=':seccion/campo/*' element={<Campo />} />
          <Route path=':seccion/quinta/*' element={<Quinta />} />
          <Route path=':seccion/lote-terreno/*' element={<LoteTerreno />} />
          <Route path=':seccion/hotel/*' element={<Hotel />} />
          <Route path=':seccion/parcelas-nichos-bovedas/*' element={<ParcelaNichoBoveda />} />
          <Route path=':seccion/camas-nauticas/*' element={<CamasNauticas />} />
        </Routes>
        <button className='button button--blue'>Publicar</button>
      </form>
    </div>
  )
}

export default Publicar;