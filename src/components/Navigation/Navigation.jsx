import { NavLink } from "react-router-dom";
import c from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={c.navigation_list}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
}
