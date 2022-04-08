import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to="/">Home</NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? styles.activeStyle : undefined}>
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? styles.activeStyle : styles.navLink}>
        Products
      </NavLink>
      <NavLink
        to="/user">
        <img src={user} alt="user" />
      </NavLink>
    </div>
  );
};

export default Navbar;
