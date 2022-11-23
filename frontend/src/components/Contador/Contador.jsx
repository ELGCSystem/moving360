import React, { useState } from "react";
import './Contador.css';

const Contador = ({ displayName, name, max, min, disabled }) => {

    min = min ? min : 0;
    disabled = disabled ? true : false;

    const [count, setCount] = useState(parseInt(min));

    const manageCount = (newCount) => {
        if (newCount >= min && newCount <= max && !disabled)
            setCount(newCount)
    }

    return (
        <div className="contador">
            <label htmlFor={name}>{displayName}</label>
            <div className="contador__buttons">
                <div onClick={() => manageCount(count - 1)}>-</div>
                <input value={count} readOnly name={name}/>
                <div onClick={() => manageCount(count + 1)}>+</div>
            </div>
        </div>
    );
}

export default Contador;