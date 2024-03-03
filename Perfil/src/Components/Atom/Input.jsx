import '../Atom/Input.css'

// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, type, width, height }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            style={{
                width: `${width}%`,
                height: `${height}%`
            }}
        />
    );
};

export default Input;