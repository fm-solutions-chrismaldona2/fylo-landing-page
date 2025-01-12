import styles from "./Footer.module.css";
import Logo from "@shared/components/Logo/Logo";

import {
  LocationIcon,
  PhoneIcon,
  EmailIcon,
} from "@shared/components/Icons/CustomIcons";

import {
  Facebookicon,
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
} from "@shared/components/Icons/SocialMediaIcons";

import CustomLink from "@shared/components/CustomLink/CustomLink";

const Footer = () => {
  return (
    <>
      <div className={styles.footer__wrapper}>
        <footer className={styles.footer} role="contentinfo">
          <header className={styles.footer__header}>
            <a href="#" aria-label="Go to homepage">
              <Logo className={styles.footer__logo} />
            </a>
          </header>

          <main className={styles.footer__body}>
            <section
              className={`${styles.footer__section} ${styles.footer__location}`}
            >
              <div className={styles.footer__locationInfo}>
                <LocationIcon
                  className={styles.footer__icon}
                  aria-hidden="true"
                />
                <p
                  aria-label="Location"
                  className={styles.footer__locationText}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </section>

            <section
              className={`${styles.footer__section} ${styles.footer__contact}`}
            >
              <div className={styles.footer__contactInfo}>
                <PhoneIcon className={styles.footer__icon} aria-hidden="true" />
                <CustomLink href="tel:+15431234567" aria-label="Contact number">
                  +1-543-123-4567
                </CustomLink>
              </div>
              <div className={styles.footer__contactInfo}>
                <EmailIcon className={styles.footer__icon} aria-hidden="true" />
                <CustomLink
                  href="mailto:example@fylo.com"
                  aria-label="Contact email"
                >
                  example@fylo.com
                </CustomLink>
              </div>
            </section>

            <section
              className={`${styles.footer__section} ${styles.footer__links}`}
            >
              <ul className={styles.footer__linkList}>
                <li>
                  <CustomLink href="#">About Us</CustomLink>
                </li>
                <li>
                  <CustomLink href="#">Jobs</CustomLink>
                </li>
                <li>
                  <CustomLink href="#">Press</CustomLink>
                </li>
                <li>
                  <CustomLink href="#">Blog</CustomLink>
                </li>
              </ul>
              <ul className={styles.footer__linkList}>
                <li>
                  <CustomLink href="#">Contact Us</CustomLink>
                </li>
                <li>
                  <CustomLink href="#">Terms</CustomLink>
                </li>
                <li>
                  <CustomLink href="#">Privacy</CustomLink>
                </li>
              </ul>
            </section>

            <section
              className={`${styles.footer__section} ${styles.footer__social}`}
            >
              <ul className={styles.footer__socialList}>
                <li>
                  <a
                    href="#"
                    aria-label="Visit our Facebook page"
                    className={styles.footer__iconWrapper}
                  >
                    <Facebookicon
                      aria-hidden="true"
                      className={styles.footer__icon}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Visit our Twitter page"
                    className={styles.footer__iconWrapper}
                  >
                    <TwitterIcon
                      aria-hidden="true"
                      className={styles.footer__icon}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Visit our Instagram page"
                    className={styles.footer__iconWrapper}
                  >
                    <InstagramIcon
                      aria-hidden="true"
                      className={styles.footer__icon}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/chrismaldona2"
                    target="_blank"
                    aria-label="Visit developer github profile"
                    className={styles.footer__iconWrapper}
                  >
                    <GithubIcon
                      aria-hidden="true"
                      className={styles.footer__icon}
                    />
                  </a>
                </li>
              </ul>
            </section>
          </main>
        </footer>
      </div>
    </>
  );
};

export default Footer;
