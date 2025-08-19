import React from "react";
import { GraduationCap, User, Target, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Problem-Solving",
      description:
        "Strong analytical skills with a passion for finding creative solutions to complex challenges.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Web Development",
      description:
        "Proficient in modern web technologies with experience in both frontend and backend development.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Team Collaboration",
      description:
        "Excellent communication skills and ability to work effectively in collaborative environments.",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Adaptability",
      description:
        "Quick learner who stays updated with the latest industry trends and technologies.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading relative 
          after:content-[''] after:block after:w-20 after:h-1 after:bg-primary 
          after:mx-auto after:mt-4 after:rounded"
        >
          About Me
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          A dedicated and enthusiastic Junior Web Developer with a fresh
          perspective and strong foundation in modern web technologies.
        </p>

        <div className="grid md:grid-cols-2 items-start gap-12">
          {/* Left Column - Personal Info */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-primary-700 mb-6 border-l-4 border-primary pl-4">
              Get to know me!
            </h3>

            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                I'm a{" "}
                <span className="font-semibold text-primary-700">
                  Junior Web Developer
                </span>{" "}
                passionate about creating innovative and user-friendly web
                applications. With a solid foundation in both frontend and
                backend technologies, I enjoy bringing ideas to life through
                clean, efficient code.
              </p>

              <p className="leading-relaxed">
                I recently completed my{" "}
                <span className="font-semibold text-primary-700">
                  Bachelor of Science in Information Technology
                </span>{" "}
                at Negros Oriental State University (2021-2025), where I
                developed a strong understanding of software development
                principles and gained hands-on experience with various
                programming languages and frameworks.
              </p>

              <p className="leading-relaxed">
                During my internship at{" "}
                <span className="font-semibold text-primary-700">
                  Lumenvo Digital Agency
                </span>
                , I contributed to real-world projects, developing e-commerce
                features and working with cross-functional teams to deliver
                high-quality solutions.
              </p>

              <p className="leading-relaxed">
                I'm always eager to learn new technologies and take on
                challenging projects that push me to grow as a developer. I
                believe in writing clean, maintainable code and creating
                meaningful user experiences.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary-100 rounded-full">
                  <GraduationCap className="w-6 h-6 text-primary-700" />
                </div>
                <h4 className="text-lg font-semibold text-primary-700">
                  Education
                </h4>
              </div>
              <div>
                <h5 className="font-medium text-gray-900">
                  BS Information Technology
                </h5>
                <p className="text-gray-700">
                  Negros Oriental State University
                </p>
                <p className="text-sm text-gray-500 mt-1">2021 - 2025</p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Highlights */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold text-primary-700 mb-6 border-l-4 border-primary pl-4">
              My Skills & Strengths
            </h3>

            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-primary-600 rounded-lg flex items-center justify-center text-white">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-700 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
