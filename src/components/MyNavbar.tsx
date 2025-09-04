import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LogoSVG from "../assets/logo.svg";

const MyNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 1);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Chiudi il menu quando clicchi fuori
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        expanded &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`custom-navbar ${scrolled ? "navbar-shrink" : ""}`}
      sticky="top"
      expanded={expanded}
      ref={navRef}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={LogoSVG}
            alt="Logo"
            width={scrolled ? 40 : 60}
            height={scrolled ? 40 : 60}
            style={{ transition: "width 0.3s, height 0.3s" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {["/", "/about", "/projects", "/contact"].map((path, idx) => (
              <NavLink
                key={idx}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                onClick={() => setExpanded(false)}
              >
                {["Home", "About", "Projects", "Contact"][idx]}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
