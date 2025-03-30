import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { FeaturesOverviewSection } from "./sections/FeaturesOverviewSection";
import { PricingSection } from "./sections/PricingSection";
import { StepByStepGuideSection } from "./sections/StepByStepGuideSection/StepByStepGuideSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { UserProfileSection } from "./sections/UserProfileSection/UserProfileSection";
import { Menu } from "lucide-react";
import { StatsSection } from "./sections/StatsSection/StatsSection";

export const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { label: "Features", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "About", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <div className="relative w-full bg-white overflow-x-hidden">
      {/* Floating Header/Navigation */}
      <header 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1320px] transition-all duration-300 px-4 sm:px-10`}
      >
        <div className={`flex items-center justify-between rounded-[111px] py-3 px-6 sm:px-10 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white'
        }`}>
          <div className="[font-family:'Alata',Helvetica] font-normal text-[#333f47] text-xl sm:text-[28px] leading-6">
            YuGa
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-[#333f47]" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-text text-[#333f47] text-[length:var(--text-font-size)] text-center tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] hover:text-[#0f54fa] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-6">
            <Button className="h-[38px] bg-[#222222] rounded-[444px] border border-solid border-[#dfe3e8] shadow-shadow hover:bg-[#333333]">
              <span className="[font-family:'Rethink_Sans',Helvetica] font-semibold text-white text-sm leading-5">
                Talk To Sales
              </span>
            </Button>

            <Button
              variant="outline"
              className="h-[38px] rounded-[444px] border border-solid border-[#333f47] shadow-drip-2 hover:bg-[#f5f5f5]"
            >
              <span className="[font-family:'Rethink_Sans',Helvetica] font-semibold text-[#333f47] text-sm leading-5">
                Get Started For Free
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-2xl shadow-lg p-4 sm:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="font-text text-[#333f47] text-lg py-2 hover:text-[#0f54fa] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full h-[38px] bg-[#222222] rounded-[444px] mt-4">
                <span className="[font-family:'Rethink_Sans',Helvetica] font-semibold text-white text-sm leading-5">
                  Talk To Sales
                </span>
              </Button>
              <Button
                variant="outline"
                className="w-full h-[38px] rounded-[444px] border border-solid border-[#333f47]"
              >
                <span className="[font-family:'Rethink_Sans',Helvetica] font-semibold text-[#333f47] text-sm leading-5">
                  Get Started For Free
                </span>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {/* Step By Step Guide Section */}
        <section className="w-full">
          <StepByStepGuideSection />
        </section>

        {/* Stats Section */}
        <section className="w-full py-16 px-4 sm:px-0">
          <StatsSection />
        </section>

        {/* Pricing Section */}
        <section className="w-full mt-8 sm:mt-16 relative">
          <img className="w-full h-[134px]" alt="Vector" src="/vector-7825.svg" />

          <div className="w-full bg-[#0f54fa] relative">
            <img
              className="absolute w-[189px] h-[357px] top-[-147px] left-0"
              alt="Ellipse"
              src="/ellipse-1509.svg"
            />

            <img
              className="absolute w-[267px] h-[937px] top-[-61px] right-0"
              alt="Ellipse"
              src="/ellipse-1507.svg"
            />

            <PricingSection />
          </div>

          <img className="w-full h-[134px]" alt="Vector" src="/vector-7828.svg" />

          <img
            className="absolute w-[492px] h-[315px] bottom-0 left-1/2 transform -translate-x-1/2"
            alt="Ellipse"
            src="/ellipse-1508.svg"
          />
        </section>

        {/* User Profile Section */}
        <section className="w-full mt-8 sm:mt-16">
          <UserProfileSection />
        </section>

        {/* Testimonials Section */}
        <section className="w-full mt-8 sm:mt-16">
          <TestimonialsSection />
        </section>

        {/* Features Overview Section */}
        <section className="w-full mt-8 sm:mt-16">
          <FeaturesOverviewSection />
        </section>
      </main>
    </div>
  );
};