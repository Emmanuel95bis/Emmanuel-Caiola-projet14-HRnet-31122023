import "./style.scss";

export function Input({ association, text, type, onChange }) {
  return (
    <>
      <label htmlFor={association}>{text}</label>
      <input
        id={association}
        type={type}
        onChange={(event) => onChange(event)}
      />
    </>
  );
}
