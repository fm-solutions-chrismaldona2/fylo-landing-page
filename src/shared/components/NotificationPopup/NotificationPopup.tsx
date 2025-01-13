import styles from "./NotificationPopup.module.css";
import {
  SuccessIcon,
  WarningIcon,
  InfoIcon,
  ErrorIcon,
} from "@shared/components/Icons/NotificationIcons";
import { Notification } from "@shared/types";
import { motion } from "motion/react";

const getIcon = (type: Notification["type"]) => {
  switch (type) {
    case "success":
      return <SuccessIcon />;
    case "warning":
      return <WarningIcon />;
    case "info":
      return <InfoIcon />;
    case "error":
      return <ErrorIcon />;
    default:
      return null;
  }
};

const variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const NotificationPopup = ({ message, type = "info" }: Notification) => {
  return (
    <motion.div
      role="alert"
      aria-live="assertive"
      className={styles.alert}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{
        duration: 0.35,
        type: "spring",
      }}
    >
      <div className={styles.alert__icon}>{getIcon(type)}</div>
      <p className={styles.alert__message}>{message}</p>
    </motion.div>
  );
};

export default NotificationPopup;
