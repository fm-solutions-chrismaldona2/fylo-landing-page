import Illustration from "@assets/images/illustrations/illustration-intro.png";
import Button from "@shared/components/Button/Button";
import styles from "./HeroSection.module.css";
import CurvedBgPattern from "../CurvedBgPattern/CurvedBgPattern";
import { AnimatePresence } from "motion/react";
import { useNotificationTimer } from "@shared/hooks/useNotificationTimer";
import NotificationPopup from "@shared/components/NotificationPopup/NotificationPopup";
import { useCallback } from "react";

const HeroInfo = {
  title: "All your files in one secure location, accesible anywhere.",
  description:
    "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.",
  image: Illustration,
};

const HeroSection = () => {
  const { title, description, image } = HeroInfo;

  const { isVisible, triggerNotification } = useNotificationTimer();

  const handleGetStarted = useCallback(() => {
    triggerNotification();
  }, [triggerNotification]);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <NotificationPopup
            message="This feature is not available yet!"
            type="info"
          />
        )}
      </AnimatePresence>

      <div className={styles.hero__wrapper}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <img
            src={image}
            alt="Illustration of people organizing and securing files."
            role="img"
            width={720}
            height={534}
            className={styles.hero__image}
          />
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title} id="hero-title">
              {title}
            </h1>
            <p className={styles.hero__description}>{description}</p>
            <Button
              variant="rounded"
              size="normal"
              className={styles.hero__button}
              aria-label="Get Started"
              title="Get Started"
              role="link"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>
        </section>
        <CurvedBgPattern className={styles.hero__bgPattern} />
      </div>
    </>
  );
};

export default HeroSection;
