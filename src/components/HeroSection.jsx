import Typewriter from "typewriter-effect";
import { useDarkMode } from "@/hooks/useDarkMode";

export const HeroSection = () => {
  const isDarkMode = useDarkMode();
  const themeKey = isDarkMode ? "dark" : "light";

  return (
    <section className="w-full" aria-labelledby="hero-heading">
      <div>
        <h1
          id="hero-heading"
          className="text-[28px] md:text-[48px] font-extrabold text-hero-heading min-h-typewriter"
        >
          <span role="presentation">
            <Typewriter
              key={themeKey}
              onInit={(tw) => {
                tw.changeDelay(100)
                  .typeString("Hi, I'm Sai Charan.")
                  .callFunction(() => {
                    tw.stop();
                  })
                  .start();
              }}
              options={{
                loop: false,
                cursor: "|",
              }}
            />
          </span>
        </h1>

        <div>
          <p className="text-[16px] md:text-[24px] text-hero-subtext">
            I'm a computer science student at KL University.
          </p>
          <p className="text-[16px] md:text-[24px] text-hero-subtext">
            Interested in AI, ML, Computer Vision, and building real-world projects while improving DSA.
          </p>
        </div>
      </div>

      <div className="mt-[16px] md:mt-[24px] flex flex-wrap gap-[12px]">
        <a
          href="https://drive.google.com/file/d/1-GwfUawb8fkRul0yzbLUw4LKv011JWiM/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-resume text-[14px] md:text-[16px] cursor-pointer"
          aria-label="View Resume PDF"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2 -mt-[2px]"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          Resume
        </a>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="btn-primary md:hidden text-[14px] md:text-[16px]"
          aria-label="Scroll to Contact Section"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};
