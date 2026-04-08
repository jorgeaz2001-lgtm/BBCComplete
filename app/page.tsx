import trustedPartnerLogo from "@/app/public/2.png";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeIntroStatsSection } from "@/components/sections/HomeIntroStatsSection";
import { ImageTextSection } from "@/components/sections/ImageTextSection";
import { MapSection } from "@/components/sections/MapSection";
import { TestimonialCardsCarouselSection } from "@/components/sections/TestimonialCardsCarouselSection";
import { WhyChooseAccordionSection } from "@/components/sections/WhyChooseAccordionSection";
import { homeContent } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <HeroSection {...homeContent.hero} />
      <HomeIntroStatsSection
        heading={homeContent.intro.heading}
        body={homeContent.intro.body}
        stats={homeContent.stats}
        image={trustedPartnerLogo}
        imageAlt="RTS International | Trusted Partner"
      />
      <WhyChooseAccordionSection
        heading={homeContent.whyChoose.heading}
        body={homeContent.whyChoose.body}
        ctaLabel={homeContent.whyChoose.ctaLabel}
        ctaHref={homeContent.whyChoose.ctaHref}
        items={homeContent.financeSection.items.map((item) => ({
          title: item.title,
          description: item.description
        }))}
      />
      <ImageTextSection
        heading={homeContent.dashboard.heading}
        body={homeContent.dashboard.body}
        listItems={homeContent.dashboard.steps}
        image={homeContent.dashboard.image}
        imageAlt={homeContent.dashboard.imageAlt}
        ctaLabel={homeContent.dashboard.ctaLabel}
        ctaHref={homeContent.dashboard.ctaHref}
        reverse
      />
      <TestimonialCardsCarouselSection
        heading={homeContent.testimonialCarousel.heading}
        body={homeContent.testimonialCarousel.body}
        items={homeContent.testimonialCarousel.items}
      />
      <MapSection
        heading={homeContent.contactMap.heading}
        body={homeContent.contactMap.body}
        embedUrl={homeContent.contactMap.embedUrl}
      />
    </>
  );
}
