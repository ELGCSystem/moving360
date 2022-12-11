import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCircleCheck, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './Registrarse.css';
import './Swal.css';
import success from '../../assets/success.png';

const Register = () => {

  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
    dni: '',
    tel: '',
    mobile: ''
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:4000/api/admin/signup';
      const { data: res } = await Axios.post(url, data);
      const MySwal = withReactContent(Swal);

      MySwal.fire({ title: 'Registrado con éxito!',
                  text: 'Verifica tu correo electrónico para poder Iniciar Sesión!',
                  imageUrl: `${success}`,
                  imageWidth: '100',
                  imageHeight: '100',
                  padding: '8rem',  
                  width: '800',
      });
      console.log(res.message);
    } catch (error) { 
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
    
      <div className="body-register">
        <h2 className="register__title">
          Ingresá los datos para crear tu usuario
        </h2>
        <form className="register__form" onSubmit={handleSubmit}>

          <div className='column'>
            <h3 className="register__subtitle">Datos principales</h3>

            <Input
              displayName="Email: *"
              name="email"
              type="email"
              value={data.email}
              onChange={handleChange}
              className="register__input"
            />

            <Input
              displayName="Contraseña: *"
              name="password"
              type="password"
              value={data.password}
              onChange={handleChange}
              className="register__input"
            />

            <Input
              displayName="Confirmar contraseña: *"
              name="confirm-password"
              type="password"
              className="register__input"
            />
          </div>

          <div className='column'>
            <h3 className="register__subtitle">Datos del Usuario</h3>

            <Input
              displayName="Nombre completo: *"
              name="name"
              type="text"
              value={data.name}
              onChange={handleChange}
              className="register__input"
            />

            <Input
              displayName="N° de DNI: *"
              name="dni"
              type="number"
              value={data.dni}
              onChange={handleChange}
              className="register__input"
            />

            <Input
              displayName="Teléfono: *"
              name="tel"
              type="number"
              value={data.tel}
              onChange={handleChange}
              className="register__input"
            />

            <Input
              displayName="Celular: *"
              name="mobile"
              type="number"
              value={data.mobile}
              onChange={handleChange}
              className="register__input"
            />
          </div>

          <button
            type="submit"
            value="Registrarse"
            className="register__submit button button--blue">
            Registrarse
          </button>

        </form>
      </div>
      <div className="ad">
        <h2 className="ad__title">
          ¿Sabes por qué deberías publicar con nosotros?
        </h2>
        <p className="ad__description">
          Porque estamos capacitados en poder brindarte los servicios necesarios
          para que tu negocio devenga en un éxito absoluto en cada publicación
          que realices.
        </p>
        <div className="_ontainer__ad__benefit">
          <div className="ad__benefit">
            <h3 className="ad__subtitle">
              Profesionalismo{' '}
              <FontAwesomeIcon
                className=".fa-solid"
                icon={faChartBar}
                style={{ transform: 'rotate(270deg)' }}
              />
            </h3>
          </div>
          <p className="ad__text">
            Te ofrecemos calidad, velocidad y eficiencia al momento de publicar.
          </p>
        </div>
        <div className="ad__benefit">
          <h3 className="ad__subtitle">
            Cumplimiento <FontAwesomeIcon icon={faCircleCheck} />
          </h3>
          <p className="ad__text">
            Brindamos todos los servicios posibles para ayudar a que tu
            publicación obtenga calidad y atractivo.
          </p>
        </div>
        <div className="ad__benefit">
          <h3 className="ad__subtitle">
            Atención <FontAwesomeIcon icon={faEnvelope} />
          </h3>
          <p className="ad__text">
            Disponibles en horario de atención para poder asesorarte con
            cualquier duda que tengas respecto a Moving360.
          </p>
        </div>
      </div>
      <div className="container__support">
        <div className="support">
          <h2 className="support__title">Atención al Cliente</h2>
          <p className="support__description">
            Asesoramiento ante cualquier eventualidad/duda.
          </p>
          <div className="support__item">
            <h3 className="support__subtitle">
              Horarios <FontAwesomeIcon icon={faClock} />
            </h3>
            <p className="support__text">Días hábiles de 10:00 a 20:00 hs.</p>
          </div>
          <div className="support__item">
            <h3 className="support__subtitle">
              Contacto <FontAwesomeIcon icon={faEnvelope} />
            </h3>
            <a href="mailto:support@moving360.com" className="support__link">
              support@moving360.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
