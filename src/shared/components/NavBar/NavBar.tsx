import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import CustomLink from "@shared/components/CustomLink/CustomLink";
import { forwardRef, useRef, useState } from "react";
import { MenuIcon } from "@shared/components/Icons/CustomIcons";
import { motion, AnimatePresence } from "motion/react";
import { useClickOutside } from "@shared/hooks/useClickOutside";

const NavBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsMenuVisible((prev) => !prev);
  };

  useClickOutside(menuRef, () => setIsMenuVisible(false), btnRef);

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

        <div className={styles["nav--mobile"]}>
          <button
            className={styles["nav-btn--mobile"]}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            title="Toggle menu"
            ref={btnRef}
          >
            <MenuIcon className={styles["nav-btn__icon--mobile"]} />
          </button>

          <AnimatePresence>
            {isMenuVisible && <MobileMenu ref={menuRef} />}
          </AnimatePresence>
        </div>
      </header>
    </div>
  );
};

export default NavBar;

const MobileMenu = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <motion.nav
      className={styles["nav__menu--mobile"]}
      initial={{ scale: 0.75, opacity: 0, translateY: -50 }}
      animate={{ scale: 1, opacity: 1, translateY: 0 }}
      exit={{ scale: 0.75, opacity: 0, translateY: -60 }}
      transition={{ duration: 0.35, type: "spring" }}
      ref={ref}
    >
      <ul className={styles["nav__links--mobile"]}>
        <li>
          <CustomLink href="#" className={styles["nav__link--mobile"]}>
            Features
          </CustomLink>
        </li>
        <li>
          <CustomLink href="#" className={styles["nav__link--mobile"]}>
            Team
          </CustomLink>
        </li>
        <li>
          <CustomLink href="#" className={styles["nav__link--mobile"]}>
            Sign in
          </CustomLink>
        </li>
      </ul>
    </motion.nav>
  );
});
