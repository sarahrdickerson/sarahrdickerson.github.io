import Image from "next/image";
import Typewriter from "@/components/typewriter";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="w-screen justify-center items-center flex flex-col">
      <div
        className="min-h-screen w-full flex flex-row justify-center items-center p-10 bg-[#BBB1D2] gap-20"
        id="home"
      >
        {/* <div className="hidden md:flex md:gap-20 justify-center items-center"> */}
        <div className="container grid md:grid-cols-2 gap-8 md:gap-20 items-center justify-center">
          <div className="flex md:justify-end w-full justify-center">
            <div className="bg-[#FAF6FF] rounded-lg shadow-xl md:w-4/5">
              <div className="bg-[#354259] p-2 rounded-t-lg flex items-center justify-start space-x-1 ">
                <div className="w-3 h-3 bg-[#FAF6FF] rounded-full"></div>
                <div className="w-3 h-3 bg-[#FAF6FF] rounded-full"></div>
                <div className="w-3 h-3 bg-[#FAF6FF] rounded-full"></div>
              </div>
              <div className="p-6 flex flex-row gap-2">
                {/* Content goes here, you can add your typewriter effect or any other content */}
                <p className="text-purple-400">&gt;</p>
                <Typewriter />
              </div>
            </div>
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

        {/* <div className="flex flex-col md:hidden items-center text-center gap-2">
          <div>
            <h2 className="text-4xl font-semibold text-white">sarah</h2>
            <h2 className="text-4xl font-semibold text-white">dickerson</h2>
          </div>
          <h2 className="text-xl font-semibold text-[#354259]">
            software engineer
          </h2>
          <div className="flex flex-row justify-center items-center">
            <a
              href="
                  https://www.linkedin.com/in/srdickerson/
                "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-lg m-2 text-gray-600/75 hover:opacity-50 transition-all" />
            </a>
            <a
              href="
                  https://www.github.com/sarahrdickerson
                  "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg m-2 text-gray-600/75 hover:opacity-50 transition-all" />
            </a>
          </div>
        </div> */}
      </div>

      {/* EXPERIENCE */}
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
    </div>
  );
}
