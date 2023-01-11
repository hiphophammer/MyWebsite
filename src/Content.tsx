const Container = () => {
  const cellStyle = `bg-slate-50 mb-20 p-6`;
  const headerStyle = `font-mono`;
  const paragraphStyle = `font-serif`;

  return (
    <main className="flex flex-col basis-3/4 bg-slate-100 text-stone-800">
      <div className={cellStyle} id="home">
        <p className={headerStyle + " text-9xl mt-5 mb-3"}>Hello,</p>
        <p className={headerStyle + " text-5xl mb-2"}>My name is</p>
        <p className={headerStyle + " text-6xl mb-3"}>Jeongwook Oh</p>
        <p className={headerStyle + " text-5xl mb-3"}>
          I build things for the web.
        </p>
      </div>
      <div className={cellStyle} id="skills">
        <div className={headerStyle}>Skills</div>
        <div className={headerStyle}>HTML/CSS</div>
        <div className={headerStyle}>JavaScript</div>
        <div className={headerStyle}>Python</div>
        <div className={headerStyle}>C#</div>
        <div className={headerStyle}>C++</div>
        <div className={headerStyle}>C</div>
        <div className={headerStyle}>Skills</div>
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
          <p className={paragraphStyle}>Bachelor of Science</p>
          <p className={paragraphStyle}>2019-2022</p>
        </div>
        <p className={paragraphStyle}>Computer Engineering</p>
        <p className={paragraphStyle + ``}>University of Washington Bothell</p>
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

      <div className={cellStyle}>
        <p className={headerStyle + " text-8xl mb-3"}>Thank you!</p>
      </div>
    </main>
  );
};

export default Container;
