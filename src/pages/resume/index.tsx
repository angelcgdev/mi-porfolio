interface Experience{
  role: string,
  company: string,
  period: string,
  fullTime: boolean,
  achievements: string[]
}
const experiences:Experience[] = [
  {
    role: 'Fullstack Engineer',
    company: 'X',
    period: 'March 2022 - Present',
    fullTime: true,
    achievements: [
      'Bullet One',
      'Bullet Two'
    ]

  },
  {
    role: 'Frontend Engineer',
    company: 'X',
    period: 'July 2020 - March 2022',
    fullTime: true,
    achievements: [
      'Worked on the frontend of a React application',
      'Worked on the frontend of a React application'
    ]

  }
];

const languages = [
  "Javascript",
  "HTML5",
  "CSS",
  "Typescript",
  "Dart",
];
const frameworks = [
  "React",
  "NodeJs",
  "Flutter",
]
const others = [
  "Figma",
  "Docker",
  "Azure"
]
const Resume = () => {
  
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-3 py-10">
        <div className="flex flex-col bg-slate-200 dark:bg-slate-900 z-[105]" style={{padding: '5rem 3.5rem'}}>
          <h1 className='text-3xl font-bold'>Luis Caro</h1>
          <p className='text-xl mt-5'>👋 I am a software developer</p>
          <p className="w-4/5 text-base mt-5 opacity-50">I have delivered world-class user experiences to millions of people. Well-versed with React, Javascript, and most of the Web frameworks.</p>
          <div className="mt-5 flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Experience</h2>
            <ul className="flex flex-col gap-4">
              {
                experiences.map((experience, i)=>(
                  <li key={'as'}>
                    <h3 className="text-lg font-semibold">{experience.role} at {experience.company}</h3>
                    <p className="mb-2 opacity-70">{experience.period}</p>
                    {
                      <ul className="list-disc">
                        {experience.achievements.map((achievements, i)=>(
                          <li key={i} className="text-sm ml-5">{achievements}</li>
                        ))}
                      </ul>
                    }
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Education</h2>
            <h3>University X</h3>
            <p className="opacity-75">2016-2020</p>
            <p className="opacity-50 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          </div>
          <div className="mt-5 flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Skills</h2>
            <div className="flex flex-col gap-2">
              <h3>Languages</h3>
              <ul className="list-disc flex flex-col gap-2">
                {languages.map((language, i)=>(
                  <li key={i} className="ml-5">{language}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Frameworks</h3>
              <ul className="list-disc flex flex-col gap-2">
                {frameworks.map((framework, i)=>(
                  <li key={i} className="ml-5">{framework}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Others</h3>
              <ul className="list-disc flex flex-col gap-2">
                {others.map((other, i)=>(
                  <li key={i} className="ml-5">{other}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <button className="primary">Download</button>
      </section>
    </>
  );
}

export default Resume;
{/* <div className="flex flex-col gap-4">
  <h3 className="text-lg font-bold">FullStack developer at X</h3>
  <ul className="flex flex-col gap-2 list-disc">
    <li className="text-sm">Bullet two</li>
    <li className="text-sm">Bullet two</li>
  </ul>
</div> */}