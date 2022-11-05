import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../../actions/userActions.js';
import {
  Nav,
  NavLinkLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavAccount,
  NavBtnLinkPublic,
} from './NavBarElements.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../Modal/js/Modal.js';
import styled from 'styled-components';
import 'bootstrap';
import '../css/Modal.css';
import Google from '../img/google.png';
import Facebook from '../img/facebook.png';
import Apple from '../img/apple.png';
import { useLocation } from 'react-router-dom';
import LoadingBox from '../../LoadingBox.js';
import MessageBox from '../../MessageBox.js';

const NavBar = () => {
  const [stateModal1, changeStateModal1] = useState(false);

  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Nav>
      <NavMenu>
        <NavLinkLogo to="/">
          <h1>Moving360</h1>
        </NavLinkLogo>
        <Bars />
        <NavLink to="/inicio" activestyle="true">
          Inicio
        </NavLink>
        <NavLink to="/vender" activestyle="true">
          Vender
        </NavLink>
        <NavLink to="/alquilar" activestyle="true">
          Alquilar
        </NavLink>
        <NavLink to="/comprar" activestyle="true">
          Comprar
        </NavLink>
      </NavMenu>
      <NavAccount>
        <NavBtn>
          <NavBtnLinkPublic to="/publica-gratis">
            Publica Gratis
          </NavBtnLinkPublic>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/register">
            <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: '1.8rem' }} />
            Registrarse
          </NavBtnLink>
        </NavBtn>
        <NavBtn onClick={() => changeStateModal1(!stateModal1)}>
          <NavBtnLink to="/">
            <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.8rem' }} />
            Iniciar Sesión
          </NavBtnLink>
        </NavBtn>
      </NavAccount>
      <Modal
        state={stateModal1}
        changeState={changeStateModal1}
        title={'Inicio Sesión'}
      >
        <Container>
          <h1>Inicio Sesión</h1>
          <p>
            Ingresa a tu cuenta y accedé a todos los beneficios otorgados, como
            los avisos creados alertas, publicaciones guardadas, entre otras
            cosas.
          </p>
          <form onSubmit={submitHandler} className="login__form">
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <label className="form__label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form__input"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form__label">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form__input"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              value="Ingresar"
              className="form__submit button btn btn-primary"
            />
          </form>
          <div className="center">
            <div className="line"></div>
            <div className="or">O</div>
            <div className="line"></div>
          </div>
          <div className="apis">
            <div className="apis__loginButton google">
              <img src={Google} alt="" className="loginButton__icon" />
              Google
            </div>
            <div className="apis__loginButton facebook">
              <img
                src={Facebook}
                alt=""
                className="loginButton__icon icon__facebook"
              />
              Facebook
            </div>
            <div className="apis__loginButton apple">
              <img src={Apple} alt="" className="loginButton__icon" />
              Apple
            </div>
          </div>
        </Container>
      </Modal>
    </Nav>
  );
};

export default NavBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
