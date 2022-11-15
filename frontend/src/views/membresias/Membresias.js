import React from "react";
import { Card } from "../../components/index.js";
import { premium, gold, classic } from "./Beneficios.js"; 
import './Membresias.css'

const Membresias = () => (
    <section className="membresias">
        <h4 className="membresias__subtitle">Publica con nosotros</h4>
        <h2>Elegí la membresia <span>ideal para vos</span></h2>

        <Card 
            title="Premium"
            subtitle="$25.456,00 / mes"
            list={
                premium.map((beneficio) => (
                    <li>{beneficio.item}</li>
                ))}
            button="Elegir"
            buttonType="blue"
            url="/registro-inmobiliario"
            className="membresia"
        />

        <Card 
            title="Gold"
            subtitle="$21.315,00 / mes"
            list={
                gold.map((beneficio) => (
                    <li>{beneficio.item}</li>
                ))}
            button="Elegir"
            buttonType="blue"
            url="/registro-inmobiliario"
            className="membresia"
        />

        <Card 
            title="Classic"
            subtitle="$21.315,00 / mes"
            list={
                classic.map((beneficio) => (
                    <li>{beneficio.item}</li>
                ))}
            button="Elegir"
            buttonType="blue"
            url="/registro-inmobiliario"
            className="membresia"
        />

    </section>
);

export default Membresias;