import "./globals.css";
import { Inter } from "next/font/google";
// types imports :
import type { Metadata } from "next";
import { childrenType } from "@/configs/type";
import GlobalState from "../context/globalState";
import Header from "@/components/header";
import SideBar from "@/components/sidebar";

//  meta data of next js :
export const metadata: Metadata = {
   title: "Admin Dashboard",
   description: "Admin panel helps to manage websites easily",
};

// layout function :
export default function RootLayout({ children }: childrenType) {
   return (
      <html lang="en">
         <body>
            <GlobalState>
               <div className="flex h-screen overflow-hidden">
                  <SideBar></SideBar>
                  <div className="flex flex-1 flex-col  overflow-hidden overflow-y-auto">
                     <Header></Header>
                     <main className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                        <div>{children}</div>
                     </main>
                  </div>
               </div>
            </GlobalState>
         </body>
      </html>
   );
}
