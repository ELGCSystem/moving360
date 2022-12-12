import React, { useState } from "react";
import { Contador } from '..';

//<Contador name={name}/>

const Filtro = ({ name }) => {

    const [percentage, setPercentage] = useState(0);
    

    return (
        <div className='filtro'>
            <label for={name}>{name}</label>
            <label for={name}>{}</label>
            <input type="range" name="" id="" />
        </div>
    );
}

export default Filtro;