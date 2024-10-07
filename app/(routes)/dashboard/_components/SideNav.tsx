import React from "react";
import SideNavTopSection from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

type Props = {};

const SideNav = (props: Props) => {
  const { user }: any = useKindeBrowserClient();
  return (
    <div className="bg-slate-100 h-screen fixed w-72 border-r p-6">
      <SideNavTopSection user={user}/>
    </div>
  );
};

export default SideNav;
