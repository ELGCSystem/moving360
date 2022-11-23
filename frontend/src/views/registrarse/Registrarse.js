import React, { useState } from 'react';
import './Registrarse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar,
  faCircleCheck,
  faEnvelope,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
    dni: '',
    tel: '',
    mobile: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: [input.value] });
  };

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:4000/api/admin';
      const { data: res } = await Axios.post(url, data);
      navigate('/login');
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
          <h3 className="register__subtitle">Datos principales</h3>
          <div className="register__input-container">
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              required
              value={data.email}
              onChange={handleChange}
            />
            <label htmlFor="email" className="register__label">
              Email:
            </label>
          </div>
          <div className="register__input-container">
            <input
              type="password"
              name="password"
              id="password"
              className="input"
              required
              value={data.password}
              onChange={handleChange}
            />
            <label htmlFor="password" className="register__label">
              Contraseña:
            </label>
          </div>
          <div className="register__input-container">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="input"
              required
            />
            <label htmlFor="password" className="register__label">
              Confirmar Contraseña:
            </label>
          </div>
          <h3 className="register__subtitle">Datos del Usuario</h3>
          <div className="register__input-container">
            <input
              type="text"
              name="name"
              id="name"
              className="input"
              required
              value={data.name}
              onChange={handleChange}
            />
            <label htmlFor="name" className="register__label">
              Nombre Completo:
            </label>
          </div>
          <div className="register__input-container">
            <input
              type="number"
              name="dni"
              id="dni"
              className="input"
              required
              value={data.dni}
              onChange={handleChange}
            />
            <label htmlFor="dni" className="register__label">
              DNI:
            </label>
          </div>
          <div className="register__input-container">
            <input
              type="number"
              name="tel"
              id="tel"
              className="input"
              required
              value={data.number}
              onChange={handleChange}
            />
            <label htmlFor="tel" className="register__label">
              Teléfono:
            </label>
          </div>
          <div className="register__input-container">
            <input
              type="number"
              name="mobile"
              id="mobile"
              className="input"
              required
              value={data.mobile}
              onChange={handleChange}
            />
            <label htmlFor="mobile" className="register__label">
              Teléfono Celular:
            </label>
          </div>
          {error && <div>{error}</div>}
          <button
            type="submit"
            value="Registrarse"
            className="register__submit button btn btn-primary"
          >
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
