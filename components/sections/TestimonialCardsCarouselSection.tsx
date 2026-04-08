"use client";

import styles from "@/components/sections/TestimonialCardsCarouselSection.module.css";

type TestimonialCard = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

type TestimonialCardsCarouselSectionProps = {
  heading: string;
  body: string;
  items: TestimonialCard[];
};

export function TestimonialCardsCarouselSection({
  heading,
  body,
  items
}: TestimonialCardsCarouselSectionProps) {
  if (!items.length) {
    return null;
  }

  const loopItems = [...items, ...items];

  return (
    <section className={styles.section} aria-label="Testimonios de clientes">
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2>{heading}</h2>
          <p>{body}</p>
        </div>

        <div className={styles.carousel}>
          <div className={styles.viewport}>
            <div className={styles.track}>
              {loopItems.map((item, index) => (
                <article className={styles.card} key={`${item.author}-${index}`} aria-hidden={index >= items.length}>
                  <div className={styles.cardBrand}>
                    <span>{item.company}</span>
                  </div>
                  <blockquote>{item.quote}</blockquote>
                  <p className={styles.cardAuthor}>{item.author}</p>
                  <p className={styles.cardRole}>{item.role}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
