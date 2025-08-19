import React from "react";
import { ChevronDown, Mail, Phone, Download, User, Camera } from "lucide-react";
import { getAssetPath } from "../utils/assets";
import profileImage from "../assets/images/DSC_1097.JPG";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Professional Profile Image Placeholder */}
          <div className="relative w-40 h-40 mx-auto mb-8 group">
            {/* Main Profile Circle */}
            <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-full p-1 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Status Indicator */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            {/* Decorative Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 slide-up">
            Kevin Chris L. Durango
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-600 mb-8 slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Junior Web Developer | BS Information Technology Graduate
          </p>

          <p
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            Passionate about creating innovative web solutions with modern
            technologies. Ready to contribute to dynamic development teams and
            build exceptional user experiences.
          </p>

          {/* Call to Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="mailto:kchris.kd@gmail.com"
              className="btn btn-primary flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>

            <a
              href="tel:+639657798825"
              className="btn btn-outline flex items-center gap-2"
            >
              <Phone size={20} />
              Call Me
            </a>

            <button className="btn btn-outline flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </div>

          {/* Quick Stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16 slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">5+</h3>
              <p className="text-gray-600">Months Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">3+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">7+</h3>
              <p className="text-gray-600">Technologies Learned</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </button>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
