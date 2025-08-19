import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { getAssetPath } from "../utils/assets";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection =
        sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom > 100;
          }
          return false;
        }) || "home";

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const sectionId = href.substring(1);
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleResumeDownload = () => {
    // Use the asset utility function to get the correct path
    const resumeUrl = getAssetPath("resume.pdf");

    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      } animate-fadeIn`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300">
            Kevin Chris
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`px-2 py-1 font-medium transition-all duration-300 relative ${
                    activeSection === item.href.substring(1)
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform origin-left animate-growWidth"></span>
                  )}
                </button>
              </li>
            ))}
            <li className="ml-2">
              <button
                onClick={handleResumeDownload}
                className="flex items-center gap-1 bg-primary text-white px-4 py-1.5 rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-sm"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-xl z-40 md:hidden transition-transform duration-300 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } p-6 overflow-y-auto flex flex-col`}
        >
          <div className="mt-12 mb-4">
            <div className="text-xl font-bold text-primary">Kevin Chris</div>
            <div className="text-sm text-gray-500">Junior Web Developer</div>
          </div>
          <div className="h-px w-full bg-gray-100 my-4"></div>
          <ul className="space-y-4 mt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "text-primary bg-primary/5 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="mt-6">
              <button
                onClick={handleResumeDownload}
                className="flex items-center justify-center gap-2 w-full bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </button>
            </li>
          </ul>
          <div className="mt-auto text-sm text-gray-500 mb-8">
            © 2025 Kevin Chris Durango
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
