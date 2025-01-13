import Button from "@shared/components/Button/Button";
import styles from "./EarlyAccessForm.module.css";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "motion/react";
import { useNotificationTimer } from "@shared/hooks/useNotificationTimer";
import NotificationPopup from "@shared/components/NotificationPopup/NotificationPopup";
import { useCallback } from "react";

interface FormValues {
  email: string;
}

const EarlyAccessForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onTouched" });

  const { isVisible, triggerNotification } = useNotificationTimer();

  const onSubmit = useCallback(() => {
    triggerNotification();
  }, [triggerNotification]);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <NotificationPopup
            message="Your submission was successful! We'll notify you soon."
            type="success"
          />
        )}
      </AnimatePresence>

      <section className={styles.form__container}>
        <header className={styles.form__header}>
          <h2 className={styles.form__title}>Get early access today</h2>
          <p className={styles.form__description}>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </header>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={styles["form__input-wrapper"]}>
            <input
              type="email"
              id="email"
              placeholder="email@example.com"
              autoComplete="off"
              className={styles.form__input}
              {...register("email", {
                required: "Email can't be empty",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.span
                  id="email-error"
                  className={styles.form__error}
                  role="alert"
                  aria-live="assertive"
                  variants={error}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {errors.email.message}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <Button
            variant="rounded"
            type="submit"
            className={styles.form__button}
          >
            Get Started For Free
          </Button>
        </form>
      </section>
    </>
  );
};

export default EarlyAccessForm;

const error = {
  hidden: {
    opacity: 0,
    y: -5,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};
