import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Award,
  Trophy,
  BookOpen,
  Star,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getAssetPath } from "../utils/assets";
import schoolImage from "../assets/images/school.jpg";
import graduationImage from "../assets/images/profile_1.JPG";
import torImage from "../assets/images/tor-preview.jpg";
import deansList2022 from "../assets/images/deans-list-2022.jpg";
import deansList2024 from "../assets/images/deans_list_2024.jpg";
import deansList2025 from "../assets/images/deans_list_2025.jpg";

// Awards Slideshow Component
const AwardsSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const awards = [
    {
      image: deansList2022,
      title: "Dean's List 2022",
      description: "Academic Excellence Award",
    },
    {
      image: deansList2024,
      title: "Dean's List 2024",
      description: "Academic Excellence Award",
    },
    {
      image: deansList2025,
      title: "Presidential Award 2025",
      description: "Highest Academic Achievement",
    },
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % awards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % awards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + awards.length) % awards.length);
  };

  return (
    <div className="aspect-[3/4] bg-white rounded-lg border shadow relative overflow-hidden">
      {/* Slide content */}
      <div className="h-full w-full relative flex flex-col">
        {awards.map((award, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 h-full w-full transition-opacity duration-500 flex flex-col ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="flex-1 overflow-hidden flex items-center justify-center bg-gray-50 p-2">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={award.image}
                  alt={award.title}
                  className="max-w-full max-h-full object-contain"
                  style={{ maxHeight: "calc(100% - 10px)" }}
                />
              </div>
            </div>
            <div className="py-1 px-2 bg-white absolute bottom-0 left-0 right-0">
              <p className="text-sm font-medium text-center">{award.title}</p>
              <p className="text-xs text-gray-600 text-center">
                {award.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-1 hover:bg-white transition-colors z-20"
        aria-label="Previous award"
      >
        <ChevronLeft className="w-5 h-5 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-1 hover:bg-white transition-colors z-20"
        aria-label="Next award"
      >
        <ChevronRight className="w-5 h-5 text-gray-800" />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2 z-30">
        {awards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-4 bg-primary-600" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to award ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Education = () => {
  const education = {
    degree: "Bachelor of Science in Information Technology",
    school: "Negros Oriental State University",
    period: "2021 - 2025",
    gpa: "", // Update with your actual GPA
    location: "Dumaguete City, Negros Oriental, Philippines",
  };

  const achievements = [
    {
      title: "Dean's List",
      description: "Recognized for outstanding academic achievement",
      period: "2022",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      title: "Dean's List",
      description: "Maintained excellent academic standing",
      period: "2024",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      title: "Presidential Academic Award",
      description: "Highest recognition for academic excellence",
      period: "2025",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  const relevantCoursework = [
    "Data Structures and Algorithms",
    "Web Development",
    "Database Management Systems",
    "Software Engineering",
    "Computer Networks",
    "Object-Oriented Programming",
    "Mobile Application Development",
    "System Analysis and Design",
  ];

  const extracurriculars = [
    {
      role: "Athlete",
      organization: "NORSU Blue Dolphins Boxing Team",
      period: "2023-2025",
    },
  ];

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <GraduationCap className="w-8 h-8 text-primary mb-4 mx-auto" />
            Education & Achievements
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Details */}
          <div className="bg-white rounded-xl shadow-card p-8 mb-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {education.degree}
                </h3>
                <p className="text-lg text-primary-600 font-semibold">
                  {education.school}
                </p>
                <p className="text-gray-600">{education.location}</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <div className="flex items-center justify-end text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{education.period}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">4</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">
                  1.4598
                </div>
                <div className="text-sm text-gray-600">GPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">4+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">3</div>
                <div className="text-sm text-gray-600">Awards</div>
              </div>
            </div>
          </div>

          {/* University/Graduation Photo Placeholder */}
          <div className="bg-white rounded-xl shadow-card p-8 mb-8 animate-fade-in-up">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              University Life & Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* University Campus Photo */}
              <div className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={schoolImage}
                    alt="University Campus - Beautiful campus where I spent four amazing years learning and growing"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Beautiful campus where I spent four amazing years learning and
                  growing
                </p>
              </div>

              {/* Graduation Photo */}
              <div className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={graduationImage}
                    alt="Graduation Day - Proud moment of completing my degree with academic excellence"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Proud moment of completing my degree with academic excellence
                </p>
              </div>
            </div>

            {/* TOR/Certificate Preview */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                Academic Records Preview
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {/* TOR Preview */}
                <div className="aspect-[3/4] bg-white rounded-lg border shadow flex flex-col items-center justify-center overflow-hidden">
                  <img
                    src={torImage}
                    alt="TOR Preview"
                    className="w-full h-full object-cover"
                  />
                  <p className="text-xs font-medium mt-2">TOR Preview</p>
                </div>

                {/* Awards Slideshow */}
                <AwardsSlideshow />
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-primary-600" />
              Academic Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start">
                    <div className="text-primary-600 mr-4 mt-1">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        {achievement.description}
                      </p>
                      <span className="text-xs text-primary-600 font-medium">
                        {achievement.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-primary-600" />
              Relevant Coursework
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {relevantCoursework.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <Star className="w-5 h-5 mr-2 text-primary-600" />
              Leadership & Extracurricular Activities
            </h3>
            <div className="space-y-4">
              {extracurriculars.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {activity.role} - {activity.organization}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        {activity.description}
                      </p>
                    </div>
                    <span className="text-sm text-primary-600 font-medium mt-2 md:mt-0">
                      {activity.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
