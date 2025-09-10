import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Mail,
  Phone,
  Download,
  Code,
  Award,
  Briefcase,
} from "lucide-react";
import { getAssetPath } from "../utils/assets";
import profileImage from "../assets/images/DSC_1097.JPG";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 md:pt-0 overflow-hidden"
    >
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* Subtle Professional Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Professional Profile Image */}
          <div
            className={`relative w-44 h-44 mx-auto mb-10 group transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {/* Professional Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-white p-1">
                <div className="w-full h-full rounded-full overflow-hidden shadow-lg">
                  <img
                    src={profileImage}
                    alt="Kevin Chris L. Durango - Professional Developer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Professional Status */}
            <div className="absolute bottom-3 right-3 flex items-center bg-white rounded-full px-3 py-1.5 shadow-lg border border-slate-200">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs font-semibold text-slate-700">
                Open to Work
              </span>
            </div>

            {/* Subtle Hover Effect */}
            <div className="absolute inset-0 rounded-full border-2 border-slate-300/30 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </div>

          {/* Professional Main Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
              Kevin Chris L. Durango
            </h1>

            {/* Professional Credentials */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-xl md:text-2xl font-medium text-slate-700">
                Junior Web Developer
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-lg md:text-xl text-slate-600">
                BS Information Technology
              </span>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Dedicated software developer with expertise in modern web
              technologies. Committed to delivering high-quality solutions and
              contributing to
              <span className="font-semibold text-slate-800">
                {" "}
                innovative development teams
              </span>
              that create impactful digital experiences.
            </p>
          </div>

          {/* Professional Call to Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <a
              href="mailto:kchris.kd@gmail.com"
              className="group bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 min-w-[160px] justify-center"
            >
              <Mail size={20} />
              Contact Me
            </a>

            <a
              href="tel:+639657798825"
              className="group bg-white border-2 border-slate-300 hover:border-slate-600 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 min-w-[160px] justify-center"
            >
              <Phone size={20} />
              Call Me
            </a>

            <a
              href="/resume.pdf"
              download="Kevin_Chris_Durango_Resume.pdf"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 min-w-[160px] justify-center"
            >
              <Download size={20} />
              Resume
            </a>
          </div>

          {/* Professional Stats */}
          <div
            className={`transition-all duration-700 delay-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-slate-200 transition-colors duration-300">
                  <Briefcase className="text-slate-600" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">5+</h3>
                <p className="text-slate-600 font-medium">Months Experience</p>
              </div>

              <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-300">
                  <Award className="text-blue-600" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">3+</h3>
                <p className="text-slate-600 font-medium">Projects Completed</p>
              </div>

              <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors duration-300">
                  <Code className="text-green-600" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">7+</h3>
                <p className="text-slate-600 font-medium">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <button
          onClick={scrollToAbout}
          className="group flex flex-col items-center text-slate-500 hover:text-slate-700 transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <span className="text-sm font-medium mb-2">Learn More</span>
          <div className="p-2 rounded-full border border-slate-300 group-hover:border-slate-500 transition-all duration-300">
            <ChevronDown size={20} className="animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
