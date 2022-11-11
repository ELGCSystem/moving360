import React from 'react';
import './LogBenefits.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "../../../components";
import { logBenefits } from './LogBenefits';
import bgImg from './moving360.png';

const LogBenefits = () => {
  return (
    <section className='log-benefits'>
      <h2 className='log-benefits__title'>¡Simplifica tus busquedas!</h2>
      <h3 className='log-benefits__subtitle'>Beneficios de registrarse:</h3>
      <ul className='benefits-list'>
        {
          logBenefits.map((benefit) => (
            <li className='benefit'>
              <FontAwesomeIcon icon={benefit.icon} /> {benefit.content}
            </li>
          ))
        }
      </ul>  
      <Button to='/registrarse' type='biggest'>Registrarse</Button>
    </section>
  )
}

export default LogBenefits;
