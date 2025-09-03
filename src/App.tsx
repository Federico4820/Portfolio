//import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";

import InteractiveBackground from "./components/InteractiveBackground";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PageError from "./components/PageError";

function App() {
  return (
    <BrowserRouter>
      <InteractiveBackground />
      <MyNavbar />
      <AppContent />
      <Footer />
    </BrowserRouter>
  );
}

function AppContent() {
  return (
    <>
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
