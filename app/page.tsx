import Hero from "@/Components/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <main className="relative bg-[#000319] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-hidden">
  <div className="max-w-7xl w-full">
  <Hero />
  </div>
   </main>
  );
}
