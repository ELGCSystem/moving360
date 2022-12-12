import { useEffect } from "react";
import { Button, Select } from "../../../components/index.js";
import ReactPlayer from 'react-player';
import { heroButtons } from "./HeroButtons.js";
import video from './Video360.mp4';
import './Hero.css';

const Hero = () => {

  useEffect(() => {
    const videoElement = document.querySelector("video");
    videoElement.play(); 
  }, []);

  return (
    <section className='hero'>

        <div className="video-container">
          <video
            className="video"
            src={video}
            muted
          />
        </div>

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
  )
};

export default Hero;
