import './styles.scss'
import PropTypes from "prop-types";


export const Box = (props) => {
    return(
        <>
            <div onClick={props.handleClick ?? props.handleClick} className={`box${props.class ? ` ${props.class}` : ""}`}>
                {props.children}
            </div>
        </>
    )
}

Box.propTypes = {
    class: PropTypes.string,
    handleClick: PropTypes.func
}