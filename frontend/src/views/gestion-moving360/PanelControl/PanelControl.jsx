import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../../components";
import { funciones } from "../Funciones.js";
import './PanelControl.css';

const PanelControl = () => (
    <section className="panel-control">

        <h2>Panel de control</h2>
        <p className="subtitle">Gestioná todo lo referido a tu inmobiliaria.</p>

        <div className="panel-control__cards">
            {
                funciones.map((card) => (
                    <Link to={card.url}>
                        <Card
                            icon={card.icon}
                            title={card.title}
                            text={card.text}
                            className="panel-control"
                        />
                    </Link>
                ))
            }
        </div>
    </section>
);

export default PanelControl;