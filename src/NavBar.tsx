import { RxLinkedinLogo } from "react-icons/rx";
import { IconContext } from "react-icons";
import { FaGithubSquare } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import { RiMailOpenFill as MailIcon } from "react-icons/ri";
import portrait from "./assets/img/portrait.png";
import cat from "./assets/img/cat.png";

const finished = false;

const linkHover = `transition duration-400 ease-in-out hover:text-stone-500 hover:underline`;

const NavBar = () => {
  return (
    <header className="font-Montserrat flex sticky top-0 items-center leading-10 min-h-screen max-h-screen flex-col basis-1/4 bg-stone-200 p-7 pt-10 text-stone-700">
      <img
        className="w-3/4 rounded-full"
        src={finished ? portrait : cat}
        alt="Portrait"
      />

      <p className="font-Poppins text-3xl mt-10 mb-2 text-stone-800">
        Jeongwook Oh
      </p>
      <p className="font-Montserrat text-xl text-center">
        Full Stack
        <br />
        Software Engineer
      </p>
      <div className="flex mt-1">
        <IconContext.Provider
          value={{
            size: "1.5em",
            style: { marginRight: "0.1em", marginTop: "0.4em" },
          }}
        >
          <IoLocation />
        </IconContext.Provider>
        <p className="m-auto">Everett, WA</p>
      </div>
      <ul className="text-center">
        <li>
          <a href="#home" className={linkHover}>
            Home
          </a>
        </li>
        <li>
          <a href="#skills" className={linkHover}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className={linkHover}>
            Projects
          </a>
        </li>
        <li>
          <a href="#exp" className={linkHover}>
            Experience
          </a>
        </li>
        <li>
          <a href="#edu" className={linkHover}>
            Education
          </a>
        </li>
      </ul>
      <div className="flex flex-row mt-5 mb-5 w-24 justify-between">
        <IconContext.Provider value={{ size: "2.5em" }}>
          <a
            href="https://www.linkedin.com/"
            className="transition duration-500 ease-in-out hover:text-stone-400"
          >
            <RxLinkedinLogo />
          </a>
          <a
            href="https://github.com/hiphophammer"
            className="transition duration-500 ease-in-out hover:text-stone-400"
          >
            <FaGithubSquare />
          </a>
        </IconContext.Provider>
      </div>
      <IconContext.Provider value={{ size: "2em" }}>
        <a
          className="relative translate-y-12 transition duration-500 ease-in-out hover:text-stone-400"
          onClick={() => {}}
        >
          <MdLightMode />
        </a>
      </IconContext.Provider>
    </header>
  );
};
export default NavBar;
