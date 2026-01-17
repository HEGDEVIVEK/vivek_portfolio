import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SiAccenture } from "react-icons/si"; // Accenture icon
import "../scss/Experience.scss"
import techieAidLogo from "../assests/TechieAid.jpeg";
import utsaLogo from "../assests/utsa.jpeg";

export default function ExperienceSection() {
  const experiences = [
     {
      role: "Web Developer / Research Assistant",
      company: "University of Texas at San Antonio (UTSA) - Part time",
      logo:  <img src={utsaLogo} alt="UTSA" style={{ width: "50px", height: "50px", borderRadius: "8px" }} />,
      duration: "2025 - 2027",
      location: "San Antonio, USA",
      points: [
        "Revived and modernized the official CAMLS website using React.js, Node.js, and MongoDB, improving page load speed by 40% and ensuring a scalable architecture.",
        "Implemented modular, reusable components with optimized state management using React Hooks and Context API.",
        "Collaborated with faculty and data engineers to design structured data models and content synchronization for the industry consortium portal.",
      ],
    },
    {
      role: "App Development Associate",
      company: "Accenture - Full time",
      logo: <SiAccenture color="#6378edff" />,
      duration: "2023 - 2025",
      location: "Bengaluru, India",
      points: [
        "Developed and optimized React applications, reducing load times by 25% through efficient state management.",
        "Integrated REST APIs and implemented Redux, Context API, and React Query for scalable and efficient data handling.",
        "Built modular, reusable UI components using MUI and SCSS, ensuring consistent design across applications.",
        "Engineered Express.js RESTful APIs, using AWS S3, Mongo Db for optimized database performance. Scalable microservices architecture, enhancing system flexibility and maintainability."
      ],
    },
     {
      role: "Full Stack Web Developer",
      company: "TechieAid - Internship",
      logo: <img src={techieAidLogo} alt="TechieAid" style={{ width: "50px", height: "50px", borderRadius: "8px" }} />,
      duration: "2022 - 2022",
      location: "Bengaluru, India",
      points: [
        "Developed a Bus Booking System with a React.js frontend and Spring Boot backend.",
        "Designed and implemented SQL database schema for storing user, booking, and bus details.",
        "Integrated frontend and backend through REST APIs, enabling real-time booking and seat availability updates.",
        "Implemented monitoring and logging using Datadog to track system metrics and errors.Ensured responsive UI/UX and implemented input validations for a seamless user experience."
      ],
    },
  ];

  return (
    <div id="experience" className="experience-container">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-left">
                {exp.logo}
                <div className="role-company">
                  <h3 className="role">{exp.role}</h3>
                  <p className="company">{exp.company}</p>
                </div>
              </div>
              <div className="experience-right">
                <p className="duration">
                  <FaCalendarAlt className="icon" /> {exp.duration}
                </p>
                <p className="location">
                  <FaMapMarkerAlt className="icon" /> {exp.location}
                </p>
              </div>
            </div>
            <ul className="experience-points">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
