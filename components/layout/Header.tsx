"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import styles from "@/components/layout/Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.navBar}>
        <div className={styles.container}>
          <Link className={styles.logo} href="/">
            BBC FACTORING
          </Link>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </button>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                className={pathname === item.href ? styles.navActive : styles.navLink}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <ButtonLink href={siteConfig.account.href} label={siteConfig.account.label} external variant="outline" />
            <label className={styles.language}>
              <span className={styles.languageLabel}>Idioma</span>
              <select aria-label="Seleccionar idioma" defaultValue={siteConfig.languages[0]}>
                {siteConfig.languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
