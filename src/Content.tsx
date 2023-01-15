import imgHtml from "./assets/img/logos/html.png";
import imgCss from "./assets/img/logos/css.png";
import imgJS from "./assets/img/logos/javascript.png";
import imgTailwind from "./assets/img/logos/tailwindcss-icon.svg";
import imgNode from "./assets/img/logos/node.png";
import imgTS from "./assets/img/logos/typescript.svg";
import imgVue from "./assets/img/logos/vue.avif";
import imgReact from "./assets/img/logos/react.png";
import imgNext from "./assets/img/logos/Nextjs-logo.svg";
import imgVite from "./assets/img/logos/vite.png";
import imgPython from "./assets/img/logos/python.png";
import imgEx from "./assets/img/logos/expressjs-icon.svg";
import imgFlask from "./assets/img/logos/pocoo_flask-icon.svg";
import imgSupabase from "./assets/img/logos/supabase-icon.svg";
import imgMysql from "./assets/img/logos/mysql-icon.svg";
import imgMongoDB from "./assets/img/logos/mongodb-icon.svg";
import imgLinux from "./assets/img/logos/linux-icon.svg";
import imgJava from "./assets/img/logos/java-icon.svg";
import imgCsharp from "./assets/img/logos/Csharp-icon.svg";
import imgDocker from "./assets/img/logos/docker-icon.svg";
import imgGit from "./assets/img/logos/git-scm-icon.svg";
import { useState, useEffect } from "react";

const Container = () => {
  const cellStyle = `bg-stone-100 mb-10 p-6`;
  const headerStyle = `font-Montserrat text-3xl mb-5`;
  const paragraphStyle = `font-Poppins`;

  const mainAnimationStyle = `transition-all duration-[1500ms] ease-out`;

  const [mainEffect, setMainEffect] = useState("translate-x-24 opacity-0");
  useEffect(() => {
    setMainEffect("translate-x-0");
  }, []);

  return (
    <main className="flex flex-col basis-3/4 bg-stone-100 text-stone-800 z-1">
      <div
        className={cellStyle + ` flex flex-col h-screen place-content-center`}
        id="home"
      >
        <div
          className={`${mainAnimationStyle} ${mainEffect} font-Montserrat text-9xl mt-5 mb-4`}
        >
          Hello,
        </div>
        <div
          className={`${mainAnimationStyle} ${mainEffect} delay-[1000ms] font-Montserrat text-5xl mb-4 `}
        >
          My name is
        </div>
        <div
          className={`${mainAnimationStyle} ${mainEffect} delay-[1500ms] font-Poppins text-6xl mb-6 `}
        >
          Jeongwook Oh.
        </div>
        <div
          className={`${mainAnimationStyle} ${mainEffect} delay-[2000ms] font-Montserrat text-5xl mb-20 `}
        >
          I build things for the web.
        </div>
      </div>
      <div className={cellStyle} id="skills">
        <div className={headerStyle}>Skills</div>
        <div className="flex justify-between">
          <div className="flex basis-[30%] flex-col">
            <div className="rounded-xl shadow-2xl z-10 py-5 px-1">
              <p className="font-Poppins text-yellow-700 text-2xl text-center mb-5">
                Front End
              </p>
              <div className="flex flex-row justify-between place-items-center mb-4">
                <img src={imgHtml} className="w-14 h-14" title="HTML" />
                <img src={imgCss} className="w-14 h-16" title="CSS" />
                <img src={imgJS} className="w-14 h-14" title="JavaScript" />
                <img src={imgTailwind} className="w-12 h-12" title="Tailwind" />
              </div>
              <div className="flex flex-row justify-between place-items-center">
                <img src={imgReact} className="w-16 h-14" title="React" />
                <img src={imgNext} className="w-14 h-14" title="Next.js" />
                <img src={imgVite} className="w-14 h-14" title="Vite" />
                <img src={imgVue} className="w-14 h-14" title="Vue" />
              </div>
            </div>
          </div>
          <div className="flex basis-[30%] flex-col">
            <div className="rounded-xl shadow-2xl z-10 py-5 px-1">
              <p className="font-Poppins text-yellow-700 text-2xl text-center mb-5">
                Back End
              </p>
              <div className="flex flex-row justify-between place-items-center mb-4">
                <img src={imgTS} className="w-14 h-14" title="TypeScript" />
                <img
                  src={imgNode}
                  className="w-14 h-14 rounded-full"
                  title="Node"
                />
                <img src={imgEx} className="w-16 h-11" title="Express" />
                <img src={imgSupabase} className="w-14 h-14" title="Supabase" />
              </div>
              <div className="flex flex-row justify-between place-items-center">
                <img src={imgPython} className="w-14 h-14" title="Python" />
                <img src={imgFlask} className="w-14 h-14" title="Flask" />
                <img
                  src={imgMysql}
                  className="w-14 h-14"
                  title="SQL (Mainly MySQL/Postgre)"
                />
                <img src={imgMongoDB} className="w-14 h-14" title="MongoDB" />
              </div>
            </div>
          </div>
          <div className="flex basis-[30%] flex-col">
            <div className="rounded-xl shadow-2xl z-10 px-1 py-5">
              <p className="font-Poppins text-yellow-700 text-2xl text-center mb-5">
                Others
              </p>
              <div className="flex flex-row justify-between place-items-center mb-4">
                <img
                  src={imgLinux}
                  className="w-14 h-14"
                  title="Linux (Mainly Ubuntu)"
                />
                <img src={imgJava} className="w-14 h-14" title="Java" />
                <img src={imgCsharp} className="w-14 h-14" title="C#" />
                <img src={imgGit} className="w-14 h-14" title="Git" />
              </div>
              <div className="flex flex-row justify-between place-items-center">
                <img src={imgDocker} className="w-14 h-14" title="Docker" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cellStyle} id="projects">
        <div className={headerStyle}>Projects</div>
        <div className={headerStyle}></div>
        <div className={headerStyle}>Personal</div>
        <div className="flex flex-row justify-between">
          <span>House-elf</span>
          <span>Image Uploader</span>
        </div>
        <div className={headerStyle}>Cooperative</div>
        <div className="flex flex-row justify-between">
          <span>Galaxy Busters</span>
          <span>Face Recognizer</span>
        </div>
      </div>
      <div className={cellStyle} id="exp">
        <div className={headerStyle}>Experience</div>
        <div className={headerStyle}>Freelance Translator</div>
        <div className={headerStyle}>ML/AI Developer</div>
      </div>
      <div className={cellStyle} id="edu">
        <div className={headerStyle}>Education</div>
        <div className="flex flex-row justify-between">
          <p className={paragraphStyle}>
            Bachelor of Science in Computer Engineering
          </p>
          <p className={paragraphStyle}>2019-2022</p>
        </div>
        <p className={paragraphStyle + ` text-stone-500`}>
          University of Washington Bothell
        </p>
      </div>
      <div className={cellStyle} id="contact">
        <div className={headerStyle}>Contact Me</div>
        <div>Email</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
        <div>dffdszfdzs zsdfdszfzsd sdfszf</div>
      </div>
    </main>
  );
};

export default Container;
