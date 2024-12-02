import React from 'react';
import aboutImage from '../Images/ubedImage.jpg';

function About() {
  return (
    <div className='min-h-screen flex flex-row justify-center items-center'>
      <section id="about" className="w-[90%] md:w-3/4 mx-auto  p-6 bg-customVeryDarkBlue shadow-2xl rounded-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        <div className="flex justify-center md:w-1/3 mb-6 md:mb-0">
          <img 
            src={aboutImage} 
            alt="About Ubed" 
            className="h-72 w-72 md:h-96 md:w-80 rounded-xl border-4 border-customDarkPink"
          />
        </div>

        <div className="text-center md:text-left md:w-2/3">
          <h2 className="text-3xl font-bold text-customDarkPink mb-4">About Me</h2>
          <p className="text-customLightPink text-lg leading-7">
            Hey there! I’m <span className="text-customDarkPink font-bold">Ubed Pathan</span>, a passionate 
            <span className="text-customDarkPink font-bold"> MERN Stack</span> and 
            <span className="text-customDarkPink font-bold"> Java Developer</span>. 
            I have a knack for building robust, scalable web applications and enjoy creating user-friendly interfaces that deliver great experiences.
          </p>
          <p className="text-customLightPink text-lg leading-7 mt-4">
            When I’m not coding, I like exploring the latest tech trends, learning new skills, and collaborating on innovative projects. My aim is to consistently improve and contribute to the tech community.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default About;
