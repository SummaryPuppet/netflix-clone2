import "./navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="nav-bar">
      <nav>
        <ul className="nav-bar-list">
          <img className="logo" src={logo} alt="logo" />
          <li className="nav-bar-item enable">Home</li>
          <li className="nav-bar-item">Series</li>
          <li className="nav-bar-item">Movies</li>
          <li className="nav-bar-item">My list</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
