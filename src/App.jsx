
import BonusSection from "./components/bonus";
import FounderSection from "./components/founder";
import HeroSection from "./components/hero";
import MidSection from "./components/midSection";
import RegistrationForm from "./components/registration";
import LandingPage from "./components/section";

// Create a context or export this function to use in other components
export const scrollToForm = () => {
  const element = document.getElementById("registration-form");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const App = () => {


  return (
    <div className="">
      <HeroSection onCTAClick={scrollToForm} />
      <LandingPage onCTAClick={scrollToForm} />
      <MidSection onCTAClick={scrollToForm} />
      <BonusSection onCTAClick={scrollToForm} />
      <FounderSection onCTAClick={scrollToForm} />
      <div id="registration-form">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default App;
