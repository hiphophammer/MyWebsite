import imgHtml from "./assets/img/logos/html.png";
import imgCss from "./assets/img/logos/css.png";
import imgJS from "./assets/img/logos/javascript.png";
import imgTailwind from "./assets/img/logos/tailwind.png";
import imgVue from "./assets/img/logos/vue.avif";
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
            <div className="rounded-xl shadow-2xl z-10">
              <p className="font-Poppins text-yellow-700 text-2xl text-center mb-5">
                Front End
              </p>
              <div className="flex flex-row justify-between place-items-center mb-4">
                <img src={imgHtml} className="w-16 h-14" title="HTML" />
                <img src={imgCss} className="w-16 h-16" title="CSS" />
                <img src={imgJS} className="w-14 h-14" title="JavaScript" />
                <img src={imgTailwind} className="w-14 h-14" title="Tailwind" />
              </div>
              <div className="flex flex-row justify-between place-items-center">
                <img src={imgVue} className="w-16 h-14" title="Vue" />
              </div>
            </div>
            <div className="rounded-xl bg-[#000000] z-10 mt-5">
              <p className="font-Poppins text-yellow-700 text-2xl text-center mb-5">
                Back End
              </p>
              <div className="flex flex-row justify-between place-items-center mb-4">
                <img src={imgHtml} className="w-16 h-14" title="HTML" />
                <img src={imgCss} className="w-16 h-16" title="CSS" />
                <img src={imgJS} className="w-14 h-14" title="JavaScript" />
                <img src={imgTailwind} className="w-14 h-14" title="Tailwind" />
              </div>
              <div className="flex flex-row justify-between place-items-center">
                <img src={imgVue} className="w-16 h-14" title="Vue" />
              </div>
            </div>
          </div>
          <div className="flex basis-[30%] bg-red-500">dfd</div>
          <div className="flex basis-[30%] bg-red-500">dfd</div>
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
