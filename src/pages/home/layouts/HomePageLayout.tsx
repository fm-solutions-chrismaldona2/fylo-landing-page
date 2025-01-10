import styles from "./HomePageLayout.module.css";
import { LayoutProps } from "@shared/types";

function HomePageLayout({ children }: LayoutProps) {
  return <main className={styles.main}>{children}</main>;
}

export default HomePageLayout;
