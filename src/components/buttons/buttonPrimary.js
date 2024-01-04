import "./styles.scss";

export const ButtonPrimary = ({ children, handleClick, type, aria }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={"btn btn-primary"}
      aria-label={aria}
    >
      {children}
    </button>
  );
};
