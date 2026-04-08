import Link from "next/link";
import { siteConfig } from "@/content/site";
import styles from "@/components/layout/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div>
            <p className={styles.eyebrow}>BBC Factoring</p>
            <h2>Liquidez sin deuda, sin límites y sin complicaciones.</h2>
          </div>
          <Link href={siteConfig.ctaHref} className={styles.primaryAction}>
            Solicitar información
          </Link>
        </div>

        <div className={styles.linkRows}>
          <div className={styles.linkGroup}>
            <p className={styles.groupTitle}>Navegación</p>
            <div className={styles.linkRow}>
              {siteConfig.nav.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.linkGroup}>
            <p className={styles.groupTitle}>Contacto</p>
            <div className={styles.linkRow}>
              {siteConfig.footer.partnerLinks.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className={styles.bottomBar}>
          <div className={styles.linkRow}>
            {siteConfig.footer.legalLinks.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className={styles.meta}>
            <p className={styles.copy}>© 2026 BBC Factoring. Todos los derechos reservados.</p>
            <p className={styles.address}>{siteConfig.footer.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
