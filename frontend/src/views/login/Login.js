import { useState } from 'react';
import { Button, Input } from '../../components/index.js';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSigninAction } from '../../redux/userDucks.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Google from '../../assets/google.png';
import Facebook from '../../assets/facebook.png';
import './Login.css';
import './Auth.css';

const Login = () => {
  const google = () => {
    window.open('http://localhost:10000/auth/google', '_self');
  };

  const facebook = () => {
    window.open('http://localhost:10000/auth/facebook', '_self');
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userSigninAction(email, password));
    navigate("/gestion-inmobiliaria");
  }

  return (
    <section className="modal-login">
      <Button to="/" className="modal-login__close" type="darker">
        <FontAwesomeIcon icon={faTimes} />
      </Button>
      <div className="login">
        <h2 className="login__title">Iniciar sesión</h2>
        <form className="login__form" onSubmit={submitHandler}>
          <Input displayName="Email" name="email" type="email" onChange={(e) => setEmail(e.target.value)} />
          <Input displayName="Contraseña" name="contrasena" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <button type="blue" className="button button--blue login__button">
            Ingresar
          </button>
        </form>
        <p>
          ¿No tenes una cuenta? <Link to="/tipo-registro">Creá una</Link>.
        </p>
        <div className="center">
          <div className="line"></div>
          <div className="or">o</div>
        </div>
        <div className="wrapper">
          <div className="wrapper__left">
            <div className="apis">
              <div className="apis__loginButton google" onClick={google}>
                <img src={Google} alt="" className="loginButton__icon" />
                Google
              </div>
              <div className="apis__loginButton facebook" onClick={facebook}>
                <img src={Facebook} alt="" className="loginButton__icon" />
                Facebook
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;