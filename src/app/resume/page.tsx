import {
  experiences,
  frameworks,
  languages,
  others,
} from "../../data/local/resumeData";

export interface Experience {
  role: string;
  company: string;
  period: string;
  fullTime: boolean;
  achievements: string[];
}

export const metadata = {
  title: "Resume",
  description: "my resume",
};
const Resume = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-3">
        <div className="p-4">
          <div className="z-[105] box-border flex flex-col gap-2 bg-slate-200 !p-10 dark:bg-slate-900 md:!p-11">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold md:text-3xl">Luis Caro</h1>
              <p className="mt-5 text-lg md:text-xl">
                👋 I am a software developer
              </p>
              <p className="mt-5 w-4/5 text-sm opacity-50 md:text-base">
                I have delivered world-class user experiences to millions of
                people. Well-versed with React, Javascript, and most of the Web
                frameworks.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-5">
              <h2 className="text-xl font-bold md:text-2xl">Experience</h2>
              <ul className="flex flex-col gap-4">
                {experiences.map((experience, i) => (
                  <li key={`experience-${i}`}>
                    <h3 className="text-base font-semibold md:text-lg">
                      {experience.role} at {experience.company}
                    </h3>
                    <p className="mb-2 opacity-70">{experience.period}</p>
                    {
                      <ul className="list-disc">
                        {experience.achievements.map((achievements, i) => (
                          <li
                            key={`achivement-${i}`}
                            className="ml-5 text-sm md:text-base"
                          >
                            {achievements}
                          </li>
                        ))}
                      </ul>
                    }
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <h2 className="text-xl font-bold md:text-2xl">Education</h2>
              <h3>University X</h3>
              <p className="opacity-75">2016-2020</p>
              <p className="text-sm opacity-50 md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-5">
              <h2 className="text-xl font-bold md:text-2xl">Skills</h2>
              <div className="flex flex-col gap-2">
                <h3>Languages</h3>
                <ul className="flex list-disc flex-col gap-2">
                  {languages.map((language, i) => (
                    <li key={`language-${i}`} className="ml-5">
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3>Frameworks</h3>
                <ul className="flex list-disc flex-col gap-2">
                  {frameworks.map((framework, i) => (
                    <li key={`framework-${i}`} className="ml-5">
                      {framework}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base md:text-lg">Others</h3>
                <ul className="flex list-disc flex-col gap-2">
                  {others.map((other, i) => (
                    <li
                      key={`other-${i}`}
                      className="ml-5 text-base md:text-lg"
                    >
                      {other}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button className="button primary">Download</button>
      </section>
    </>
  );
};

export default Resume;
