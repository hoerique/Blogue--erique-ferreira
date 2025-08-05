import { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import SolutionsSection from "./components/SolutionsSection";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    const handleScroll = () => {
      const elements =
        document.querySelectorAll("[data-animate]");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-darker-blue">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-darker-blue via-dark-blue to-darker-blue pointer-events-none"></div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div
        data-animate
        className="opacity-0 translate-y-8 transition-all duration-1000 ease-out relative z-10"
      >
        <HeroSection />
      </div>

      {/* Services Section */}
      <div
        data-animate
        className="opacity-0 translate-y-8 transition-all duration-1000 ease-out relative z-10"
      >
        <ServicesSection />
      </div>

      {/* Solutions Section */}
      <div
        data-animate
        className="opacity-0 translate-y-8 transition-all duration-1000 ease-out relative z-10"
      >
        <SolutionsSection />
      </div>

      {/* Footer */}
      <div
        data-animate
        className="opacity-0 translate-y-8 transition-all duration-1000 ease-out relative z-10"
      >
        <Footer />
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        [data-animate].animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}