import java from '../Images/java.png';
import spring from '../Images/spring.png';
import spring_boot from '../Images/spring_boot.png';
import react from '../Images/react.png';
import node from '../Images/node.png';
import express from '../Images/express.png';
import mongodb from '../Images/mongo.png';
import js from '../Images/java-script.png';
import html from '../Images/html.png';
import css from '../Images/css.png';
import sql from '../Images/mysql.png';
import docker from '../Images/docker.png';
import tcss from '../Images/tailwind.png';
import git from '../Images/git.png';
import github from '../Images/github.png';

function Skills() {
  const skills = [
    { name: 'Java', icon: java },
    { name: 'Spring', icon: spring },
    { name: 'Spring Boot', icon: spring_boot },
    { name: 'React', icon: react },
    { name: 'NodeJs', icon: node },
    { name: 'ExpressJs', icon: express },
    { name: 'MongoDB', icon: mongodb },
    { name: 'JavaScript', icon: js },
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'MySQL', icon: sql },
    { name: 'Docker', icon: docker },
    { name: 'Tailwind CSS', icon: tcss },
    { name: 'Git', icon: git },
    { name: 'GitHub', icon: github },
  ];

  return (
    <>
    <div className='flex flex-row justify-center items-center min-h-screen'>
    <div className='flex flex-col items-center'>
      <div className='text-customVeryDarkBlue md:text-6xl text-4xl py-3'>Skills</div>
      <hr className="border-0 bg-customVeryDarkBlue h-0.5 w-3/4" />
      <div className="flex justify-center gap-8 p-10 flex-wrap">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group relative w-24 h-24 bg-customLightPink rounded-full flex justify-center items-center shadow-lg transition-transform transform hover:scale-110 hover:translate-y-[-15px]"
        >
          <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-customDarkPink bg-customVeryDarkBlue px-2 py-1 rounded">
            {skill.name}
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
    </>
  );
}

export default Skills;
