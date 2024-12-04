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
            className="h-72 w-72 md:h-96 md:w-80 rounded-xl border-4 border-customDarkPink object-fill"
          />
        </div>

        <div className="text-center md:text-left md:w-2/3">
          <h2 className="text-3xl font-bold text-customDarkPink mb-4">About Me</h2>
          <p className="text-customLightPink text-lg leading-7 text-justify">
            Hey there! I’m <span className="text-customDarkPink font-bold">Ubed Pathan</span>, a passionate 
            <span className="text-customDarkPink font-bold"> MERN Stack</span>,
            <span className="text-customDarkPink font-bold"> Java</span> and
            <span className="text-customDarkPink font-bold"> Spring Boot Developer</span>. 
            I have a knack for building dynamic, scalable web applications. I specialize in crafting seamless front-end experiences with React and leveraging the power of Node.js, Express, MongoDB, Java, and Spring Boot to build robust back-end solutions.
          </p>
          <p className="text-customLightPink text-lg leading-7 text-justify mt-4">
          I thrive in innovative environments where technology meets creativity, delivering secure and efficient solutions. With a problem-solving mindset and a keen eye for detail, I excel in both collaborative and independent projects. I’m committed to continuous learning, staying current with emerging tech, and transforming complex ideas into clean, maintainable code.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default About;
