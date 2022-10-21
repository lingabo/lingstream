import { Link } from "react-router-dom";
import Logout from "./Logout";
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
            {/* <li>
              <Link to={"/abonnement"}>Abonnement</Link>
            </li> */}

            <li>
              <Link to={"/channel"}>Abonnement</Link>
            </li>
          </div>

          <Searchlist />
          <div className="nav-items">
            <img src={profile} className="circle"  alt="userPhoto" />
            <li>
              <div>
                <Logout/>
              </div>
            </li>
            <div></div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
