import HomePageLayout from "./layouts/HomePageLayout";
import HeroSection from "./components/HeroSection/HeroSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import StayProductiveSection from "./components/StayProductiveSection/StayProductiveSection";

function Home() {
  return (
    <HomePageLayout>
      <HeroSection />
      <FeaturesSection />
      <StayProductiveSection />
    </HomePageLayout>
  );
}

export default Home;
