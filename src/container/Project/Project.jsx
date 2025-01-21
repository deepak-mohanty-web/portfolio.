import React from "react";
import "./Project.scss";
import photo1 from "../../assets/A.I.Mock.jpg.png";
import photo2 from "../../assets/resume.jpg.png";
import photo3 from "../../assets/chat.jpg.png";

function Projects() {
  const projectData = [
    {
      title: "A.I Mock Interview",
      description:
        "An online platform where A.I takes your interview and provides detailed feedback and reviews.",
      image: photo1,
      github: "https://github.com/deepak-mohanty-web/ai_interview.git",
    },
    {
      title: "Resume Builder",
      description:
        "A professional platform where you can create and customize your own resume with various templates.",
      image: photo2,
      github:
        "https://github.com/deepak-mohanty-web/ezy-resume-builder-main.git",
    },
    {
      title: "Chat App",
      description:
        "A real-time chat platform to connect with friends and share memorable moments.",
      image: photo3,
      github: "https://github.com/deepak-mohanty-web/react-firebase-chat.git",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Projects</h2>
      <span className="projects__subtitle">My Work</span>

      <div className="projects__container">
        {projectData.map((project, index) => (
          <div className="projects__card" key={index}>
            <div className="projects__image-container">
              <img
                src={project.image}
                alt={project.title}
                className="projects__img"
              />
              <div className="projects__overlay">
                <div className="projects__buttons">
                  <a
                    href={project.github}
                    className="projects__button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div className="projects__content">
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
