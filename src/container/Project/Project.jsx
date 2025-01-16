import React from "react";
import "./Project.scss";
import photo1 from "../../assets/photo1.jpg";
// import photo2 from "../../assets/photo2.jpg";
// import photo3 from "../../assets/photo3.jpg";

function Projects() {
  const projectData = [
    {
      title: "A.I Mock Interview",
      description:
        "An online platform where A.I take your interview and give you rewiews.",
      image: photo1,
      link: "https://github.com/deepak-mohanty-web/ai_interview.git",
    },
    {
      title: "Resume Bulider",
      description: "A online platform where you can create your own resume.",
      image: "path/to/image2.jpg",
      link: "https://github.com/deepak-mohanty-web/ezy-resume-builder-main.git",
    },
    {
      title: "Chat App",
      description: "A platform to connect with friends and share moments.",
      image: "path/to/image3.jpg",
      link: "https://github.com/deepak-mohanty-web/react-firebase-chat.git",
    },
  ];

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Work</span>

      <div className="projects__container container">
        {projectData.map((project, index) => (
          <div className="projects__card" key={index}>
            {/* <img
              src={project.image}
              alt={project.title}
              className="projects__img"
            /> */}
            <div className="projects__content">
              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__description">{project.description}</p>
              <a
                href={project.link}
                className="projects__button"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
