import "./style.scss";

export function Select({ association, text, options, onChange, aria }) {
  return (
    <>
      <label htmlFor={association}>{text}</label>
      <select
        name={association}
        id={association}
        aria-label={aria}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((element, index) => (
          <option key={index} value={element}>
            {element}
          </option>
        ))}
      </select>
    </>
  );
}
