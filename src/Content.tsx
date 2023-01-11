import imgHtmlCss from "./assets/img/html_css.png";

const Container = () => {
  const cellStyle = `bg-stone-100 mb-10 p-6`;
  const headerStyle = `font-Montserrat text-3xl mb-5`;
  const paragraphStyle = `font-Poppins`;

  return (
    <main className="flex flex-col basis-3/4 bg-stone-100 text-stone-800">
      <div
        className={cellStyle + ` flex flex-col h-screen place-content-center`}
        id="home"
      >
        <div
          className={
            "transition-all translate-x-0 opacity-100 ease-out font-Montserrat text-9xl mt-5 mb-4"
          }
        >
          Hello,
        </div>
        <div className={"font-Montserrat text-5xl mb-4"}>My name is</div>
        <div className={"font-Poppins text-6xl mb-6"}>Jeongwook Oh</div>
        <div className={"font-Montserrat text-5xl mb-20"}>
          I build things for the web.
        </div>
      </div>
      <div className={cellStyle} id="skills">
        <div className={headerStyle}>Skills</div>
        <div className="flex justify-between">
          <div className="flex basis-[30%] flex-col">
            <div className="border-2 border-stone-500 shadow-xl">
              <p className="font-Poppins text-yellow-700 text-2xl text-center">
                Languages
              </p>
              <p></p>
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
