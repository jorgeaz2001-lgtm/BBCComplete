import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import styles from "@/components/sections/HeroSection.module.css";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  videoUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export function HeroSection({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  videoUrl,
  imageUrl,
  imageAlt = "Portada",
  secondaryCtaLabel,
  secondaryCtaHref
}: HeroSectionProps) {
  return (
    <section
      className={`${styles.hero} ${imageUrl || videoUrl ? styles.heroImage : ""} ${videoUrl ? styles.heroVideoMode : ""}`}
      style={imageUrl && !videoUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
      aria-label={imageUrl ? imageAlt : undefined}
    >
      {videoUrl ? (
        <video
          className={styles.heroVideo}
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      ) : null}
      <div className={`${styles.container} ${imageUrl ? styles.containerImage : ""}`}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className={styles.actions}>
          <ButtonLink href={ctaHref} label={ctaLabel} external={ctaHref.startsWith("http")} />
          {secondaryCtaLabel && secondaryCtaHref ? (
            <Link className={styles.secondaryButton} href={secondaryCtaHref}>
              {secondaryCtaLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
