import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiReact,
  SiPhp,
  SiPython,
  SiMysql,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiCanva,
  SiGoogledrive,
  SiGooglesheets,
  SiGoogledocs,
  SiSlack,
  SiTrello,
  SiAsana,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";
import { HiOfficeBuilding, HiClock } from "react-icons/hi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "HTML5",
          icon: <SiHtml5 className="w-8 h-8" />,
          color: "#E34F26",
        },
        {
          name: "CSS3",
          icon: <SiCss3 className="w-8 h-8" />,
          color: "#1572B6",
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-8 h-8" />,
          color: "#F7DF1E",
        },
        {
          name: "React",
          icon: <SiReact className="w-8 h-8" />,
          color: "#61DAFB",
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="w-8 h-8" />,
          color: "#7952B3",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-8 h-8" />,
          color: "#06B6D4",
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "PHP",
          icon: <SiPhp className="w-8 h-8" />,
          color: "#777BB4",
        },
        {
          name: "Python",
          icon: <SiPython className="w-8 h-8" />,
          color: "#3776AB",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-8 h-8" />,
          color: "#4479A1",
        },
      ],
    },
    {
      title: "Data Analysis & Machine Learning",
      skills: [
        {
          name: "Pandas",
          icon: <SiPandas className="w-8 h-8" />,
          color: "#150458",
        },
        {
          name: "Scikit-learn",
          icon: <SiScikitlearn className="w-8 h-8" />,
          color: "#F7931E",
        },
        {
          name: "Matplotlib",
          icon: <SiPython className="w-8 h-8" />,
          color: "#11557C",
        },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        {
          name: "Git",
          icon: <SiGit className="w-8 h-8" />,
          color: "#F05032",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-8 h-8" />,
          color: "#3178C6",
        },
      ],
    },
    {
      title: "Design & Graphics",
      skills: [
        {
          name: "Photoshop",
          icon: <SiAdobephotoshop className="w-8 h-8" />,
          color: "#31A8FF",
        },
        {
          name: "Illustrator",
          icon: <SiAdobeillustrator className="w-8 h-8" />,
          color: "#FF9A00",
        },
        {
          name: "Figma",
          icon: <SiFigma className="w-8 h-8" />,
          color: "#F24E1E",
        },
        {
          name: "Canva",
          icon: <SiCanva className="w-8 h-8" />,
          color: "#00C4CC",
        },
      ],
    },
    {
      title: "Collaboration & Productivity",
      skills: [
        {
          name: "Google Workspace",
          icon: <SiGoogledrive className="w-8 h-8" />,
          color: "#4285F4",
        },
        {
          name: "Google Docs",
          icon: <SiGoogledocs className="w-8 h-8" />,
          color: "#4285F4",
        },
        {
          name: "Google Sheets",
          icon: <SiGooglesheets className="w-8 h-8" />,
          color: "#34A853",
        },
        {
          name: "Slack",
          icon: <SiSlack className="w-8 h-8" />,
          color: "#4A154B",
        },
        {
          name: "Trello",
          icon: <SiTrello className="w-8 h-8" />,
          color: "#0079BF",
        },
        {
          name: "Microsoft Teams",
          icon: <HiOfficeBuilding className="w-8 h-8" />,
          color: "#6264A7",
        },
        {
          name: "Asana",
          icon: <SiAsana className="w-8 h-8" />,
          color: "#F06A6A",
        },
        {
          name: "Timeneye",
          icon: <HiClock className="w-8 h-8" />,
          color: "#FF6B35",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Skills & Technologies</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="slide-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold text-center text-primary mb-8">
                {category.title}
              </h3>

              <div className="grid grid-2 md:grid-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="card text-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div
                      className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div
          className="mt-16 text-center slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="text-xl font-semibold text-primary mb-6">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "RESTful APIs",
              "Responsive Design",
              "Version Control",
              "Database Design",
              "UI/UX Principles",
              "Agile Methodology",
              "Problem Solving",
              "Team Collaboration",
              "Project Management",
              "Visual Design",
              "Brand Identity",
              "Digital Marketing",
              "Content Creation",
              "Remote Work",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-primary border border-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
