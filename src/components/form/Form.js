import './styles.scss'
import PropTypes from "prop-types";
import {ButtonPrimary} from "../buttons/buttonPrimary";

export const Form = (props) => {

    return (
        <div className="form-layout">
                <form onSubmit={props.handleSubmit}>
                    {props.children}
                    <div className="form-group">
                        { props.btnSubmit && ( <ButtonPrimary type={'submit'}>{props.titleSubmit}</ButtonPrimary>)}
                    </div>
                </form>
            </div>
    )
}

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    titleSubmit: PropTypes.string.isRequired,
    btnSubmit: PropTypes.bool
}