import Image from "next/image";
import type { StaticImageData } from "next/image";
import styles from "@/components/sections/HomeIntroStatsSection.module.css";

type IntroStat = {
  icon: string;
  value: string;
  label: string;
};

type HomeIntroStatsSectionProps = {
  heading: string;
  body: string;
  stats: IntroStat[];
  image: string | StaticImageData;
  imageAlt: string;
  partnerText?: string;
};

export function HomeIntroStatsSection({
  heading,
  body,
  stats,
  image,
  imageAlt,
  partnerText = "Trusted Partner"
}: HomeIntroStatsSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.introRow}>
          <div className={styles.copy}>
            <h2>{heading}</h2>
            {body ? <p>{body}</p> : null}
          </div>
          <div className={styles.media}>
            <div className={styles.partnerLockup}>
              <div className={styles.logoWrap}>
                <Image src={image} alt={imageAlt} width={220} height={88} className={styles.logo} />
              </div>
              <span className={styles.partnerDivider} aria-hidden="true" />
              <span className={styles.partnerText}>
                Trusted
                <br />
                {partnerText.replace(/^Trusted\s+/i, "")}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.stats}>
          {stats.map((item) => (
            <article key={item.value} className={styles.card}>
              <Image src={item.icon} alt="" width={28} height={28} />
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
