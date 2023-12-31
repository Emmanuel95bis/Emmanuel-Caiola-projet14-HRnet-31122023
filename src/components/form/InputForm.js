import PropTypes from "prop-types";

export const InputForm = (props) => {
    return (
        <>
            <div className="form-group">
                <label>{props.label}</label>
                {props.type !== 'select' ? (
                    <input type={props.type} name={props.name ?? props.label.toLowerCase().replaceAll(' ', '_')}
                           onChange={props.handleChange} value={props.value ?? undefined}/>
                ) : (
                    <>
                        <select onChange={props.handleChange} defaultValue={props.defaultValue.id}>
                            {props.options.map((e, i) => {
                                return <option key={i} value={e.id}>{e.breed}</option>
                            })}
                        </select>
                    </>
                )}
                {props.error ? (
                    <div className="invalid">{props.error}</div>
                ) : null}
            </div>
        </>
    )
}

InputForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
}