import React, { useState, useEffect } from 'react'
import { Button, Select } from "../../../components";
import { heroButtons } from "./HeroButtons.js";
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => (
  <section className='hero'>
    <div className='hero__buttons'>
      <h2>¡Encontrá tu lugar en el mundo!</h2>
      {
        heroButtons.map((button) => (
          <Button
            to={button.url}
            type={button.type}
            className={button.class}
          >
            {button.text}
          </Button>
        ))
      }

      <Select>
        {
          heroButtons.map((button) => (
            <option value={button.id}>
              {button.text}
            </option>
          ))
        }
      </Select>
    </div>
  </section>
);

export default Hero;
