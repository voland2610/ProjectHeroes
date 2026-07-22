import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Characters
      </NavLink>

      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Favorites
      </NavLink>
    </nav>
  </header>
);
