export type NavItem = {
  label: string;
  href: string;
};

/** WhatsApp “chat with an advisor” — same link for header CTA, hero, and footer. */
export const WHATSAPP_ADVISOR_URL =
  "https://api.whatsapp.com/send/?phone=%2B528140086007&text=Hola%2C+quisiera+solicitar+m%C3%A1s+informaci%C3%B3n+sobre+el+servicio+de+factoraje+para+mi+empresa.&type=phone_number&app_absent=0";

export const siteConfig = {
  siteName: "BBC Factoring",
  companyName: "BBC Factoring",
  ctaLabel: "Chatea con un Asesor",
  ctaHref: WHATSAPP_ADVISOR_URL,
  languages: ["ES"],
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/services" },
    { label: "Nosotros", href: "/about" },
    { label: "Contacto", href: "/contact" }
  ] satisfies NavItem[],
  account: {
    label: "WhatsApp",
    href: WHATSAPP_ADVISOR_URL
  },
  footer: {
    address: "Av. Manuel Gómez Morín 900, Carrizalejo, 66254 San Pedro Garza García, N.L.",
    legalLinks: [
      { label: "Aviso de Privacidad", href: "#" },
      { label: "Términos y Condiciones", href: "#" }
    ],
    partnerLinks: [
      { label: "Atención a Clientes", href: "mailto:factoring@bbcpartners.mx" },
      { label: "factoring@bbcpartners.mx", href: "mailto:factoring@bbcpartners.mx" },
      { label: "+52 81 4008 6007", href: "tel:+528140086007" },
      { label: "Chatea por WhatsApp", href: WHATSAPP_ADVISOR_URL }
    ]
  }
};
