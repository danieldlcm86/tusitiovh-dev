import './InputForm.css'

const InputForm = ({ type, require, para, name, label }) => {
    return (
        <>
            <div className="inputGroup">
                <input type={type} required={require} autoComplete="off" name={name}/>
                <label htmlFor={para}>{label}</label>
            </div>
        </>
    )
}

export default InputForm