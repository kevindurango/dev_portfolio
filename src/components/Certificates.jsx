import React, { useState } from "react";
import {
  Award,
  Calendar,
  ExternalLink,
  CheckCircle,
  BookOpen,
  Globe,
  Code,
  Database,
  Shield,
  Smartphone,
} from "lucide-react";
import koicaCert from "../assets/images/koica-certificate.jpg";
import tesdaCert from "../assets/images/tesda-certificate.jpg";

// TO ADD CERTIFICATE IMAGES:
// 1. Place your certificate images in src/assets/images/
// 2. Import them at the top of this file (e.g., import koicaCert from "../assets/images/koica-certificate.jpg")
// 3. Add the imported image to the certificate object's 'image' property
// 4. Set 'hasImage' to true for that certificate
// Example:
// import koicaCert from "../assets/images/koica-certificate.jpg";
// import tesdaCert from "../assets/images/tesda-certificate.jpg";

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // Modal component for full-size certificate viewing
  const ImageModal = ({ image, title, onClose }) => {
    if (!image) return null;

    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        <div className="relative max-w-5xl max-h-[90vh] w-full">
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10 flex items-center space-x-2 bg-black bg-opacity-50 px-3 py-2 rounded-lg"
          >
            <span className="text-sm">Close</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="bg-white rounded-lg p-4 shadow-2xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              {title}
            </h3>
            <img
              src={image}
              alt={title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      </div>
    );
  };

  // Add your certificates here
  // Example structure:
  // {
  //   title: "Certificate Name",
  //   issuer: "Issuing Organization",
  //   platform: "Platform/Provider",
  //   dateIssued: "YYYY",
  //   expiryDate: "YYYY" or null,
  //   category: "Category",
  //   description: "Brief description",
  //   skills: ["Skill1", "Skill2"],
  //   credentialId: "ID",
  //   verificationUrl: "URL",
  //   icon: <Code className="w-6 h-6" />,
  //   status: "Active"
  // }
  const certificates = [
    {
      title:
        "Certificate of Completion – Artificial Intelligence and Basic Big Data Management",
      issuer: "Hannam University (Republic of Korea) and Silliman University",
      platform: "KOICA Digital Transformation Center",
      dateIssued: "August 2025",
      expiryDate: null,
      category: "AI & Data Science",
      description:
        "Completed a 100-hour, 20-day intensive training on AI and Big Data Management, focusing on data processing, analytics, and practical applications of artificial intelligence.",
      skills: [
        "Artificial Intelligence",
        "Big Data Management",
        "Data Processing",
        "Data Analytics",
        "AI Applications",
      ],
      credentialId: "KOICA-AI-BD-2025",
      verificationUrl: "#",
      icon: <Database className="w-6 h-6" />,
      status: "Active",
      // Add your certificate image to src/assets/images/ and import it
      image: koicaCert, // Import your KOICA certificate image here
      hasImage: true, // Set to true when you add the image
    },
    {
      title: "TESDA NC II Certificate in Contact Center Services",
      issuer: "Technical Education and Skills Development Authority (TESDA)",
      platform: "TESDA and Silliman University",
      dateIssued: "2025",
      expiryDate: null,
      category: "Professional Skills",
      description:
        "Successfully completed 144-hour training in Contact Center Services NC II, covering workplace communication, professionalism, occupational health and safety, customer service, and elective competencies in Big Data Analytics and AI fundamentals.",
      skills: [
        "Customer Service",
        "Workplace Communication",
        "Professionalism",
        "Big Data Analytics",
        "AI Fundamentals",
        "Occupational Health & Safety",
      ],
      credentialId: "TESDA-CCSNC2-2025",
      verificationUrl: "#",
      icon: <Shield className="w-6 h-6" />,
      status: "Active",
      // Add your certificate image to src/assets/images/ and import it
      image: tesdaCert, // Import your TESDA certificate image here
      hasImage: true, // Set to true when you add the image
    },
  ];

  const categories = ["All", "AI & Data Science", "Professional Skills"];

  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  const CertificateCard = ({ certificate }) => {
    const isExpiringSoon =
      certificate.expiryDate &&
      new Date(certificate.expiryDate) <
        new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);

    return (
      <div className="bg-white rounded-xl shadow-card p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-3 flex-1 min-w-0">
            <div className="text-primary-600 mt-1 flex-shrink-0">
              {certificate.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                {certificate.title}
              </h3>
              <p className="text-primary-600 font-medium mb-1">
                {certificate.issuer}
              </p>
              <p className="text-sm text-gray-600">
                via {certificate.platform}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2 flex-shrink-0 ml-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                certificate.status === "Active"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {certificate.status}
            </span>
            {isExpiringSoon && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 whitespace-nowrap">
                Expiring Soon
              </span>
            )}
          </div>
        </div>

        {/* Certificate Image */}
        <div className="mb-4">
          {certificate.hasImage && certificate.image ? (
            <div className="relative group">
              <div
                className="h-48 overflow-hidden rounded-lg border shadow-sm cursor-pointer"
                onClick={() =>
                  setSelectedImage({
                    image: certificate.image,
                    title: certificate.title,
                  })
                }
              >
                <img
                  src={certificate.image}
                  alt={`${certificate.title} Certificate`}
                  className="w-full h-full object-cover hover:shadow-lg transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Click to view full certificate
              </p>
            </div>
          ) : (
            <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-200 flex flex-col items-center justify-center">
              <Award className="w-8 h-8 text-gray-400 mb-2" />
              <p className="text-xs text-gray-500 text-center">
                Certificate image
                <br />
                coming soon
              </p>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mb-4 flex-grow">
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {certificate.description}
          </p>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {certificate.skills.slice(0, 6).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary-50 text-primary-700 rounded-md text-xs font-medium"
            >
              {skill}
            </span>
          ))}
          {certificate.skills.length > 6 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
              +{certificate.skills.length - 6} more
            </span>
          )}
        </div>

        {/* Dates and Actions */}
        <div className="mt-auto">
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Issued: {certificate.dateIssued}</span>
              </div>
              {certificate.expiryDate && (
                <div className="flex items-center">
                  <span>Expires: {certificate.expiryDate}</span>
                </div>
              )}
            </div>
          </div>

          {/* Credential ID */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              Credential ID: {certificate.credentialId}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="certificates" className="section-padding bg-white">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <Award className="w-8 h-8 text-primary mb-4 mx-auto" />
            Certificates & Certifications
          </h2>
          <p className="section-subtitle">
            Professional certifications and achievements that validate my
            technical expertise
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Certificates Grid */}
          {filteredCertificates.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {filteredCertificates.map((certificate, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CertificateCard certificate={certificate} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 mb-8">
              <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No Certificates Added Yet
              </h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Certificates and certifications will be displayed here once
                added. Check back soon for updates on professional achievements!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage.image}
          title={selectedImage.title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

export default Certificates;
