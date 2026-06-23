import HeroSection from "../components/home/HeroSection";
import PopularDestinations from "../components/home/PopularDestinations";
import StatsSection from "../components/home/StatsSection";
import WhyChooseYatra from "../components/home/WhyChooseYatra";

function Home() {
    return (
        <>
            <HeroSection />
            <PopularDestinations />
            <StatsSection />
            <WhyChooseYatra />
        </>
    );
}

export default Home;