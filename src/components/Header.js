import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  let menu;

  if (menuOpen) {
    // menu = <div className="test-colour">test</div>;
    menu = (
      <div className="menu-container">
        <div className="headerStyle">
          <ul className="menuLinks">
            <li className="linkNav">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="linkNav">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="linkNav">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>

            <li className="linkNav">
              <NavLink className="nav-link" to="/team">
                The Team
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="hamburger-menu-container">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger-menu"
        >
          Menu
        </button>
      </div>
      {/* <div>
        <div className="headerStyle">
          <ul className="menuLinks">
            <li className="linkNav">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="linkNav">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="linkNav">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>

            <li className="linkNav">
              <NavLink className="nav-link" to="/team">
                The Team
              </NavLink>
            </li>
          </ul>
        </div>
      </div> */}
      {menu}
    </>
  );
};

export default Header;
