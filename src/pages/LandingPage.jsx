import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { CallToAction } from "../components/landing/CallToAction";
import { Footer } from "../components/layout/Footer";
import { Ticket } from "lucide-react";

export const LandingPage = ({ onNavigate }) => (
  <>
    <header>
      <nav className="p-4 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
        <button
          onClick={() => onNavigate("landing")}
          className="text-2xl font-extrabold text-dark-bg cursor-pointer"
        >
          <Ticket className="w-10 h-10" />
        </button>
        <div className="space-x-4">
          <button
            onClick={() => onNavigate("auth", "login")}
            className="text-sm font-medium text-gray-600 hover:text-primary transition hover:cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => onNavigate("auth", "signup")}
            className="py-2 px-4 text-sm font-semibold rounded-full bg-primary hover:shadow-dark-bg/50 text-white shadow-md transition duration-300 cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
    <div className="min-h-screen flex flex-col">
      <Hero onGetStarted={() => onNavigate("auth")} />
      <Features />
      <CallToAction onGetStarted={() => onNavigate("auth")} />
      <Footer />
    </div>
  </>
);

export default LandingPage;
