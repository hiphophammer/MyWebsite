import { RxLinkedinLogo } from "react-icons/rx";
import { IconContext } from "react-icons";
import { FaGithubSquare } from "react-icons/fa";
import portrait from "./assets/img/portrait.png";
import cat from "./assets/img/cat.png";

const finished = false;

const NavBar = () => {
  return (
    <header className="flex sticky top-0 items-center leading-10 h-screen flex-col basis-1/4 bg-slate-300 p-5 pt-10 text-stone-900">
      <img
        className="w-3/4 rounded-full"
        src={finished ? portrait : cat}
        alt="Portrait"
      />

      <p className="font-mono text-4xl">Jeongwook Oh</p>
      <div className="flex flex-row">
        <IconContext.Provider value={{ size: "2em" }}>
          <a href="https://www.linkedin.com/" className="hover:text-red-50">
            <RxLinkedinLogo />
          </a>
          <a href="https://github.com/hiphophammer">
            <FaGithubSquare />
          </a>
        </IconContext.Provider>
      </div>
      <p className="font-mono text-xl text-center">
        Fullstack
        <br />
        Software Engineer
      </p>
      <ul className="text-center">
        <li>Home</li>
        <li>About Me</li>
        <li>Skills</li>
      </ul>
    </header>
  );
};
export default NavBar;
