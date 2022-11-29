import './Textarea.css';

const Textarea = ({ displayName, name, className }) => (
    <div className={`textarea-container ${className}`}>
        <label
            htmlFor={name}
            className="textarea__label">
            {displayName}
        </label>
        <textarea name={name} className="textarea" required></textarea>
    </div>
);

export default Textarea;