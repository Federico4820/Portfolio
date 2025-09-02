import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const InteractiveBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: "#0d47a1",
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: true,
                force: 70,
                smooth: 10,
              },
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1,
              },
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          number: { value: 300 }, // default per desktop
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0, max: 0.4 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 10 },
            random: {
              enable: true,
              minimumValue: 5,
            },
            animation: {
              enable: true,
              speed: 15,
              minimumValue: 5,
              sync: false,
            },
          },
          move: { enable: true, speed: 2 },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
        },
        responsive: [
          {
            maxWidth: 768, // tablet/smartphone
            options: {
              particles: {
                number: { value: 100 },
              },
            },
          },
          {
            maxWidth: 480, // smartphone piccolo
            options: {
              particles: {
                number: { value: 60 },
              },
            },
          },
        ],
      }}
    />
  );
};

export default InteractiveBackground;
