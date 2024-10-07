import React from "react";
import SideNavTopSection, { Team } from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideNavBottomSection from "./SideNavBottomSection";

type Props = {};

const SideNav = (props: Props) => {
  const { user }: any = useKindeBrowserClient();
  return (
    <div className=" h-screen fixed w-72 borde-r border-[1px] p-6 flex flex-col">
      <div className="flex-1">
        <SideNavTopSection user={user} />
      </div>

      <div>
        <SideNavBottomSection
        />
      </div>
    </div>
  );
};

export default SideNav;
