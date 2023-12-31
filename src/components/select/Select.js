import "./style.scss";

export function Select({ association, text, options, onChange }) {
  return (
    <>
      <label htmlFor={association}>{text}</label>
      <select
        name={association}
        id={association}
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
