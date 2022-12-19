import './Input.css';

const Input = (props) => (
    <div className={`${props.type}-container ${props.className}`}>
        <label
            htmlFor={props.name}
            className={`${props.type}__label`}>
            {props.displayName}
        </label>
        <input
            type={props.type}
            name={props.name}
            className={props.type}
            onChange={props.onChange}
            value={props.value}
            placeholder={props.placeholder}
            required={props.required}
        />
    </div>
);

export default Input;