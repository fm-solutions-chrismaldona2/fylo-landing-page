import styles from "./NotificationAlert.module.css";
import { Notification } from "@shared/types";
import {
  SuccessIcon,
  WarningIcon,
  InfoIcon,
  ErrorIcon,
} from "@shared/components/Icons/NotificationIcons";

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

const NotificationAlert = ({ message, type = "warning" }: Notification) => {
  return (
    <div role="alert" className={styles.alert}>
      <div className={styles.alert__icon}>{getIcon(type)}</div>
      <p className={styles.alert__message}>{message}</p>
    </div>
  );
};

export default NotificationAlert;
