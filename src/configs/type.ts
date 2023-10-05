import { Dispatch, SetStateAction } from "react";

export type authInfoType = {
   sideBarOpen: boolean;
   setSideBarOpen: Dispatch<SetStateAction<boolean>>;
};

export type childrenType = {
   children: React.ReactNode;
};

export interface MenuItemType {
   id: string;
   label: string;
   path: string;
   icon: JSX.Element;
}
