import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { CallToAction } from "../components/landing/CallToAction";
import { Footer } from "../components/layout/Footer";

export const LandingPage = ({ onNavigate }) => (
  <div className="min-h-screen flex flex-col">
    <Hero onGetStarted={() => onNavigate("auth")} />
    <Features />
    <CallToAction onGetStarted={() => onNavigate("auth")} />
    <Footer />
  </div>
);
