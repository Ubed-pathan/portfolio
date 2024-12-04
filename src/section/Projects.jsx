import React from "react";
import asProjectImage from "../Images/asProjectImage.png";
import todoApp from "../Images/todoApp.png";
import "../App.css";

function Projects() {
  const projects = [
    {
      image: asProjectImage,
      name: "AS Furniture",
      discription: "E-commerce platform for furniture with user authentication, shopping cart, user profile management, and an admin page for website management.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Docker"],
      link: "https://github.com/Ubed-pathan/AS_BY_MERN.git",
    },
    {
      image: todoApp,
      name: "Todo Application",
      discription:
        "Full-stack TODO app with React, Spring Boot, and JWT. Features user authentication, todo CRUD, and secure REST APIs.",
      techStack: ["React", "Spring Boot", "Java", "MongoDB", "Tailwind CSS", "JWT", "Docker"],
      link: "https://github.com/Ubed-pathan/TODOApplication.git",
    },
  ];
  return (
    <>
      <div className="flex flex-row justify-center items-center min-h-screen">
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
          <div className="text-customVeryDarkBlue md:text-6xl text-4xl py-3">
            Projects
          </div>
          <hr className="bg-customVeryDarkBlue h-0.5 w-3/4" />
          <div className="flex flex-wrap md:justify-center py-10 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-customVeryDarkBlue md:w-[400px] sm:w-[350px] md:h-[520px] h-[550px] rounded-xl px-4 pt-3 relative"
              >
                <div>
                  <img
                    src={project.image}
                    img={project.name}
                    className="border-customLightPink border-2 shadow-lg rounded-xl w-full h-56 object-fill"
                  />
                </div>
                <h1 className="text-customDarkPink pt-4">{project.name}</h1>
      
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-customDarkPink text-customVeryDarkBlue px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-customLightPink text-justify text-base pt-4">
                  {project.discription}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="submit"
                    class="repository-button"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <span class="text">View Repository</span>
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
