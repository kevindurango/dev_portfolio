import React from "react";
import {
  GraduationCap,
  Award,
  Trophy,
  BookOpen,
  Star,
  Calendar,
} from "lucide-react";
import { getAssetPath } from "../utils/assets";

const Education = () => {
  const education = {
    degree: "Bachelor of Science in Information Technology",
    school: "Your University Name",
    period: "2020 - 2024",
    gpa: "3.8/4.0", // Update with your actual GPA
    location: "City, Country",
  };

  const achievements = [
    {
      title: "Dean's List",
      description: "Consistently maintained high academic performance",
      period: "2021-2024",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      title: "Presidential Academic Award",
      description: "Top 10% of graduating class",
      period: "2024",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Dean's List Awardee",
      description: "Recognition for outstanding capstone project",
      period: "2024",
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: "Programming Competition Winner",
      description: "1st place in university coding competition",
      period: "2023",
      icon: <Trophy className="w-6 h-6" />,
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
      role: "President",
      organization: "IT Students Association",
      period: "2023-2024",
      description:
        "Led a team of 50+ students in organizing tech events and workshops",
    },
    {
      role: "Member",
      organization: "Programming Club",
      period: "2021-2024",
      description:
        "Participated in coding competitions and peer learning sessions",
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
                <div className="text-lg font-semibold text-primary-600">
                  GPA: {education.gpa}
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
                <div className="text-2xl font-bold text-primary-600">3.8</div>
                <div className="text-sm text-gray-600">GPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">5+</div>
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
                    src={getAssetPath("school.jpg")}
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
                    src={getAssetPath("profile_1.JPG")}
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
              <div className="grid md:grid-cols-3 gap-4">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 hover:border-primary-300 hover:bg-gradient-to-br hover:from-primary-50 hover:to-primary-100 transition-all duration-300">
                  <BookOpen className="w-8 h-8 mb-2 text-gray-400" />
                  <p className="text-xs font-medium">TOR Preview</p>
                </div>
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 hover:border-primary-300 hover:bg-gradient-to-br hover:from-primary-50 hover:to-primary-100 transition-all duration-300">
                  <Trophy className="w-8 h-8 mb-2 text-gray-400" />
                  <p className="text-xs font-medium">Award Certificate</p>
                </div>
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 hover:border-primary-300 hover:bg-gradient-to-br hover:from-primary-50 hover:to-primary-100 transition-all duration-300">
                  <Star className="w-8 h-8 mb-2 text-gray-400" />
                  <p className="text-xs font-medium">Dean's List</p>
                </div>
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

          {/* TOR/Transcript Note */}
          <div className="mt-8 bg-primary-50 border border-primary-200 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <BookOpen className="w-6 h-6 text-primary-600 mr-2" />
              <h4 className="text-lg font-semibold text-primary-800">
                Academic Records
              </h4>
            </div>
            <p className="text-primary-700 mb-4">
              Official transcripts and academic records are available upon
              request.
            </p>
            <button className="btn-secondary text-sm">
              Request Transcript
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
