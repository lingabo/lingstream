import { Link } from "react-router-dom";
import { Searchlist } from "./Searchlist";


function Navbar(props) {
  const profile = localStorage.getItem("images");
  return (
    <>
      <div className="">
        <nav className="navbar">
          <div className="menu-icon">
            <span className="fas fa-bars"></span>
          </div>
          <div className="logot">LingStream</div>
          <div className="nav-items">
            <li>
              <Link to={"/home"}>Accueil</Link>
            </li>
            <li>
              <Link to={"/abonnement"}>Abonnement</Link>
            </li>

            <li>
              <Link to={"/channel"}>channel</Link>
            </li>
          </div>

          <Searchlist />
          <div className="nav-items">
            <img src={profile} className="circle"  alt="userPhoto" />
            <li>
              <Link to={"/logout"}>Deconnexion</Link>
            </li>
            <div></div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
