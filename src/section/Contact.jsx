import React from "react";
import github from "../Images/gitcontact.png";
import linkedin from "../Images/linkedin.png";
import twitter from "../Images/twitter.png";
import email from "../Images/email01.png";

function Contact() {
  return (
    <>
      <div className="flex flex-row justify-center items-center h-screen px-4">
        <div className="flex flex-col items-center justify-center text-center py-6 bg-customVeryDarkBlue md:w-1/2 md:h-[400px] sm:w-[350px] h-[400px] rounded-xl">
          <h2 className="text-3xl font-bold text-customDarkPink">
            Let's Connect
          </h2>
          <p className="text-lg text-customLightPink mt-2">
            Feel free to reach out through any of the following platforms:
          </p>
          <div className="flex flex-wrap justify-center gap-6 p-10">
            <a
              href="https://github.com/Ubed-pathan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="Git Image"
                className="h-20 w-20 cursor-pointer hover:scale-110 transition"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ubed-pathan-35a715242"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
              src={linkedin}
              alt="LinkedIn Image"
              className="h-20 w-20 cursor-pointer hover:scale-110 transition"
            />
            </a>
            <a
              href="https://x.com/mr_ubed08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
              src={twitter}
              alt="Twitter Image"
              className="h-20 w-20 cursor-pointer hover:scale-110 transition"
            />
            </a>
            <a href="mailto:ubedpathan818@gmail.com">
            <img
              src={email}
              alt="Email Image"
              className="h-20 w-20 cursor-pointer hover:scale-110 transition"
            />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
