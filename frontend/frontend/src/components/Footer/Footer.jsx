import React from 'react'
import { sections, countries} from './FooterLinks.js';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FaInstagram, FaTwitter, FaFacebookSquare, FaYoutube} from "react-icons/fa";

import aaip from './aaip.png';

const FooterLink = ({ to, className, children }) => (
  <li className={`footer__item ${className}`}>
      <Link to={to} className='footer__link'>
          {children}
      </Link>
  </li>
);

const Footer = () => (
  <footer className='footer'>

    <div className='footer__sections'>
      <h4>Más Moving360</h4>
      <ul>
        {
          sections.map((link) => (
            <FooterLink
              key={link.id}
              to={link.url}
            >
              {link.content}
            </FooterLink>
          ))
        }
      </ul>
    </div>

    <div className='footer__countries'>
      <h4>Paises</h4>
      <ul>
        {
          countries.map((link) => (
            <FooterLink
              key={link.id}
              to={link.url}
            >
              {link.content}
            </FooterLink>
          ))
        }
      </ul>
    </div>

    <div className='footer__social-networks'>
      <h4>Seguinos</h4>
      <ul>
        <FooterLink to="/">
          <FaTwitter className='icon'/>
        </FooterLink>
        <FooterLink to="/">
          <FaInstagram className='icon'/>
        </FooterLink>
        <FooterLink to="/">
          <FaFacebookSquare className='icon'/>
        </FooterLink>
        <FooterLink to="/">
          <FaYoutube className='icon'/>
        </FooterLink>
      </ul>
    </div>

    <div className='footer__programador'>
      <h4>Web desarrollada por:</h4>
      <a className='footer__link' href="https://github.com/Eze-Guzman">ELGCSystem</a>
      <img className='footer__data-fiscal' src={aaip} alt='Data-Fiscal'/>
    </div>

  </footer>
);

export default Footer;
