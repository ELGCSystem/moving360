import React from "react";
import { Input, Button } from "../../components/index.js";
import './SolicitudRegistro.css';

const SolicitudRegistro = () => (
    <section className="solicitud-registro">
        <h2>Solicitud de registro</h2>
        <p>
            Completá el formulario de registro con los datos pedidos. Un agente de Moving360 se contactará con vos para finalizar el registro y dar de alta una cuenta de inmobiliaria para poder realizar publicaciones.
        </p>

        <form>
            <Input
                displayName="Nombre y Apellido"
                name="nombre-apellido"
                type="text"
                className="solicitud-registro__nombre"
            />
            <Input
                displayName="Teléfono"
                name="tel"
                type="number"
            />
            <Input
                displayName="Celular"
                name="celular"
                type="number"
            />
            <Input
                displayName="Email"
                name="email"
                type="email"
            />
            <Input
                displayName="Nombre de la inmobiliaria"
                name="nombre-inmobiliaria"
                type="text"
            />
            <Button to="/registro-exitoso" type="blue">Enviar</Button>
        </form>
    </section>
);

export default SolicitudRegistro;