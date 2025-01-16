import React from "react";
import { Header, About, Skill, Project, Footer } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Contact from "./container/contact/contact";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
