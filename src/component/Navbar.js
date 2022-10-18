import { Link } from "react-router-dom";
import { Searchlist } from "./Searchlist";

function Navbar(props) {
  return (
    <>
      <div className="">
        <nav>
          <div className="menu-icon">
            <span className="fas fa-bars"></span>
          </div>
          <div className="logot">LingStream</div>
          <div className="nav-items">
            <li>
              <Link to={"/home"}>
                <a href="#">Accueil</a>
              </Link>
            </li>
            <li>
              <Link to={"/abonnement"}>
                <a href="#">Abonnement</a>
              </Link>
            </li>
          </div>

          <Searchlist />
          <div className="nav-items">
            <img src="" className="image-circle" alt="userPhoto" />
            <li>
              <Link to={"/logout"}>
                <a href="#">Deconnexion</a>
              </Link>
            </li>
            <div></div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
