import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../scss/Education.scss"

export default function EducationSection() {
  const education = [
    {
      degree: "MS in Computer Science",
      school: "University of Texas at San Antonio",
      gpa: "3.8/4.0",
      duration: "2025 - 2027",
      location: "San Antonio, Texas, USA",
      points: [
        "Specialized in Artificial Intelligence and Machine Learning.",
      ],
    },
    {
      degree: "BE in Computer Science",
      school: "RNS Institute of Technology",
      gpa: "3.9/4",
      duration: "2019 - 2023",
      location: "Bengaluru, India",
      points: [
        "Focused on Software Development, Data Structures and OOPs.",
        "Led the coding club and organized hackathons.",
      ],
    },
  ];

  return (
    <div id="education" className="education-container">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <div className="education-left">
                <FaGraduationCap className="education-icon" />
                <div className="degree-school">
                  <h3 className="degree">{edu.degree}</h3>
                  <p className="school">{edu.school}</p>
                </div>
              </div>
              <div className="education-right">
                <p className="gpa">GPA: {edu.gpa}</p>
                <p className="duration">
                  <FaCalendarAlt className="icon" /> {edu.duration}
                </p>
                <p className="location">
                  <FaMapMarkerAlt className="icon" /> {edu.location}
                </p>
              </div>
            </div>
            <ul className="education-points">
              {edu.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
