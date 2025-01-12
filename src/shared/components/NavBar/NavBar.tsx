import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import CustomLink from "@shared/components/CustomLink/CustomLink";

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
              <CustomLink href="#" underlineOnHover>
                Features
              </CustomLink>
            </li>
            <li>
              <CustomLink href="#" underlineOnHover>
                Team
              </CustomLink>
            </li>
            <li>
              <CustomLink href="#" underlineOnHover>
                Sign in
              </CustomLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
