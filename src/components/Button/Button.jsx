import './Button.css'

const Button = ({ text, onClick }) => {
    return (
        <>
            <button className="tusitiovh-button" onClick={onClick}>
                {text}
            </button>
        </>
    )
}

export default Button