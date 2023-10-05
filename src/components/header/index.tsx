"use client";
import { GlobalContext } from "@/context/globalState";
import { useContext } from "react";

export default function Header() {
   const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);
   return (
      <header className="w-full sticky top-0  drop-shadow z-[999] bg-gray-400 h-20">
         <div className="flex items-center justify-between w-full">
            <div className="flex flex-grow items-center gap-2 justify-end py-4 px-4 md:px-6 2xl:px-11 ">
               <div className="flex items-center  gap-2 sm:gap-4">
                  <button
                     onClick={() => setSideBarOpen((value) => !value)}
                     className="inline-flex text-white bg-black px-5 py-2"
                  >
                     {sideBarOpen ? "Hide Button " : "Show button "}
                  </button>
               </div>
               <button className="inline-flex text-white bg-black px-5 py-2">
                  Login
               </button>
            </div>
         </div>
      </header>
   );
}
