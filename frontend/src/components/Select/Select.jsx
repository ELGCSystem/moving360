import '../Input/Input.css';

const Select = ({ displayName, name, className, onClick, children}) => (
    <div className={`select-container ${className}`}>
        <label htmlFor={name} className="select__label">{displayName}</label>
        <select name={name} className="select" onClick={onClick}>
            {children}  
        </select>
    </div>   
);

export default Select;