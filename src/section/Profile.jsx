import React from "react";
import profileImage from "../Images/profile.jpg";
import github from "../Images/gitcontact.png";
import linkedin from "../Images/linkedin.png";
import twitter from "../Images/twitter.png";
import email from "../Images/email03.png";
import "../App.css";

function Profile() {
  return (
    <div
      id="profile"
      className="h-screen flex flex-col justify-center items-center relative"
    >
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 -mt-32">
        {/* Image Section */}
        <div className="flex flex-col items-center">
          <img
            src={profileImage}
            alt="Profile image"
            className="rounded-full border-4 border-customVeryDarkBlue h-48 w-48 md:h-64 md:w-64"
          />
          <div className="flex flex-row justify-center items-center gap-4 px-2 bg-customVeryDarkBlue h-8 w-40 md:h-10 md:w-56 mt-2 rounded-xl">
            <a
              href="https://github.com/Ubed-pathan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub Icon"
                className="h-6 w-6 md:h-8 md:w-8 cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ubed-pathan-35a715242"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn Icon"
                className="h-6 w-6 md:h-8 md:w-8 cursor-pointer"
              />
            </a>
            <a
              href="https://x.com/mr_ubed08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                alt="Twitter Icon"
                className="h-6 w-6 md:h-8 md:w-8 cursor-pointer"
              />
            </a>
            <a href="mailto:ubedpathan818@gmail.com">
              <img
                src={email}
                alt="Email Icon"
                className="h-6 w-6 md:h-8 md:w-8 cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <p className="text-customVeryDarkBlue text-2xl md:text-3xl font-bold">
            <span className="font-bold">
              Hey there! <span className="wave">👋</span>
            </span>{" "}
            <br />
            <span className="font-bold">
              I am <span className="text-fuchsia-800">Ubed Pathan,</span>
            </span>{" "}
            <br />
            <span className="font-bold">a MERN Stack and Java Developer.</span>
          </p>
        </div>
      </div>
      {/* Down Arrow */}
      <div className="down-arrow text-fuchsia-800"></div>
    </div>
  );
}

export default Profile;
