import { ReactNode } from "react";
import styles from "./FeaturesSection.module.css";
import {
  AccessAnywhereIcon,
  SecurityIcon,
  CollaborationIcon,
  AnyFileIcon,
} from "@shared/components/Icons/Icons";

interface FeatureItemProps {
  id?: number;
  icon: ReactNode;
  title: string;
  description: string;
}

const features: FeatureItemProps[] = [
  {
    id: 1,
    icon: <AccessAnywhereIcon className={styles.feature__icon} />,
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    id: 2,
    icon: <SecurityIcon className={styles.feature__icon} />,
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    id: 3,
    icon: <CollaborationIcon className={styles.feature__icon} />,
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    id: 4,
    icon: <AnyFileIcon className={styles.feature__icon} />,
    title: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <article className={styles.feature}>
      {icon}
      <h2 className={styles.feature__title}>{title}</h2>
      <p className={styles.feature__description}>{description}</p>
    </article>
  );
};

const FeaturesSection = () => {
  const groupedFeatures = [];
  for (let i = 0; i < features.length; i += 2) {
    groupedFeatures.push(features.slice(i, i + 2));
  }

  return (
    <section className={styles.features__container}>
      {groupedFeatures.map((group, index) => (
        <div key={index} className={styles.features__group}>
          {group.map((item) => (
            <FeatureItem {...item} key={item.id} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
