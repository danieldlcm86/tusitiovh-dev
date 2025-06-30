import './InputForm.css'

const InputForm = ({ type, require, para, name }) => {
    return (
        <>
            <div className="inputGroup">
                <input type={type} required={require} autoComplete="off" />
                <label htmlFor={para}>{name}</label>
            </div>
        </>
    )
}

export default InputForm