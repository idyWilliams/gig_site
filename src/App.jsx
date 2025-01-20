import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BonusSection from "./components/bonus";
import FounderSection from "./components/founder";
import HeroSection from "./components/hero";
import MidSection from "./components/midSection";
import RegistrationForm from "./components/registration";
import LandingPage from "./components/section";
import PrivacyPolicy from "./pages/privacy-policy";
import OfferAgreement from "./pages/offer-agreement";

export const scrollToForm = () => {
  const element = document.getElementById("registration-form");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/gig_site"
          element={
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
          }
        />
        <Route path="/gig_site/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/gig_site/offer-agreement" element={<OfferAgreement />} />
      </Routes>
    </Router>
  );
};

export default App;
