import "./Error.css";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <Header />
      <div className="error-message">
        <h1>404</h1>
        <span>"Oups! La page que vous demandez n'existe pas."</span>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
