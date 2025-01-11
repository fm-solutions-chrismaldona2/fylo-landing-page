import styles from "./StayProductiveSection.module.css";
import Illustration from "@assets/images/illustrations/illustration-stay-productive.png";

const StayProductiveSection = () => {
  return (
    <section className={styles.section}>
      <img
        src={Illustration}
        alt="Productive people illustration."
        width={615}
        height={465}
        className={styles.section__image}
      />
      <div className={styles.section__text}>
        <h2 className={styles.section__title}>
          Stay productive, wherever you are
        </h2>
        <p className={styles.section__description}>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all your file storage needs.
        </p>
        <p className={styles.section__description}>
          Securely share files and folders with friends, familly and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="#" className={styles.section__link} role="link">
          See how Fylo works
        </a>
      </div>
    </section>
  );
};

export default StayProductiveSection;
