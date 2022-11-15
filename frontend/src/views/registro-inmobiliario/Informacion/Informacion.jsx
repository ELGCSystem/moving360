import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components";
import { premium } from "./Beneficios";
import './Informacion.css';

const Informacion = () => (
    <section className="informacion">
        <h2>Información</h2>
        <h3>Premium <span>| Plan con renovación automática</span></h3>
        <h4>Beneficios:</h4>
        <ul className="informacion__benefits">
            {
                premium.map((beneficio) => (
                    <li key={beneficio.id}>
                        {beneficio.item}
                    </li>
                ))
            }
        </ul>

        <p>
            Ud. puede cancelar su plan en cualquier momento. Para conocer sobre la vigencia de su plan una vez efectuada la cancelación, revise los <Link to="/">Terminos y condiciones</Link>.
        </p>

        <div className="informacion__buttons">
            <Button to="/membresias">
                Atras
            </Button>
            <Button to="/registro-inmobiliario/pago" type="blue">
                Continuar
            </Button>
        </div>

    </section>
);

export default Informacion;