import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './DetallesCompra.css';
import { precios } from "./Precios";

const DetallesCompra = () => (
    <section className="detalles-compra">
        <h2><FontAwesomeIcon icon={faShoppingCart} /> Detalles de la compra</h2>
        <ul>
            {
                precios.map((precio) => (
                    <li key={precio.id}>
                        <span>{precio.concepto}</span>
                        <span>{precio.price}</span>
                    </li>
                ))
            }
        </ul>
    </section>
);

export default DetallesCompra;