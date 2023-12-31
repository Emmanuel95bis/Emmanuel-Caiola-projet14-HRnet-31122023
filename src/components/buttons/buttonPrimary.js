import "./styles.scss";

export const ButtonPrimary = ({ children, handleClick, type }) => {
  return (
    <button type={type} onClick={handleClick} className={"btn btn-primary"}>
      {children}
    </button>
  );
};
