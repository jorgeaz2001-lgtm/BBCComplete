import { BenefitsPanel } from "@/components/sections/BenefitsPanel";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { SplitFeatureSection } from "@/components/sections/SplitFeatureSection";
import { homeContent } from "@/content/home";
import { servicesContent } from "@/content/services";

export default function ServicesPage() {
  return (
    <>
      <HeroSection {...servicesContent.hero} />
      <ProcessSteps
        heading={servicesContent.process.heading}
        body={servicesContent.process.body}
        steps={servicesContent.process.steps}
      />
      <FeatureGrid heading={servicesContent.differenceHeading} items={servicesContent.differenceItems} />
      <BenefitsPanel
        image={servicesContent.benefits.image}
        imageAlt={servicesContent.benefits.imageAlt}
        heading={servicesContent.benefits.heading}
        points={servicesContent.benefits.points}
      />
      <SplitFeatureSection
        heading="Sectores que impulsamos con factoraje"
        body={homeContent.whyChoose.body}
        ctaLabel={homeContent.whyChoose.ctaLabel}
        ctaHref={homeContent.whyChoose.ctaHref}
        items={homeContent.featureCards}
      />
      <FaqAccordion heading="Frequently Asked Questions" items={servicesContent.faqs} />
    </>
  );
}
