import HomePageLayout from "./layouts/HomePageLayout";
import HeroSection from "./components/HeroSection/HeroSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import StayProductiveSection from "./components/StayProductiveSection/StayProductiveSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";

function Home() {
  return (
    <HomePageLayout>
      <HeroSection />
      <FeaturesSection />
      <StayProductiveSection />
      <TestimonialSection />
    </HomePageLayout>
  );
}

export default Home;
