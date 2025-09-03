import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <section className="notfound-section">
      <h1 style={{ fontSize: "10rem", margin: 0 }}>404</h1>
      <h2 style={{ fontSize: "2rem", margin: "20px 0" }}>
        Ops! Pagina non trovata.
      </h2>
      <p
        style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "30px" }}
      >
        Sembra che tu abbia seguito un link errato o la pagina non esista più.
      </p>
      <Link
        to="/"
        style={{
          padding: "15px 30px",
          backgroundColor: "#00d1ff",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "all 0.3s ease",
        }}
      >
        Torna alla home
      </Link>
    </section>
  );
};

export default NotFound;
