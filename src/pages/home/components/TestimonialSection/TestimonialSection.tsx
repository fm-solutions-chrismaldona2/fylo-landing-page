import styles from "./TestimonialSection.module.css";

import SatishPatelAvatar from "@assets/images/avatars/profile-1.jpg";
import BruceMcKenzieAvatar from "@assets/images/avatars/profile-2.jpg";
import IvaBoydAvatar from "@assets/images/avatars/profile-3.jpg";
import DefaultAvatar from "@assets/images/avatars/default.png";

import BgQuotes from "@assets/images/illustrations/bg-quotes.png";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Testimonial {
  id: number;
  author: {
    avatar?: string;
    name: string;
    title: string;
  };
  message: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: {
      avatar: SatishPatelAvatar,
      name: "Satish Patel",
      title: "Founder & CEO, Huddle",
    },
    message:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
  {
    id: 2,
    author: {
      avatar: BruceMcKenzieAvatar,
      name: "Bruce McKenzie",
      title: "Founder & CEO, Huddle",
    },
    message:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
  {
    id: 3,
    author: {
      avatar: IvaBoydAvatar,
      name: "Iva Boyd",
      title: "Founder & CEO, Huddle",
    },
    message:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
];

const Testimonial = ({ id, message, author }: Testimonial) => {
  return (
    <article className={styles.testimonial} id={`testimonial-${id}`}>
      <p className={styles.testimonial__message}>{message}</p>
      <footer className={styles.testimonial__footer}>
        <img
          src={author.avatar || DefaultAvatar}
          alt={`${author.name}'s profile picture.`}
          width={32}
          height={32}
          className={styles["testimonial__author-avatar"]}
        />
        <address className={styles["testimonial__author-info"]}>
          <span className={styles["testimonial__author-name"]}>
            {author.name}
          </span>
          <span className={styles["testimonial__author-title"]}>
            {author.title}
          </span>
        </address>
      </footer>
    </article>
  );
};

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className={styles.testimonials__wrapper}>
      <motion.div
        className={styles["testimonials__inner-wrapper"]}
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView && "visible"}
      >
        <img
          src={BgQuotes}
          alt=""
          role="presentation"
          className={styles["testimonials__bg-quotes"]}
        />
        {testimonials.map(({ id, message, author }) => (
          <Testimonial key={id} id={id} message={message} author={author} />
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialSection;

const container = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, type: "spring" },
  },
};
