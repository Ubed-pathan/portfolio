import { FaRegUser } from "react-icons/fa";
import { BsInfoSquare } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { Link } from 'react-scroll';

function Nav() {
  return (
    <nav className="bg-customVeryDarkBlue text-customLightPink p-4 fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-1/2 rounded-full shadow-lg z-50 border-customDarkPink border-2" >
      <ul className="flex justify-between md:justify-center md:space-x-16">
        <li className="group relative hover:scale-110 transition-transform">
          <Link to="profile" smooth={true} duration={700} offset={-100}>
            <FaRegUser size={25} className="text-customDarkPink mx-auto cursor-pointer" />
          </Link>
          <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-customDarkPink text-customVeryDarkBlue text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Profile
          </span>
        </li>
        <li className="group relative hover:scale-110 transition-transform">
          <Link to="about" smooth={true} duration={700}>
            <BsInfoSquare size={25} className="text-customDarkPink mx-auto cursor-pointer" />
          </Link>
          <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-customDarkPink text-customVeryDarkBlue text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            About
          </span>
        </li>
        <li className="group relative hover:scale-110 transition-transform">
          <Link to="skill" smooth={true} duration={700}>
            <FaCode size={25} className="text-customDarkPink mx-auto cursor-pointer" />
          </Link>
          <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-customDarkPink text-customVeryDarkBlue text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Skills
          </span>
        </li>
        <li className="group relative hover:scale-110 transition-transform">
          <Link to="project" smooth={true} duration={700}>
            <GoProjectSymlink size={25} className="text-customDarkPink mx-auto cursor-pointer" />
          </Link>
          <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-customDarkPink text-customVeryDarkBlue text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Projects
          </span>
        </li>
        <li className="group relative hover:scale-110 transition-transform">
          <Link to="contact" smooth={true} duration={700}>
            <GrContact size={25} className="text-customDarkPink mx-auto cursor-pointer" />
          </Link>
          <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-customDarkPink text-customVeryDarkBlue text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Contact
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
