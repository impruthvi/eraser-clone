"use client"
import React, { useState } from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";

type Props = {};

const Workspace = (props: Props) => {
  const [triggerSave, setTriggerSave] = useState(false);

  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />
      Workspace
    </div>
  );
};

export default Workspace;
