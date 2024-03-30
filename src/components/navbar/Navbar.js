import { React, memo } from "react";
import { Routers } from "../../static/Router";
import { NavLink } from "react-router-dom";
import navLogo from "../../assets/images/Logo.svg";
import Home from "../../pages/home/Home";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="navbar__logo" to="/">
        <img src={navLogo} alt="" />
      </NavLink>
      <ul className="nav__items">
        {Routers?.map((el) => (
          <NavLink key={el.id} className="navbar__link" to={el.path}>
            {el.title}
          </NavLink>
        ))}
        <button className="navbtn">Clone project</button>
      </ul>
    </nav>
  );
}

export default memo(Navbar);
