import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.header__wrapper}>
      <header className={styles.header}>
        <a
          href="/"
          aria-label="Go to homepage"
          className={styles.logo__container}
        >
          <Logo className={styles.logo} />
        </a>
        <nav className={styles.nav}>
          <ul className={styles.nav__links}>
            <li>
              <a href="/" className={styles.nav__link}>
                Features
              </a>
            </li>
            <li>
              <a href="/" className={styles.nav__link}>
                Team
              </a>
            </li>
            <li>
              <a href="/" className={styles.nav__link}>
                Sign in
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
