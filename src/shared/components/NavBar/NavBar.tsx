import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <nav className={styles.nav}>
        <ul className={styles.nav__links}>
          <li>
            <a href="" className={styles.nav__link}>
              Features
            </a>
          </li>
          <li>
            <a href="" className={styles.nav__link}>
              Team
            </a>
          </li>
          <li>
            <a href="" className={styles.nav__link}>
              Sign in
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
