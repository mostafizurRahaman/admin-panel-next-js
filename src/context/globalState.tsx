"use client";
import { authInfoType, childrenType } from "@/configs/type";
import { createContext, useState } from "react";

export const GlobalContext = createContext({} as authInfoType);

const GlobalState = ({ children }: childrenType) => {
   const [sideBarOpen, setSideBarOpen] = useState<boolean>(true);
   const authInfo: authInfoType = { sideBarOpen, setSideBarOpen };
   return (
      <GlobalContext.Provider value={authInfo}>
         {children}
      </GlobalContext.Provider>
   );
};

export default GlobalState;
