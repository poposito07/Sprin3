import '../Atom/Button.css'

// eslint-disable-next-line react/prop-types
const Button = ({ width, height, buttonColor, textColor, content }) => {
    return (
        <button
            style={{
                width: `${width}%`,
                height: `${height}%`,
                backgroundColor: buttonColor,
                color: textColor
            }}
        >
            {content}
        </button>
    );
};

export default Button;