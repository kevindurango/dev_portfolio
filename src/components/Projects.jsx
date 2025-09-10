import React, { useState } from "react";
import farmersmarket from "../assets/images/farmers-market.png";
import farmersmarket1 from "../assets/images/farmers-market-1.png";
import farmersmarket2 from "../assets/images/farmers-market-2.png";
import farmersmarket3 from "../assets/images/farmers-market-3.png";
import farmersmarket4 from "../assets/images/farmers-market-4.png";
import farmersmarket5 from "../assets/images/farmers-market-5.png";
import farmersmarket6 from "../assets/images/farmers-market-6.png";
import farmersmarket7 from "../assets/images/farmers-market-7.png";
import farmersmarket8 from "../assets/images/farmers-market-8.png";
import farmersmarket9 from "../assets/images/farmers-market-9.png";
import farmersmarket10 from "../assets/images/farmers-market-10.png";
import ecommerce from "../assets/images/e-commerce.png";
import ecommerce2 from "../assets/images/e-commerce-2.png";
import {
  ExternalLink,
  Github,
  Star,
  Database,
  Smartphone,
  Code,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState(null);

  const openImageModal = (project, imageIndex) => {
    setCurrentProject(project);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(project.images[imageIndex]);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setCurrentProject(null);
    setCurrentImageIndex(0);
  };

  const navigateImage = (direction) => {
    if (!currentProject) return;

    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % currentProject.images.length
        : (currentImageIndex - 1 + currentProject.images.length) %
          currentProject.images.length;

    setCurrentImageIndex(newIndex);
    setSelectedImage(currentProject.images[newIndex]);
  };
  const projects = [
    {
      title: "Farmers Market Management System",
      type: "Capstone Project",
      description:
        "A comprehensive full-stack agricultural marketplace application built with modern technologies. Features role-based access control, real-time data synchronization, and a robust database architecture with 15+ interconnected tables.",
      images: [
        farmersmarket,
        farmersmarket1,
        farmersmarket2,
        farmersmarket3,
        farmersmarket4,
        farmersmarket5,
        farmersmarket6,
        farmersmarket7,
        farmersmarket8,
        farmersmarket9,
        farmersmarket10,
      ],
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
      github: "https://github.com/kevindurango/capstone",
      status: "Completed",
    },
    {
      title: "E-commerce Platform Features",
      type: "Internship Project",
      description:
        "Built comprehensive e-commerce application features as part of my training at Lumenvo Digital Agency. Focused on learning modern web development practices and implementing responsive design patterns through hands-on project work.",
      images: [ecommerce, ecommerce2],
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
          text: "Industry Standards",
        },
      ],
      github: "https://github.com/kevindurango/tech_web",
      status: "Internship",
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
              {/* Project Images */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative">
                  {project.images && project.images.length > 0 ? (
                    <div className="space-y-4">
                      {/* Main Featured Image */}
                      <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div
                          className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50"
                          onClick={() => openImageModal(project, 0)}
                        >
                          <img
                            src={project.images[0]}
                            alt={`${project.title} Main Screenshot`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Overlay with zoom indicator */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                                <svg
                                  className="w-6 h-6 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                  />
                                </svg>
                              </div>
                            </div>
                            {/* Image counter badge */}
                            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                              {project.images.length} image
                              {project.images.length > 1 ? "s" : ""}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Thumbnail Grid for Additional Images */}
                      {project.images.length > 1 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {project.images.slice(1).map((img, imgIdx) => (
                            <div
                              key={imgIdx + 1}
                              className="relative group cursor-pointer rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 hover:shadow-lg transition-all duration-300"
                              onClick={() =>
                                openImageModal(project, imgIdx + 1)
                              }
                            >
                              <div className="aspect-video">
                                <img
                                  src={img}
                                  alt={`${project.title} Screenshot ${
                                    imgIdx + 2
                                  }`}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                                      <svg
                                        className="w-4 h-4 text-gray-800"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
                      <div className="text-center text-gray-500">
                        <Code className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-sm">Project Screenshot</p>
                        <p className="text-xs">Coming Soon</p>
                      </div>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
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
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      View Code
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

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeImageModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation buttons */}
              {currentProject && currentProject.images.length > 1 && (
                <>
                  <button
                    onClick={() => navigateImage("prev")}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => navigateImage("next")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Main image */}
              <img
                src={selectedImage}
                alt={`${currentProject?.title} Screenshot ${
                  currentImageIndex + 1
                }`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image counter and project info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="bg-black bg-opacity-50 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">{currentProject?.title}</h4>
                      <p className="text-sm text-gray-300">
                        Image {currentImageIndex + 1} of{" "}
                        {currentProject?.images.length}
                      </p>
                    </div>
                    {currentProject?.images.length > 1 && (
                      <div className="flex gap-1">
                        {currentProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setCurrentImageIndex(idx);
                              setSelectedImage(currentProject.images[idx]);
                            }}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              idx === currentImageIndex
                                ? "bg-white"
                                : "bg-gray-500"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
