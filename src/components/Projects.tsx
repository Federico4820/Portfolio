import React, { useEffect } from "react";
import Portfolio from "../assets/ProjectsImag/Portfolio.png";
import EpimeteoImg from "../assets/ProjectsImag/epimeteo.png";
interface Project {
  img: string;
  name: string;
  description: string;
  github?: string;
  demo?: string;
}

const projectsData: Project[] = [
  {
    img: Portfolio,
    name: "Portfolio Web",
    description:
      "Sito portfolio sviluppato con React, SPA con routing e animazioni interattive.",
    github: "https://github.com/Federico4820/Portfolio",
    demo: "https://project1-demo.com",
  },
  {
    img: EpimeteoImg,
    name: "Portfolio Web",
    description:
      "Uno dei miei primi siti, che usa richieste API per ricavare informazioni meteo su 3 zone diverse",
    github: "https://github.com/Federico4820/EpiMeteo-S10L5",
    demo: "https://epi-meteo-s10-l5.vercel.app/",
  },
];

const Projects: React.FC = () => {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLDivElement>(".project-card");

    cards.forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      };

      const handleMouseLeave = () => {
        card.style.transform =
          "perspective(600px) rotateX(0) rotateY(0) scale(1)";
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2>I miei Progetti</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.name} />
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
