import React, { useState } from "react";
import './Contador.css';

const Contador = ({ displayName, name, max, min, disabled, onChange }) => {

    min = min ? min : 0;
    disabled = disabled ? true : false;

    const [count, setCount] = useState(parseInt(min));

    const manageCount = (newCount, event) => {
        if (newCount >= min && newCount <= max && !disabled) {
            setCount(newCount);
            onChange(newCount, name);
        }
    }

    return (
        <div className="contador">
            <label htmlFor={name}>{displayName}</label>
            <div className="contador__buttons">
                <div onClick={(e) => manageCount(count - 1)}>-</div>
                <input value={count} readOnly name={name} />
                <div onClick={(e) => manageCount(count + 1)}>+</div>
            </div>
        </div>
    );
}

export default Contador;