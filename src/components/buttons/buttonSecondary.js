import './styles.scss'

export const ButtonSecondary = ({children, handleClick, type}) => {
    return(
        <button type={type} onClick={handleClick} className={"btn btn-secondary"}>{children}</button>
    )
}