import logo from "../images/butterflylogo.png";
import { MdFavoriteBorder } from "react-icons/md";
import {GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="container-fluid m-0 p-0">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              <img src={logo} width="150" height="45" />
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" >
                  Contact
                </Link>
              </li>
            </ul>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/favorite" className="nav-link">
                  <MdFavoriteBorder />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                  <GrCart/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
  );
}
