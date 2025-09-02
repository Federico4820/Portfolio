import React, { useEffect } from "react";
import MiaFoto from "../assets/photo_2024-09-26_20-12-28.jpg";
import jsLogo from "../assets/js.png";
import cssLogo from "../assets/css.png";
import htmlLogo from "../assets/html.png";
import bootstrapLogo from "../assets/bootstrap.png";
import reactLogo from "../assets/react.png";
import csharpLogo from "../assets/csharp.png";
import dotnetLogo from "../assets/dotnet.png";
import tsLogo from "../assets/typescript.png";

const About: React.FC = () => {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLDivElement>(".tech-card");

    cards.forEach((card) => {
      let requestId: number;

      const handleMouseMove = (e: MouseEvent) => {
        if (requestId) cancelAnimationFrame(requestId);

        requestId = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -15; // inclinazione max 15°
          const rotateY = ((x - centerX) / centerX) * 15;

          card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
          card.style.transition = "none"; // nessun ritardo durante il movimento
        });
      };

      const handleMouseLeave = () => {
        card.style.transition = "transform 0.3s ease";
        card.style.transform =
          "perspective(600px) rotateX(0) rotateY(0) scale(1)";
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      // cleanup
      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
        cancelAnimationFrame(requestId);
      };
    });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Immagine a sinistra */}
        <div className="about-image">
          <img src={MiaFoto} alt="La mia foto" />
        </div>

        {/* Testo a destra */}
        <div className="about-text">
          <h2>Chi sono</h2>
          <p>
            Ciao! Sono <span className="highlight">Federico</span>, uno
            sviluppatore appassionato di informatica e tecnologie moderne. Mi
            piace trasformare idee in applicazioni reali, con un occhio di
            riguardo all’estetica e alla funzionalità. Questo portfolio nasce
            per raccontare il mio percorso e mostrare i progetti a cui ho
            lavorato.
          </p>
        </div>
      </div>

      {/* Sezione separata per il percorso formativo */}
      <div className="education-section">
        <h2>Percorso formativo</h2>
        <p>
          Dopo essermi diplomato ad Avellino presso l'Istituto d'Istruzione
          Superiore I.I.S. "Alfredo Amatucci" con una votazione di 78/100, ho
          deciso di dedicare maggiormente il mio tempo a una delle mie più
          grandi passioni: il mondo dell'informatica. Fino a quel momento ho
          sempre apprezzato la tecnologia, ma la consideravo soltanto come uno
          strumento. Mi piaceva informarmi, navigare sul web o trascorrere ore
          con i videogiochi, ma non avevo mai avuto occasione di comprendere
          davvero quanto lavoro si nascondesse dietro ciò che oggi ci sembra
          scontato. Così ho deciso di iscrivermi a{" "}
          <a
            href="https://www.epicode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="epicode-link"
          >
            Epicode
          </a>
          , dove sin da subito mi sono immerso nel mondo del coding, affrontando
          ogni giorno sfide diverse, inclusi lavori di gruppo con scadenze
          settimanali. Con il passare del tempo, le mie web app prendevano
          sempre più forma e, man mano che studiavamo nuove tecnologie, i
          progetti diventavano sempre più complessi, soprattutto nel passaggio
          dallo sviluppo front-end a quello back-end. Dopo sei mesi intensi, con
          8 ore quotidiane di studio e pratica, posso dire di essere pienamente
          soddisfatto dei traguardi raggiunti fin ora.
        </p>
      </div>

      {/* Sezione Tecnologie */}
      <div className="tech-section container my-5">
        <h3 className="text-center mb-4">
          Alcune delle tecnologie che so utilizzare
        </h3>
        <div className="row g-4">
          {[
            { src: jsLogo, name: "JavaScript" },
            { src: cssLogo, name: "CSS3" },
            { src: htmlLogo, name: "HTML5" },
            { src: bootstrapLogo, name: "Bootstrap" },
            { src: reactLogo, name: "React" },
            { src: csharpLogo, name: "C#" },
            { src: dotnetLogo, name: ".NET" },
            { src: tsLogo, name: "TypeScript" },
          ].map((tech, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="tech-card text-center p-3">
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="img-fluid mb-2"
                />
                <p>{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
