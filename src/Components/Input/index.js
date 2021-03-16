import style from './style.module.css'

const Input = ({ type = "text", onChange, placeholder }) => {
    return (
        <div className={style.inputInner}>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className={style.input}
            />
        </div>
    )
}

export default Input