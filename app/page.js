import Image from "next/image";
import Typewriter from "@/components/typewriter";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import CodeEditor from "@/components/code_editor";

export default function Home() {
  return (
    <div className="w-screen justify-center items-center flex flex-col">
      {/* -------------- HOMEPAGE -------------- */}
      <div
        className="min-h-screen w-full flex flex-row justify-center items-center p-10 bg-[#BBB1D2] gap-20"
        id="home"
      >
        <div className="container grid md:grid-cols-2 gap-8 md:gap-20 md:items-center justify-center">
          <div className="h-1/2 w-full">
            <CodeEditor />
          </div>
          <div className="flex flex-col gap-2 lg:gap-1 w-full">
            <h1 className="text-6xl font-semibold text-[#354259]">
              hi, my
              <br />
              name is
            </h1>
            <h1 className="text-6xl font-semibold text-white">
              sarah dickerson<span className="text-[#354259]">,</span>
            </h1>
            <h1 className="text-6xl font-semibold text-[#354259]">and i'm a</h1>
            <h1 className="text-6xl font-semibold text-white">
              software
              <br />
              engineer<span className="text-[#354259]">.</span>
            </h1>
            <div className="flex flex-row mt-5 gap-5 ">
              <a
                href="https://www.linkedin.com/in/srdickerson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogoIcon className="text-[#354259] w-8 h-8 hover:text-gray-500/75 transition duration-300 ease-in-out" />
              </a>
              <a
                href="https://www.github.com/sarahrdickerson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoIcon className="text-[#354259] w-8 h-8 hover:text-gray-500/75 transition duration-300 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* -------------- EXPERIENCE -------------- */}
      <div
        className="min-h-screen bg-[#EDECED] text-[#131411] p-10"
        // className="min-h-screen w-full flex flex-col p-10 md:p-20 pt-[100px] gap-10 bg-[#EDECED] text-[#131411]"
        id="experience"
      >
        {/* EDUCATION */}
        <div>
          <div className="container grid md:grid-cols-3 gap-8 items-center mb-4">
            <div className="md:col-start-2 md:col-span-2">
              <h2 className="inline-block bg-[#BBB1D275] text-2xl py-2 px-4 md:-ml-4 mb-4 font-semibold text-[#354259]">
                education
              </h2>
            </div>
          </div>

          <div className="container grid md:grid-cols-3 gap-4 md:gap-8 mb-16">
            <div className="md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">
              2020 - 2024
            </div>
            <div className="md:pl-12 md:col-span-2 relative text-[#131411] ">
              <h3 className="text-xl  hover:text-[#bf5701] transition duration-300 ease-in-out">
                B.S., Electrical and Computer Engineering
              </h3>
              <p className="text-lg text-gray-800  hover:text-[#bf5701] transition duration-300 ease-in-out">
                Minor: Business
              </p>
              <a
                className="text-md text-gray-600 pb-4 italic  hover:text-[#bf5701] transition duration-300 ease-in-out"
                href="https://www.utexas.edu"
              >
                The University of Texas at Austin
              </a>
            </div>
          </div>
        </div>

        <div className="relative pb-5">
          <div className="absolute inset-0">
            <div className="container grid md:grid-cols-3 gap-8 items-center h-full w-full">
              <div className="md:col-start-2 h-full pt-16 ml-2">
                <div className="w-0.5 bg-gray-500 h-full"></div>
              </div>
            </div>
          </div>

          <div className="container grid md:grid-cols-3 gap-8 items-center mb-4">
            <div className="md:col-start-2 md:col-span-2">
              <h2 className="inline-block bg-[#BBB1D275] text-2xl py-2 px-4 md:-ml-4 mb-4 font-semibold text-[#354259]">
                work experience
              </h2>
            </div>
          </div>

          {/* ARISTOCRAT */}
          <div className="container grid md:grid-cols-3 gap-4 md:gap-8 mb-16">
            <div className="pl-12 md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">
              Jan 2024 - Present
            </div>
            <div className="pl-12 md:col-span-2 relative">
              <div className="rounded-full bg-[#EDECED] border-2 border-gray-500 w-5 h-5 absolute mt-1.5 -ml-12"></div>
              <h3 className="text-xl font-bold text-[#7F7895]">
                AI Software Engineering Intern
                <a
                  className="italic font-light hover:text-[#BBB1D2] transition duration-300 ease-in-out"
                  href="https://www.aristocrat.com"
                >
                  {" "}
                  @ Aristocrat
                </a>
              </h3>
              <p className="text-sm text-gray-500 pb-4">Austin, TX | Co-Op</p>
              <div className="pr-5 md:pr-20">
                <ul className="list-disc">
                  <li className="pb-2">
                    Leveraged Large Language Models (LLMs) and Generative AI to
                    engineer an AI-powered Avatar Dealer in Unreal Engine 5,
                    enabling intelligent and context-aware responses in
                    real-time
                  </li>
                  <li className="pb-2">
                    Implemented Text-to-Speech (TTS) and Speech-to-Text (STT)
                    models to simulate lifelike human interactions, elevating
                    the immersive quality of in-game experiences
                  </li>
                  <li>
                    Integrated NVIDIA Omniverse for seamless real-time rendering
                    of lip-synced audio for avatar&apos;s responses
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SILABS */}
          <div className="container grid md:grid-cols-3 gap-4 md:gap-8 mb-16">
            <div className="pl-12 md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">
              Jun 2023 - Aug 2023
            </div>
            <div className="pl-12 md:col-span-2 relative">
              <div className="rounded-full bg-[#EDECED] border-2 border-gray-500 w-5 h-5 absolute mt-1.5 -ml-12"></div>
              <h3 className="text-xl font-bold text-[#7F7895]">
                Software Engineering Intern
                <a
                  className="italic font-light hover:text-[#BBB1D2] transition duration-300 ease-in-out"
                  href="https://www.silabs.com"
                >
                  {" "}
                  @ Silicon Labs
                </a>
              </h3>
              <p className="text-sm text-gray-500 pb-4">
                Austin, TX | Internship
              </p>
              <div className="pr-5 md:pr-20">
                <ul className="list-disc">
                  <li className="pb-2">
                    Enhanced the metadata management of Simplicity Studio IDE by
                    resolving bug and feature tickets in the product&apos;s
                    extensive Java codebase, driving continuous improvement of
                    company software
                  </li>
                  <li className="pb-2">
                    Increased average code coverage on 4 C++ projects from 21.5%
                    to 81.5% by developing and expanding unit tests and
                    optimizing Makefiles, significantly enhancing overall code
                    quality and unit test effectiveness
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ARISTOCRAT pt2 */}
          <div className="container grid md:grid-cols-3 gap-4 md:gap-8 mb-16">
            <div className="pl-12 md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">
              Sep 2022 - Apr 2023
            </div>
            <div className="pl-12 md:col-span-2 relative">
              <div className="rounded-full bg-[#EDECED] border-2 border-gray-500 w-5 h-5 absolute mt-1.5 -ml-12"></div>
              <h3 className="text-xl font-bold text-[#7F7895]">
                Software Engineering Intern
                <a
                  className="italic font-light hover:text-[#BBB1D2] transition duration-300 ease-in-out"
                  href="https://www.silabs.com"
                >
                  {" "}
                  @ Aristocrat
                </a>
              </h3>
              <p className="text-sm text-gray-500 pb-4">Austin, TX | Co-Op</p>
              <div className="pr-5 md:pr-20">
                <ul className="list-disc">
                  <li className="pb-2">
                    Developed a proof-of-concept loyalty app using Angular,
                    facilitating seamless NFC communication from mobile wallet
                    passes to electronic gambling machines, enhancing user
                    experience and connectivity
                  </li>
                  <li className="pb-2">
                    Demonstrated the app's capabilities with sample wallet
                    passes, showcasing its potential to executives
                  </li>
                  <li>
                    Automated wallet pass generation using Python scripts,
                    facilitating integration into the loyalty app
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* UT TA */}
          <div className="container grid md:grid-cols-3 gap-4 md:gap-8 mb-16">
            <div className="pl-12 md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">
              Jan 2022 - Apr 2023
            </div>
            <div className="pl-12 md:col-span-2 relative">
              <div className="rounded-full bg-[#EDECED] border-2 border-gray-500 w-5 h-5 absolute mt-1.5 -ml-12"></div>
              <h3 className="text-xl font-bold text-[#7F7895]">
                Undergraduate Teaching Assistant
                <a
                  className="italic font-light hover:text-[#BBB1D2] transition duration-300 ease-in-out"
                  href="https://www.utexas.edu"
                >
                  {" "}
                  @ UT Austin
                </a>
              </h3>
              <p className="text-sm text-gray-500 pb-4">
                Austin, TX | Part-Time
              </p>
              <div className="pr-5 md:pr-20">
                <ul className="list-disc">
                  <li className="pb-2">
                    Led weekly recitation sessions for 15-20 students on C/C++
                    topics, data structures, algorithms, and more, resulting in
                    heightened comprehension and academic success within my
                    section
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* NEXT */}
        </div>
      </div>

      {/* -------------- PROJECTS --------------*/}
      <div
        className="min-h-screen bg-[#EDECED] text-[#131411] p-10 w-full"
        // className="min-h-screen w-full flex flex-col p-10 md:p-20 pt-[100px] gap-10 bg-[#EDECED] text-[#131411]"
        id="projects"
      >
        <div>
          <div className="container grid md:grid-cols-3 gap-8 items-center mb-4">
            <div className="md:col-start-2 md:col-span-2">
              <h2 className="inline-block bg-[#BBB1D275] text-2xl py-2 px-4 md:-ml-4 mb-4 font-semibold text-[#354259]">
                projects
              </h2>
            </div>
          </div>

          {/* ITINERAIRY */}
          <div className="flex flex-col justify-center items-center gap-5 text-[#354259] mb-20">
            <img
              src="itinerairy.jpg"
              alt="itinerairy UI"
              className="w-3/5 border-4 rounded-md border-[#7F789590]"
            />
            <div className="flex flex-col justify-ceenter items-center w-1/2">
              <h2 className="uppercase font-bold text-xl">ITINERAIRY</h2>
              <h3 className=" italic text-lg mb-5 text-gray-600">
                Innovating travel with AI-driven planning
              </h3>
              <p className="text-center text-gray-500">
                A sophisticated web application utilizing Next.js and enhanced
                by AI, ItinerAIry offers users an interactive platform for
                crafting tailored travel itineraries. The system intelligently
                adapts to individual preferences using OpenAI's GPT, supports
                real-time collaborative planning, and incorporates advanced
                features such as a multi-currency budget tracker and a personal
                travel bucket list, all orchestrated within a seamless
                user-centric design.
              </p>
              <div className="flex flex-row gap-5">
                <Badge>JavaScript</Badge>
                <Badge variant="secondary">OpenAI</Badge>
                <Badge variant="outline">SQL</Badge>
                <Badge>Next.js</Badge>
              </div>
            </div>
          </div>

          {/* NExt */}
          <div className="container grid md:grid-cols-2 gap-8 md:gap-20 items-center justify-center">
            <div className="flex flex-col items-center text-center justify-center">
              <img
                src="aimusicgen.png"
                alt="ai musig generator UI"
                className="w-4/5 border-4 rounded-md border-[#7F789590]"
              />
              <div className="flex flex-col justify-ceenter items-center w-4/5">
                <h2 className="uppercase font-bold text-xl">
                  AI Music Generator
                </h2>
                <h3 className=" italic text-lg mb-5 text-gray-600">
                  Music Generation powered by AI
                </h3>
                <p className="text-center text-gray-500">
                  An innovative web application designed for indie artists and
                  garage bands, offering AI-generated music samples for creative
                  inspiration. It features intuitive music generation and
                  editing, allowing users to craft unique compositions and
                  transform existing pieces, elevating the music creation
                  process with technology-driven novelty and personalization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
