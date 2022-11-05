import React from 'react';
import {
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
  FaYoutube,
} from 'react-icons/fa/index.js';
import '../css/Footer.css';

import aaip from '../img/aaip.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__sections">
        <h4 className="sections__title">Más Moving360</h4>
        <ul>
          <li>
            <a href=".">Inmuebles en Argentina</a>
          </li>
          <li>
            <a href=".">Publica tu inmueble</a>
          </li>
          <li>
            <a href=".">Ayuda</a>
          </li>
          <li>
            <a href=".">Mapa del Sitio</a>
          </li>
          <li>
            <a href=".">Valuador</a>
          </li>
          <li>
            <a href=".">Garantías de Alquilar</a>
          </li>
        </ul>
      </div>
      <div className="footer__countries">
        <h4>Paises</h4>
        <ul>
          <li>
            <a href="./Argentina">Argentina</a>
          </li>
          <li>
            <a href="./Brasil">Brasil</a>
          </li>
          <li>
            <a href="./Chil">Chile</a>
          </li>
          <li>
            <a href="./Paraguay">Paraguay</a>
          </li>
          <li>
            <a href="./Uruguay">Uruguay</a>
          </li>
        </ul>
      </div>
      <div className="footer__social-networks">
        <h4 className="social-networks__title">Seguinos</h4>
        <ul>
          <li>
            <a href="https://twitter.com">
              <FaTwitter className="icon" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <FaInstagram className="icon" />
            </a>
          </li>
          <li>
            <a href="https://facebook.com">
              <FaFacebookSquare className="icon" />
            </a>
          </li>
          <li>
            <a href="https://youtube.com">
              <FaYoutube className="icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__programador">
        <h4>Web desarrollada por:</h4>
        <a
          className="footer__link footer__link--bigger"
          href='href="https://github.com/Eze-Guzman'
        >
          ELGCSystem
        </a>
        <img className="footer__data-fiscal" src={aaip} alt="Data-Fiscal" />
      </div>
    </div>
  );
};

export default Footer;
