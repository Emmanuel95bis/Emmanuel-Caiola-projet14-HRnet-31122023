import PropTypes from "prop-types";
import './styles.scss'

export const Title = (props) => {
    switch (props.type) {
        case 'h1' :
            return <h1>{props.content}</h1>
        case 'h2' :
            return <h2>{props.content}</h2>
        case 'h3' :
            return <h3>{props.content}</h3>
        case 'h4' :
            return <h4>{props.content}</h4>
        case 'h5' :
            return <h5>{props.content}</h5>
        case 'h6' :
            return <h6>{props.content}</h6>
        default :
            return <h2>{props.content}</h2>
    }
}

Title.propTypes = {
    type: PropTypes.oneOf(['h1','h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
    content: PropTypes.string.isRequired,
}