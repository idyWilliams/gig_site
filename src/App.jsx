import BonusSection from "./components/bonus";
import FounderSection from "./components/founder";
import HeroSection from "./components/hero";
import MidSection from "./components/midSection";
import RegistrationForm from "./components/registration";

import LandingPage from "./components/section";

const App = () => {
  return (
    <div className="">
      <HeroSection />
      <LandingPage />
      <MidSection />
      <BonusSection />
      <FounderSection />
      <RegistrationForm />
    </div>
  );
};

export default App;
