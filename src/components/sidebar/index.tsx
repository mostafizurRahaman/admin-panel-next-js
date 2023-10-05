"use client";

import { LuLayoutDashboard } from "react-icons/lu";
import { TbBrandProducthunt } from "react-icons/tb";
import { PiUsersFourLight } from "react-icons/pi";
import Link from "next/link";
import { useContext } from "react";
// types :
import { MenuItemType } from "@/configs/type";
import { usePathname } from "next/navigation";
import { GlobalContext } from "@/context/globalState";

const menuItems: MenuItemType[] = [
   {
      id: "dashboard",
      label: "dashboard",
      path: "/",
      icon: <LuLayoutDashboard size={25} />,
   },
   {
      id: "products",
      label: "products",
      path: "/products",
      icon: <TbBrandProducthunt size={25} />,
   },
   {
      id: "visitors",
      label: "visitors",
      path: "/visitors",
      icon: <PiUsersFourLight size={25} />,
   },
];

export default function SideBar() {
   const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);
   const pathname = usePathname();
   return (
      <aside
         className={`absolute z-[99999] left-0 top-0  h-screen p-5 bg-black text-white min-w-[200px] ${
            sideBarOpen ? "translate-x-0 " : "-translate-x-full"
         } duration-500 ease-linear`}
      >
         <div>
            <Link
               href={`/`}
               className="  text-4xl font-medium py-10 inline-block uppercase hover:text-red-600 gap-2 text-white   "
            >
               Analytics
            </Link>
         </div>
         <div className="flex items-start justify-start flex-col gap-3">
            {menuItems.map((i, idx) => (
               <Link
                  key={idx}
                  href={i.path}
                  className={`flex items-center justify-start uppercase hover:text-red-600 gap-2  ${
                     pathname.includes(i.path) ? "text-green" : "text-white"
                  }`}
               >
                  {i.icon}
                  <p>{i.label}</p>
               </Link>
            ))}
         </div>
      </aside>
   );
}
