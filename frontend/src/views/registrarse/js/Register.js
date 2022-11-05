import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/Register.css';
import 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { register } from '../../../actions/userActions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar,
  faCircleCheck,
  faEnvelope,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import LoadingBox from '../../../components/LoadingBox.js';
import MessageBox from '../../../components/MessageBox.js';

const Register = () => {
  useEffect(() => {
    document.title = 'Moving360 - Registro';
  }, []);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [dni, setDni] = useState('');
  const [tel, setTel] = useState('');
  const [mobile, setMobile] = useState('');

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(email, password, name, dni, tel, mobile));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <>
      <div className="body-register">
        <h2 className="register__title">
          Ingresá los datos para crear tu usuario
        </h2>
        <form onSubmit={handleSubmit} className="register__form">
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <h3 className="register__subtitle">Datos principales</h3>
          <div className="register__input-container">
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              required
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setDni(e.target.value)}
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
              onChange={(e) => setTel(e.target.value)}
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
              onChange={(e) => setMobile(e.target.value)}
            />
            <label htmlFor="mobile" className="register__label">
              Teléfono Celular:
            </label>
          </div>
          <input
            type="submit"
            value="Registrarse"
            className="register__submit button btn btn-primary"
          />
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
