import './InputForm.css'

const InputForm = ({ type, require, para, name }) => {
    return (
        <>
            <div class="inputGroup">
                <input type={type} required={require} autocomplete="off" />
                <label for={para}>{name}</label>
            </div>
        </>
    )
}

export default InputForm