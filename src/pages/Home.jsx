import {
  FadeInSection,
  PageTransition,
} from "../components/ui";

import HeroSection from "../components/home/HeroSection";
import PopularDestinations from "../components/home/PopularDestinations";
import StatsSection from "../components/home/StatsSection";
import WhyChooseYatra from "../components/home/WhyChooseYatra";

function Home() {
  return (
    <PageTransition>

      <HeroSection />

      <FadeInSection delay={0.1}>
        <PopularDestinations />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <StatsSection />
      </FadeInSection>

      <FadeInSection delay={0.3}>
        <WhyChooseYatra />
      </FadeInSection>

    </PageTransition>
  );
}

export default Home;