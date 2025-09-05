import React, { useEffect } from "react";
import Portfolio from "../assets/ProjectsImag/portfolio.png";
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
    const cards = Array.from(
      document.querySelectorAll<HTMLDivElement>(".project-card")
    );
    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      let requestId = 0;
      let isActive = false;

      const update = (clientX: number, clientY: number) => {
        if (!isActive) return;
        if (requestId) cancelAnimationFrame(requestId);

        requestId = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = clientX - rect.left;
          const y = clientY - rect.top;
          const cx = rect.width / 2;
          const cy = rect.height / 2;

          const rotateX = ((y - cy) / cy) * -15;
          const rotateY = ((x - cx) / cx) * 15;

          card.style.transition = "none";
          card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
        });
      };

      const reset = () => {
        isActive = false;
        if (requestId) {
          cancelAnimationFrame(requestId);
          requestId = 0;
        }
        setTimeout(() => {
          card.style.transition = "transform 0.25s ease";
          card.style.transform =
            "perspective(600px) rotateX(0) rotateY(0) scale(1)";
        }, 0);
      };

      // --- Pointer handlers ---
      const onPointerDown = (e: PointerEvent) => {
        if (e.pointerType === "touch" || e.pointerType === "pen") {
          isActive = true;
          if (card.setPointerCapture) {
            card.setPointerCapture(e.pointerId);
          }
          update(e.clientX, e.clientY);
        }
      };

      const onPointerMove = (e: PointerEvent) => {
        if (e.pointerType === "mouse") {
          // Desktop: sempre attivo in hover
          isActive = true;
          update(e.clientX, e.clientY);
        } else {
          // Mobile: attivo solo se c’è stato un down
          if (isActive) update(e.clientX, e.clientY);
        }
      };

      const onPointerUp = (e: PointerEvent) => {
        if (e.pointerType !== "mouse") {
          if (card.releasePointerCapture) {
            card.releasePointerCapture(e.pointerId);
          }
          reset();
        }
      };

      const onPointerLeave = () => {
        if (isActive) reset();
      };

      card.addEventListener("pointerdown", onPointerDown);
      card.addEventListener("pointermove", onPointerMove);
      card.addEventListener("pointerup", onPointerUp);
      card.addEventListener("pointerleave", onPointerLeave);
      card.addEventListener("pointercancel", reset);

      cleanups.push(() => {
        card.removeEventListener("pointerdown", onPointerDown);
        card.removeEventListener("pointermove", onPointerMove);
        card.removeEventListener("pointerup", onPointerUp);
        card.removeEventListener("pointerleave", onPointerLeave);
        card.removeEventListener("pointercancel", reset);
        if (requestId) cancelAnimationFrame(requestId);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
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
