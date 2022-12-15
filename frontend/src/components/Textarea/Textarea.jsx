import './Textarea.css';

const Textarea = ({ displayName, name, className, onChange }) => (
    <div className={`textarea-container ${className}`}>
        <label
            htmlFor={name}
            className="textarea__label">
            {displayName}
        </label>
        <textarea
            name={name} 
            className="textarea" 
            onChange={onChange} 
            >    
        </textarea>
    </div>
);

export default Textarea;