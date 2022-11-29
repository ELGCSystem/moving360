import './Input.css';

const Input = ({ displayName, name, type, className, value, onChange }) => (
    <div className={`${type}-container ${className}`}>
        <label
            htmlFor={name}
            className={`${type}__label`}>
            {displayName}
        </label>
        <input
            type={type}
            name={name}
            className={type}
            onChange={onChange}
            value={value}
            required
        />
    </div>
);

export default Input;