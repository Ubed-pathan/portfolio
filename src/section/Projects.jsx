
import { HiOutlineStatusOnline } from "react-icons/hi";
import asProjectImage from "../Images/asProjectImage.png";
import todoApp from "../Images/todoApp.png";
import talkify from "../Images/talkify.png";
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
      name: "Todo App",
      discription:
        "Full-stack TODO app with React, Spring Boot, and JWT. Features user authentication, todo CRUD, and secure REST APIs.",
      techStack: ["React", "Spring Boot", "Java", "MongoDB", "Tailwind CSS", "JWT", "Docker"],
      link: "https://github.com/Ubed-pathan/TODOApplication.git",
      live: "https://todo-application-vert-nine.vercel.app/",
    },
    {
      image: talkify,
      name: "Talkify",
      discription:
      "Interactive chat application built with React, Node.js, and WebSocket. Includes real-time messaging, user authentication, and secure data handling.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS", "JWT"],
      link: "https://github.com/Ubed-pathan/Talkify",
      live: "https://talkify-zdlm.onrender.com/",
    },
  ];
  return (
    <>
      <div className="flex flex-row justify-center items-center min-h-screen">
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
          <div className="text-customVeryDarkBlue md:text-6xl text-4xl py-3">
            Projects
          </div>
          <hr className="border-0 bg-customVeryDarkBlue h-0.5 w-3/4" />
          <div className="flex flex-wrap md:justify-center py-10 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-customVeryDarkBlue md:w-[400px] sm:w-[350px] md:h-[520px] h-[570px] rounded-xl px-4 pt-3 relative"
              >
                <div>
                  <img
                    src={project.image}
                    img={project.name}
                    className="border-customLightPink border-2 shadow-lg rounded-xl w-full h-56 object-fill"
                  />
                </div>


                <div className="flex justify-center items-center pt-4 gap-8"> 
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      // className="flex justify-center items-center"
                    >
                      <button 
                        onClick={() => window.open(project.live, "_blank")}
                        className="flex justify-center items-center"
                      >
                        <span className="text-lg flex justify-between items-center gap-1 bg-white rounded-lg px-[2px] text-customLightBlue hover:bg-gray-600 hover:text-white transform duration-300"><HiOutlineStatusOnline size={25}/> Live</span>
                      </button>
                    </a>
                  )}
                  <h1 className="text-customDarkPink">{project.name}</h1>
                  </div>
      
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
