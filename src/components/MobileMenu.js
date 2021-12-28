import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <ul>
        <li>
          <NavLink className="nav-link" to="/team">
            The Team
          </NavLink>
        </li>

        <li>
          <NavLink className="nav-link" to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
