import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import UnderlinedLink from "@shared/components/UnderlinedLink/UnderlinedLink";

const NavBar = () => {
  return (
    <div className={styles.header__wrapper}>
      <header className={styles.header}>
        <a
          href="#"
          aria-label="Go to homepage"
          className={styles.logo__container}
        >
          <Logo className={styles.logo} />
        </a>
        <nav className={styles.nav}>
          <ul className={styles.nav__links}>
            <li>
              <UnderlinedLink href="#">Features</UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink href="#">Team</UnderlinedLink>
            </li>
            <li>
              <UnderlinedLink href="#">Sign in</UnderlinedLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
