import styles from "./BaseLayout.module.css";
import NavBar from "@shared/components/NavBar/NavBar";
import Footer from "@shared/components/Footer/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <div role="region" className={styles.layout}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
