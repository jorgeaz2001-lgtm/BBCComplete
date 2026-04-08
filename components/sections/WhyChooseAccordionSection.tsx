"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import styles from "@/components/sections/WhyChooseAccordionSection.module.css";

type WhyChooseItem = {
  title: string;
  description: string;
};

type WhyChooseAccordionSectionProps = {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  items: WhyChooseItem[];
};

export function WhyChooseAccordionSection({
  heading,
  body,
  ctaLabel,
  ctaHref,
  items
}: WhyChooseAccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <h2>{heading}</h2>
          <p>{body}</p>
          <ButtonLink href={ctaHref} label={ctaLabel} variant="outline" />
        </div>

        <div className={styles.stack}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `why-choose-panel-${index}`;
            const triggerId = `why-choose-trigger-${index}`;

            return (
              <article key={item.title} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
                <button
                  type="button"
                  id={triggerId}
                  className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
                >
                  <span>{item.title}</span>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`} aria-hidden="true">
                    ▾
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`${styles.answerWrap} ${isOpen ? styles.answerWrapOpen : ""}`}
                >
                  <p className={styles.answer}>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
