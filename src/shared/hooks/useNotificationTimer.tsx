import { useState, useCallback } from "react";

export const useNotificationTimer = (duration = 3500) => {
  const [isVisible, setIsVisible] = useState(false);

  const triggerNotification = useCallback(() => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), duration);
  }, [duration]);

  return { isVisible, triggerNotification };
};
