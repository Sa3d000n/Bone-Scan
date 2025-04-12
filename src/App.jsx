import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturesSection from "./components/FeaturesSection";
import WhyItMattersSection from "./components/WhyItMattersSection";
import RealStoriesSection from "./components/RealStoriesSection";
import FAQSection from "./components/FAQSection";
import TumorDetectionForm from "./components/TumorDetectionForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarComponent />
      <HowItWorksSection />
      <FeaturesSection />
      <WhyItMattersSection />
      <RealStoriesSection />
      <FAQSection />
      <TumorDetectionForm />
      <Footer />
    </>
  );
}

export default App;
