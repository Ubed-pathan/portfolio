import React from "react";
import asProjectImage from "../Images/asProjectImage.png";
import todoApp from "../Images/todoApp.png";
import "../App.css";

function Projects() {
  const projects = [
    {
      image: asProjectImage,
      name: "AS Furniture",
      discription:
        "An e-commerce platform for browsing, purchasing, and managing furniture products with user authentication, shopping cart,  set profile image, admin page  and order management features.",
    },
    {
      image: todoApp,
      name: "Todo Application",
      discription:
        "A secure full-stack app using React and Spring Boot with JWT authentication and CRUD operations for todos. React and Axios power the frontend, while Spring Boot handles REST APIs and security.",
    },
  ];
  return (
    <>
      <div className='flex flex-row justify-center items-center min-h-screen'>
      <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
        <div className="text-customVeryDarkBlue md:text-6xl text-4xl py-3">
          Projects
        </div>
        <hr className="bg-customVeryDarkBlue h-0.5 w-3/4" />
        <div className="flex flex-wrap md:justify-center py-10 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-customVeryDarkBlue md:w-[400px] sm:w-[350px] md:h-[500px] h-[550px] rounded-xl px-4 pt-3 relative"
            >
              <div>
                <img
                  src={project.image}
                  img={project.name}
                  className="border-customLightPink border-2 shadow-lg rounded-xl w-full h-56 object-cover"
                />
              </div>
              <h1 className="text-customDarkPink pt-4">{project.name}</h1>
              <p className="text-customLightPink text-justify text-xl pt-1">
                {project.discription}
              </p>
              <button type="submit" class="repository-button">
                <span class="text">View Repository</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Projects;
