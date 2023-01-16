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
import imgHeroku from "./assets/img/logos/heroku-icon.svg";
import imgGoogleCloud from "./assets/img/logos/google_cloud-icon.svg";
import imgAWS from "./assets/img/logos/amazon_aws-icon.svg";
import { useState, useEffect } from "react";

const Container = () => {
  const cellStyle = `bg-stone-100 mb-10 p-4`;
  const headerStyle = `font-Montserrat text-4xl mb-5 bg-stone-200 text-stone-700`;
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
                Other Skills
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
                <img src={imgHeroku} className="w-14 h-14" title="Heroku" />
                <img
                  src={imgGoogleCloud}
                  className="w-14 h-14"
                  title="Google Cloud"
                />
                <img src={imgAWS} className="w-14 h-14" title="AWS" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cellStyle} id="projects">
        <div className={headerStyle}>Projects</div>
        <div className={headerStyle}></div>
        <div className="font-Montserrat text-2xl">Personal Projects</div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row bg-blue-500 w-full h-80">
            <span className="basis-1/3 bg-red-500">Discord Bot</span>
            <span className="basis-1/3">Image Uploader</span>
            <span className="basis-1/3 bg-red-500">This Webpage</span>
          </div>
        </div>
        <div className="font-Montserrat text-2xl">Cooperative Projects</div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row bg-blue-500 w-full h-80">
            <span className="basis-1/2 bg-red-500">Galaxy Busters</span>
            <span className="basis-1/2">Face Recognition</span>
          </div>
        </div>
      </div>
      <div className={cellStyle} id="exp">
        <div className={headerStyle}>Experience</div>
        <div className="font-Montserrat text-2xl">
          <div className="flex flex-row justify-between place-items-center">
            <p className={paragraphStyle}>Freelance Translator</p>
            <p className={paragraphStyle + ` text-base`}>
              Nov. 2019 - Jan. 2023
            </p>
          </div>

          <div className="font-Poppins text-base w-full bg-stone-100">
            <p>
              After acquiring my Green Card in 2019, I had an opportunity to
              work as a contract-based freelance translator. Even though this
              doesn't directly involve software engineering, I've demonstrated
              the following in a professional setting:
            </p>
            <p className="ml-5">
              1. Outstanding ability to cope with various clients; each client
              has unique needs, different expectations, and different
              personality. Everyone has been happy with my tailored service and
              I have maintained a perfect review score for 3 years.
            </p>
            <p className="ml-5">
              2. Effective time management. Sometimes I had extremely tight
              turnovers, as low as 24 hours, on top of my full-time school work.
              I never missed a single deadline.
            </p>
            <p className="ml-5">
              3. How to soak knowledge. Some of my work required knowledge of
              professional vocabulary and jargons. One time, I learned what
              diabetic peripheral neuropathy (DPN) is, and how clinical trials
              in the United States works overnight and transcribe/translate a
              3-hour-long video of a medical presentation.
            </p>
          </div>
        </div>
        <div className="font-Montserrat text-2xl">
          <div className="flex flex-row justify-between place-items-center">
            <p className={paragraphStyle}>ML/AI Developer</p>
            <p className={paragraphStyle + ` text-base`}>
              Nov. 2021 - Jun. 2022
            </p>
          </div>

          <div className="font-Poppins text-base w-full bg-stone-100">
            <p>
              Briotech is a world-class manufacturer of hypochlorous acid (HOCl)
              and a pioneer of innovation for the creation of the world’s first
              geographically dispersed HOCl manufacturing networks, BrioWHISH®
              Systems (WHISH). I worked on the WHISH for 7 months to develop an
              AI that predicts the outcome variable based on the machine's
              parameters. This is to solve a problem which will soon be
              explained in the following section.
            </p>
          </div>
        </div>
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
    </main>
  );
};

export default Container;
