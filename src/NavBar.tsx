import { RxLinkedinLogo } from "react-icons/rx";
import { IconContext } from "react-icons";
import { FaGithubSquare } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { RiMailOpenFill as MailIcon } from "react-icons/ri";
import portrait from "./assets/img/portrait.png";
import cat from "./assets/img/cat.png";

const finished = false;

const NavBar = () => {
  return (
    <header className="flex sticky top-0 items-center leading-10 h-screen flex-col basis-1/4 bg-slate-200 p-5 pt-10 text-stone-700">
      <img
        className="w-3/4 rounded-full"
        src={finished ? portrait : cat}
        alt="Portrait"
      />

      <p className="font-mono text-4xl mt-5 mb-5">Jeongwook Oh</p>
      <p className="font-mono text-xl text-center">
        Fullstack
        <br />
        Software Engineer
      </p>
      <div className="flex mt-1 mb-3">
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
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#exp">Experience</a>
        </li>
        <li>
          <a href="#edu">Education</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <div className="flex flex-row mt-5 mb-5 w-24 justify-between">
        <IconContext.Provider value={{ size: "2.5em" }}>
          <a href="https://www.linkedin.com/" className="hover:text-red-50">
            <RxLinkedinLogo />
          </a>
          <a href="https://github.com/hiphophammer">
            <FaGithubSquare />
          </a>
        </IconContext.Provider>
      </div>
    </header>
  );
};
export default NavBar;
