import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerStyle">
      <ul className="menuLinks">
        <li className="linkNav">
          <NavLink className="nav-link" to="/team">
            The Team
          </NavLink>
        </li>

        {/* News and Events tab */}
        {/* <li className="linkNav">
          <NavLink className="nav-link" to="/news">
            News and Events
          </NavLink>
        </li> */}

        <li className="linkNav">
          <NavLink className="nav-link" to="/services">
            Services
          </NavLink>
        </li>
        <li className="linkNav">
          <NavLink className="nav-link" to="/about">
            About Us
          </NavLink>
        </li>
        <li className="linkNav">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
