import './InputForm.css'

const InputForm = ({ type, required, para, name, label, asterisco }) => {
    return (
        <>
            <div className="inputGroup">
                <input placeholder=" " type={type} required={required} autoComplete="off" name={name}/>
                <label htmlFor={para}>{label}{asterisco}</label>
            </div>
        </>
    )
}

export default InputForm