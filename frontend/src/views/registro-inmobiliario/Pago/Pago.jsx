import React from "react";
import { Link } from "react-router-dom";
import { Input, Select, Button } from "../../../components";
import './Pago.css';

const Pago = () => (
    <section className="pago">
        <h2>Pago</h2>
        <h3>Datos de facturación</h3>
        <p>
            Al completar esta información se calcularan los impuestos sobre el plan.
        </p>
        <Input
            displayName="Nombre / Razón social"
            name="nombre"
            type="text"
        />
        <Input
            displayName="Condición de IVA"
            name="iva"
            type="text"
        />
        <Input
            displayName="CUIT"
            name="iva"
            type="text"
        />

        <h3>Datos de pago</h3>
        <p>Todos los campos son obligatorios</p>

        <Input
            displayName="Titular de la tarjeta"
            name="titular-tarjeta"
            type="text"
        />
        <Input
            displayName="Email"
            name="email"
            type="email"
        />
        <Input
            displayName="Cód. de área"
            name="codigo-area"
            type="number"
        />
        <Input
            displayName="Número de Teléfono"
            name="tel"
            type="number"
        />
        <Select
            displayName="Tipo de Documento"
            name="tipo-dni"
        > 

        </Select>
        <Input
            displayName="Número de Documento"
            name="dni"
            type="number"
        />
        <Input
            displayName="Número de la tarjeta"
            name="numero-tarjeta"
            type="number"
        />
        <Input
            displayName="Vencimiento"
            name="numero-tarjeta"
            type="number"
        />
        <Input
            displayName="Cód. de Seguridad"
            name="codigo-seguridad"
            type="number"
        />
        <Input
            displayName={
            <p>
                Acepto los <Link to="/">Términos y Condiciones</Link> y los <Link to="/">Términos y condiciones de contratación</Link>.
            </p>
            }
            name="aceptar-terms"
            type="checkbox"
        />
        <p>
            Ud. puede cancelar su plan en cualquier momento. Para conocer sobre la vigencia de su plan una vez efectuada la cancelación, revise los <Link to="/">Terminos y condiciones</Link>.
        </p>

        <div className="pago__buttons">
            <Button to="/membresias">
                Atras
            </Button>
            <Button to="/registro-inmobiliario/pago" type="blue">
                Continuar
            </Button>
        </div>

    </section>
);

export default Pago;