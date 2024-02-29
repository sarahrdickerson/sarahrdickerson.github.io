import Image from "next/image";
import Typewriter from "@/components/typewriter";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="w-screen justify-center items-center flex flex-col">
      <div
        className="h-screen w-full flex flex-row justify-center items-center p-10 bg-[#BBB1D2] gap-20"
        id="home"
      >
        <div className="hidden md:flex md:gap-20 justify-center items-center">
          <div className="bg-[#FAF6FF] rounded-lg shadow-xl w-[400px] h-[300px]">
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
          <div className="p-5 flex flex-col gap-2 lg:gap-1 w-2/5">
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
    </div>
  );
}
