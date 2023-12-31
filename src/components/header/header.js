import { Link } from "react-router-dom";

import "./styles.scss";
import flower from "../../assets/flower.png";

export const Header = () => {
  return (
    <header>
      <header_firstrow>
        <img src={flower} alt="Logo wealth Health" />
        <h1>HRnet</h1>
      </header_firstrow>
      <header_link>
        <Link to="/">
          <p>Create Employee</p>
        </Link>

        <Link to="Viewemployees">
          <p>View Current Employees</p>
        </Link>
      </header_link>
    </header>
  );
};
