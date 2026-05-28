import { motion } from "framer-motion";
import { Code2, SquareArrowOutUpRight } from "lucide-react";

export const CodingProfiles = () => {
  const profiles = [
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/loptr",
      username: "loptr",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/saicharan1907/",
      username: "saicharan1907",
    },
  ];

  return (
    <section
      id="coding-profiles"
      className="w-full space-y-[24px] md:space-y-[48px]"
    >
      <div className="md:px-[56px] px-[28px] w-full">
        <h2
          id="coding-profiles-heading"
          className="text-left text-foreground text-[24px] md:text-[32px] font-bold transition-colors duration-200"
        >
          Coding Profiles
        </h2>
      </div>
      <ul
        className="
            space-y-6 md:space-y-0
            md:px-[74px] px-[28px]
            md:flex md:flex-wrap md:gap-x-8 md:gap-y-6
            items-start
        "
      >
        {profiles.map((profile, idx) => (
          <motion.li
            key={idx}
            className="flex items-start gap-3 md:gap-4 md:basis-[30%] md:min-w-[260px]"
          >
            <Code2 className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-[3px] md:mt-[6px] text-foreground/70" />

            <div className="min-w-0">
              <h3 className="text-[18px] md:text-[24px] font-semibold text-foreground leading-snug">
                {profile.name}
              </h3>

              <p className="text-[14px] md:text-[16px] text-hero-subtext mt-1 leading-snug">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline md:whitespace-nowrap"
                >
                  <span>{profile.username}</span>
                  <SquareArrowOutUpRight
                    className="w-3.5 h-3.5 shrink-0 align-middle -mt-px"
                    aria-hidden="true"
                  />
                </a>
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
