import React from "react";
import { Button } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPhone, faRulerCombined, faArrows, faBed, faBathtub, faCar } from '@fortawesome/free-solid-svg-icons';
import { FaWhatsapp } from 'react-icons/fa'
import './Publicacion.css';

const Publicacion = (props) => (
    <div className="publicacion">
        <img className="publicacion__img" src={props.imagen} alt="Imagen principal de la publicación" />
        <h4>{props.precio}</h4>
        <p>{props.expensas}</p>
        <h4 className="publicacion__ubicacion">{props.ubicacion}</h4>
        <p className="publicacion__ciudad">{props.ciudad}</p>
        <p className="publicacion__tipo">{props.tipoPublicacion}</p>
        <ul>
            <li>
                <FontAwesomeIcon icon={faRulerCombined} /> {props.superficieTotal}
            </li>
            <li>
                <FontAwesomeIcon icon={faArrows} /> {props.superficieCubierta}
            </li>
            <li>
                <FontAwesomeIcon icon={faBed} /> {props.dormitorios}
            </li>
            <li>
                <FontAwesomeIcon icon={faBathtub} /> {props.banos}
            </li>
            <li>
                <FontAwesomeIcon icon={faCar} /> {props.cocheras}
            </li>
        </ul>
        <h5>{props.titulo}</h5>
        <p className="publicacion__descripcion">{props.descripcion}</p>
        <img className="publicacion__inmobiliaria" src={props.inmobiliaria} alt="Imagen o logo de la inmobiliaria oferente" />
        <div className="publicacion__buttons">
            <Button to="/">
                <FontAwesomeIcon icon={faHeart} />
            </Button>
            <Button to="/">
                <FontAwesomeIcon icon={faPhone} />
            </Button>
            <Button to="/">
                <FaWhatsapp />
            </Button>
            <Button to="/" type="blue">Contactar</Button>
        </div>
    </div>
);

export default Publicacion;