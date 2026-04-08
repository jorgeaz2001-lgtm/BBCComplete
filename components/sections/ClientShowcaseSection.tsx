"use client";

import { useMemo, useState } from "react";
import styles from "@/components/sections/ClientShowcaseSection.module.css";

type TestimonialData = {
  heading: string;
  quote: string;
  author: string;
};

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

type ClientShowcaseSectionProps = {
  testimonial: TestimonialData;
  members: TeamMember[];
};

export function ClientShowcaseSection({ testimonial, members }: ClientShowcaseSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMember = useMemo(() => members[activeIndex] ?? members[0], [members, activeIndex]);

  if (!activeMember) {
    return null;
  }

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.testimonial}>
          <h2>{testimonial.heading}</h2>
          <blockquote>{testimonial.quote}</blockquote>
          <p className={styles.author}>- {testimonial.author}</p>
        </div>

        <article className={styles.carousel}>
          <div className={styles.placeholder} aria-hidden="true" />
          <div className={styles.meta}>
            <h3>{activeMember.name}</h3>
            <p>{activeMember.role}</p>
          </div>
          <div className={styles.controls}>
            <button type="button" onClick={goPrev} aria-label="Cliente anterior">
              ‹
            </button>
            <span>
              {activeIndex + 1} / {members.length}
            </span>
            <button type="button" onClick={goNext} aria-label="Siguiente cliente">
              ›
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
