import Image from "next/image";
import Typewriter from "@/components/typewriter";

export default function Home() {
  return (
    <div className="w-screen justify-center items-center flex flex-col">
      <div
        className="h-screen w-full flex flex-row justify-center items-center p-10"
        id="home"
      >
        <Typewriter />
      </div>
    </div>
  );
}
