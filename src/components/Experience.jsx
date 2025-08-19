import React from "react";
import { Building2, Calendar, MapPin, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "Lumenvo Digital Agency",
      location: "Remote",
      period: "July 2024 – January 2025",
      type: "Internship",
      description:
        "Gained hands-on experience in web development, working on real-world projects and contributing to the company's digital solutions.",
      achievements: [
        "Developed e-commerce features using Bootstrap and CSS, improving user interface and shopping experience",
        "Collaborated with senior developers on PHP and MySQL backend development for client projects",
        "Utilized Git for version control, participating in code reviews and maintaining project documentation",
        "Contributed to responsive web design implementation, ensuring cross-device compatibility",
        "Participated in agile development processes and team standups",
      ],
      technologies: [
        "PHP",
        "MySQL",
        "Bootstrap",
        "CSS",
        "Git",
        "JavaScript",
        "HTML",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Professional Experience</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            My journey in web development and the valuable experience I've
            gained
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="slide-up">
              <div className="card relative">
                {/* Company Badge */}
                <div className="absolute -top-3 left-6 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  {experience.type}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column - Basic Info */}
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Building2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {experience.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-secondary">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Description & Achievements */}
                  <div className="md:col-span-2">
                    <p className="text-secondary mb-6">
                      {experience.description}
                    </p>

                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Achievements & Responsibilities:
                    </h4>

                    <ul className="space-y-3">
                      {experience.achievements.map(
                        (achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-secondary">
                              {achievement}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Experience Note */}
        <div
          className="mt-12 text-center slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="max-w-2xl mx-auto p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-3">
              Ready for New Challenges
            </h3>
            <p className="text-secondary">
              I'm eager to apply my skills and continue learning in a dynamic
              development environment. My internship experience has prepared me
              to contribute meaningfully to development teams and take on
              increasingly complex projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
