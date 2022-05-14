import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "13px",
  margin: "0 6px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
}

function NavBar() {
  return (<div class="navbar">
    <NavLink exact to="/" style={linkStyles} activeStyle={{
      background: "lightgreen",
    }}>Home</NavLink>

    <NavLink exact to="/movies" style={linkStyles} activeStyle={{
      background: "lightgreen",
    }}>Movies</NavLink>

    <NavLink
      exact to="/directors" style={linkStyles} activeStyle={{
        background: "lightgreen",
      }}>Directors</NavLink>
    <NavLink
      exact to="/actors" style={linkStyles} activeStyle={{
        background: "lightgreen",
      }}>Actors</NavLink>

  </div>);
}

export default NavBar;
