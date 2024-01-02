import { Link } from "react-router-dom";

import "./styles.scss";
import flower from "../../assets/flower.png";
export const Header = () => {
  return (
    <header>
      <div className="header-first-row">
        <img src={flower} alt="Logo wealth Health" />
        <h1>HRnet</h1>
      </div>
      <nav className="header-link">
        <Link to="/">
          <p>Create Employee</p>
        </Link>
        <Link to="/Viewemployees">
          <p>View Current Employees</p>
        </Link>
      </nav>
    </header>
  );
};
