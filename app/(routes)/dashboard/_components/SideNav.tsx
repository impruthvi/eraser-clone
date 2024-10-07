import React, { useContext, useEffect, useState } from "react";
import SideNavTopSection, { Team } from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideNavBottomSection from "./SideNavBottomSection";
import { api } from "@/convex/_generated/api";
import { useConvex, useMutation } from "convex/react";
import { FileListContext } from "@/app/_context/FilesListContext";
import { toast } from "sonner";

type Props = {};

const SideNav = (props: Props) => {
  const [totalFiles, setTotalFiles] = useState<Number>(0);
  const [activeTeam, setActiveTeam] = useState<Team | any>();
  const { fileList_, setFileList_ } = useContext(FileListContext);

  const { user }: any = useKindeBrowserClient();
  const createFile = useMutation(api.files.createFile);
  const convex = useConvex();

  useEffect(() => {
    activeTeam && getFiles();
  }, [activeTeam]);

  const onFileCreate = (fileName: string) => {
    console.log(fileName);
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id,
      createdBy: user?.email,
      archive: false,
      document: "",
      whiteboard: "",
    }).then(
      (resp) => {
        if (resp) {
          getFiles();
          toast("File created successfully!");
        }
      },
      (e) => {
        toast("Error while creating file");
      }
    );
  };

  const getFiles = async () => {
    const result = await convex.query(api.files.getFiles, {
      teamId: activeTeam?._id,
    });
    console.log(result);
    setFileList_(result);
    setTotalFiles(result?.length);
  };

  return (
    <div className=" h-screen fixed w-72 borde-r border-[1px] p-6 flex flex-col">
      <div className="flex-1">
        <SideNavTopSection
          user={user}
          setActiveTeamInfo={(activeTeam: Team) => setActiveTeam(activeTeam)}
        />
      </div>

      <div>
        <SideNavBottomSection
          onFileCreate={onFileCreate}
          totalFiles={totalFiles}
        />
      </div>
    </div>
  );
};

export default SideNav;
