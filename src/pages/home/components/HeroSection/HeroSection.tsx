import Illustration from "@src/assets/images/illustration-intro.png";
import Button from "@shared/components/Button/Button";
import styles from "./HeroSection.module.css";
import BackgroundPattern from "../BackgroundPattern/BackgroundPattern";

const HeroInfo = {
  title: "All your files in one secure location, accesible anywhere.",
  description:
    "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.",
  image: Illustration,
};

function HeroSection() {
  const { title, description, image } = HeroInfo;

  return (
    <div className={styles.hero__wrapper}>
      <section
        className={styles.hero}
        role="region"
        aria-labelledby="hero-title"
      >
        <img
          src={image}
          alt="Illustration of people organizing and securing files."
          role="img"
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
          >
            Get Started
          </Button>
        </div>
      </section>
      <BackgroundPattern className={styles.hero__bgPattern} />
    </div>
  );
}

export default HeroSection;
