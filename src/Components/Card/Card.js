import style from './style.module.css'

const Card = ({id, name, username, body, title, ...props}) => {
    return (
        <div
            className={style.cardItem}
        >
            <h3>{title}</h3>
            <p>{body}</p>
            <div>
                <span>Name: {name}</span>
                <span>User Name: {username}</span>
            </div>
        </div>
    )
}

export default Card