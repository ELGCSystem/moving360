import { useState } from "react";
import { Select, Button } from "../../../components";
import { secciones } from "./Secciones";
import './NuevaPublicacion.css';

const NuevaPublicacion = () => {

    const [seccion, setSeccion] = useState("");
    const [idSeccion, setIdSeccion] = useState(-1);
    const [inmueble, setInmueble] = useState("");

    const seccionHandler = e => {
        setSeccion(e.target.value);
        idSeccionHandler(e.target.value);
    }

    const idSeccionHandler = (newSeccion) => {
        secciones.map((seccionItem) => {
            if (newSeccion == seccionItem.title)
                setIdSeccion(seccionItem.id -1);
        })
    }

    const inmuebleHandler = e => setInmueble(e.target.value);

    // Formatea el nombre de las secciones o inmuebles para poder utilizarlos en las rutas.
    const formatter = (route) => {
        return route
            .toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll("---", "-")
            .replaceAll("á", "a")
            .replaceAll("ó", "o");
    }

    return (
        <section className="nueva-publicacion">
            <h2>Nueva publicación</h2>
            <p className="subtitle">Selecciona la sección de inmuebles en la que se publicará.</p>

            <Select
                displayName="Seccion"
                name="seccion"
                onChange={
                    (e) => {
                        seccionHandler(e);
                        setInmueble("");
                    }}>
                <option value="">Seleccione una opcion...</option>
                {
                    secciones.map((seccion) => (
                        <option key={seccion.id}>
                            {seccion.title}
                        </option>
                    ))
                }   
            </Select>

            <Select
                displayName="Tipo de unidad"
                name="tipo-unidad"
                onChange={inmuebleHandler}>

                <option value="">Seleccione una opcion...</option>
                {
                    seccion ? 
                    (
                        secciones[idSeccion].inmuebles.map((inmueble) => (
                            <option>{inmueble}</option>
                        ))
                    ) : 
                    null
                }

            </Select>

            <Button to={`/publicar/${formatter(seccion)}/${formatter(inmueble)}`}>Ir</Button>

        </section>
    );
}

export default NuevaPublicacion;