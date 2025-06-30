import './ButtonTransition.css'

const ButtonTransition = ({ children, onClick, className = '' }) => {
    return (
        <>
        <button className={`button ${className}`} onClick={onClick}>
            { children }
        </button>
        </>
    )
}

export default ButtonTransition;