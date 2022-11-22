import React, { useEffect } from "react";
import { Card } from "../../components/index.js";
import { faUser, faBuilding } from "@fortawesome/free-solid-svg-icons";
import './TipoRegistro.css';

const TipoRegistro = () => {

    useEffect(() => {
        document.title = "Registrarse - Moving360"
    }, []);

    return (
        <section className="tipo-registro">

            <h2>¿Con cuál perfil te identificas?</h2>

            <div className="tipo-registro__cards">
                <Card
                    className="tipo-registro"
                    icon={faBuilding}
                    title="Inmobiliaria"
                    text="Administrá tus propiedades, dialogá con interesados y observa estadisticas sobre tus publicaciones."
                    button="Seleccionar"
                    url="/solicitud-registro"
                />
                <Card
                    className="tipo-registro"
                    icon={faUser}
                    title="Usuario particular"
                    text="Navega entre todas las propiedades del portal, dialogá con las inmobiliarias, encontrá tu lugar en el mundo."
                    button="Seleccionar"
                    url="/registrarse"
                />
            </div>
        </section>
    );
}

export default TipoRegistro;