import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../scss/Home.scss';

export default function Home() {
  return (
    <div id="home" className="home-container">
      <div className="home-content">
       
        {/* <div className="home-image">
          <img src={vivekImage} alt="Vivek S Hegde" />
        </div> */}

       
        <div className="home-text">
          <h1 className="home-title">Vivek S Hegde</h1>
          <h2 className="home-role">Software Developer</h2>

          <p className="home-subtitle">
            This is my portfolio where I showcase my skills, professional experience, 
            and projects. Here I present my journey as a backend developer, highlighting 
            my expertise in Spring Boot, microservices, clean architecture, and building 
            scalable solutions.
          </p>

          {/* Centered buttons and icons */}
          <div className="home-actions">
            <a href="https://drive.google.com/file/d/1x8XW4AGj-GFcnpKs45w8Uj7KqtynbmfW/view?usp=sharing" download className="download-btn">
              Download Resume
            </a>

            <div className="icon-links">
              <a
                href="https://github.com/HEGDEVIVEK"
                target="_blank"
                rel="noopener noreferrer"
                className="icon github"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-s-hegde-2001/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon linkedin"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
