import React from "react";
import {
  ExternalLink,
  Github,
  Star,
  Database,
  Smartphone,
  Code,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Farmers Market Management System",
      type: "Capstone Project",
      description:
        "A comprehensive full-stack agricultural marketplace application built with modern technologies. Features role-based access control, real-time data synchronization, and a robust database architecture with 15+ interconnected tables.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React Native",
        "TypeScript",
        "PHP",
        "MySQL",
        "Bootstrap",
        "RESTful APIs",
      ],
      features: [
        "Role-based access control for farmers, buyers, and administrators",
        "Real-time data synchronization across all user interfaces",
        "Comprehensive product catalog with advanced search and filtering",
        "Secure user authentication and authorization system",
        "Responsive design optimized for mobile and desktop devices",
        "RESTful API architecture for seamless data exchange",
      ],
      highlights: [
        {
          icon: <Database className="w-5 h-5" />,
          text: "15+ Database Tables",
        },
        {
          icon: <Smartphone className="w-5 h-5" />,
          text: "Mobile-First Design",
        },
        {
          icon: <Code className="w-5 h-5" />,
          text: "TypeScript Integration",
        },
      ],
      github: "#",
      demo: "#",
      status: "Completed",
    },
    // Adding placeholder for future projects
    {
      title: "E-commerce Platform Features",
      type: "Internship Project",
      description:
        "Developed and enhanced various e-commerce features during my internship at Lumenvo Digital Agency. Focused on improving user experience and implementing responsive design patterns.",
      image: "/api/placeholder/600/400",
      technologies: ["PHP", "MySQL", "Bootstrap", "CSS", "JavaScript", "HTML"],
      features: [
        "Responsive product catalog with advanced filtering",
        "Shopping cart functionality with session management",
        "User authentication and profile management",
        "Admin dashboard for inventory management",
        "Mobile-optimized checkout process",
      ],
      highlights: [
        {
          icon: <Smartphone className="w-5 h-5" />,
          text: "Responsive Design",
        },
        {
          icon: <Database className="w-5 h-5" />,
          text: "Database Integration",
        },
        {
          icon: <Star className="w-5 h-5" />,
          text: "Production Ready",
        },
      ],
      github: "#",
      demo: "#",
      status: "Professional Work",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Featured Projects</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            A showcase of my development work, highlighting the technologies
            I've mastered and the solutions I've built
          </p>
        </div>

        <div className="grid gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`slide-up grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative group">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Code className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">Project Screenshot</p>
                      <p className="text-xs">Coming Soon</p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-4">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={highlightIndex}
                        className="flex items-center gap-2 text-primary font-medium"
                      >
                        {highlight.icon}
                        <span className="text-sm">{highlight.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features
                        .slice(0, 4)
                        .map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2 text-secondary"
                          >
                            <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-1" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="btn btn-outline flex items-center gap-2"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      className="btn btn-primary flex items-center gap-2"
                      onClick={(e) => e.preventDefault()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16 slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-secondary mb-6">
              I'm constantly working on new projects and learning new
              technologies. Stay tuned for more exciting developments in my
              portfolio!
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
