import '../Input/Input.css';

const Select = ({ displayName, name, className, onClick, onChange, children}) => (
    <div className={`select-container ${className}`}>
        <label htmlFor={name} className="select__label">{displayName}</label>
        <select name={name} className="select" onClick={onClick} onChange={onChange}>
            {children}  
        </select>
    </div>   
);

export default Select;