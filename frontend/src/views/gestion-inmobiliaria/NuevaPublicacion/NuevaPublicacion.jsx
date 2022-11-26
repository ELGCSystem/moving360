import React, { useState } from "react";
import './NuevaPublicacion.css';
import { Card, Select, Button } from "../../../components";
import { seccionesView, secciones } from "./Secciones";

const NuevaPublicacion = () => {

    const [idSeccion, setIdSeccion] = useState(-1);
    const [inmueble, setInmueble] = useState("");
    const [route, setRoute] = useState("");
    const [seccion, setSeccion] = useState("");

    const idSeccionHandler = (e) => setIdSeccion(e.target.value);
    const inmuebleHandler = (e) => setInmueble(e.target.children[e.target.value].innerHTML);
    const routeHandler = () => setRoute(routeGenerator());
    const seccionHandler = () => setSeccion(seccionGenerator());

    const routeGenerator = () => {
        let route = inmueble;
        route = route.toLowerCase();
        route = route.replaceAll(" ", "-");
        route = route.replaceAll("---", "-");
        route = route.replaceAll("á", "a");
        route = route.replaceAll("ó", "o");
        return route;
    }

    const seccionGenerator = () => {

        let newSeccion = "";

        switch (parseInt(idSeccion)) {
            case 0:
                newSeccion = "General";
                break;
            case 1:
                newSeccion = "Countries";
                break;
            case 2: 
                newSeccion = "Emprendimientos";
                break;
            case 3:
                newSeccion = "Oportunidades";
                break;
            case 4:
                newSeccion = "Tiempo compartido";
                break;
            default:
                newSeccion = "Error";
                break;
        }

        newSeccion = newSeccion.toLowerCase();
        newSeccion = newSeccion.replaceAll(" ", "-");
        newSeccion = newSeccion.replaceAll("---", "-");
        newSeccion = newSeccion.replaceAll("á", "a");
        newSeccion = newSeccion.replaceAll("ó", "o");

        return newSeccion;
    }

    return (
        <section className="nueva-publicacion">
            <h2>Nueva publicación</h2>
            <p className="subtitle">Selecciona la sección de inmuebles en la que se publicará.</p>

            <Select
                displayName="Seccion"
                name="seccion"
                onChange={idSeccionHandler}

                onClick={() => {
                    setRoute("");
                    setInmueble("");
                    seccionHandler();
                }}
            >
                <option value="-1">Seleccione una opcion...</option>
                {
                    secciones.map((seccion, i) => (
                        <option key={seccion.id} value={i}>
                            {seccion.title}
                        </option>
                    ))
                }   
            </Select>

            <Select
                displayName="Tipo de unidad"
                name="tipo-unidad"
                onChange={inmuebleHandler}
                onClick={routeHandler}
            >
                <option value="0" selected>Seleccione una opcion...</option>
                {
                    idSeccion > -1 && (
                        secciones[idSeccion].inmuebles.map((inmueble, i) => (
                            <option value={i + 1}>
                                {inmueble}
                            </option>
                        ))
                    )
                }
            </Select>

            <Button to={`/publicar/${seccion}/${route}`}>Ir</Button>
        </section>
    );
}

export default NuevaPublicacion;




/*

<div className="nueva-publicacion__cards">
            {
                secciones.map((card) => (
                    <Card
                        icon={card.icon}
                        title={card.title}
                        text={card.text}
                        button="Seleccionar"
                        url={card.url}
                        className="nueva-publicacion"
                    />
                ))
            }
        </div>


*/