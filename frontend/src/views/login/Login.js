import React from "react";
import { Button, Input } from "../../components/index.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="modal-login">
            <Button to="/" className="modal-login__close" type="darker">
                <FontAwesomeIcon icon={faTimes}/>
            </Button>
            <div className="login">
                <h2 className="login__title">Iniciar sesión</h2>
                <form className="login__form" action="">
                <Input
                    displayName="Nombre de usuario"
                    name="nombre-usuario"
                    type="text"
                />
                <Input
                    displayName="Contraseña"
                    name="contrasena"
                    type="password"
                />
                <Button to="/" type="blue" className="login__button">
                    Ingresar
                </Button>
                </form>
                <p>
                    ¿No tenes una cuenta? <Link to="/tipo-registro">Creá una</Link>.
                </p>
            </div>
        </section>
    );
}

export default Login;