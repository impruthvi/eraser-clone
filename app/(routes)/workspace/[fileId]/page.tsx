"use client";
import React, { useState } from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";

type Props = {};

const Workspace = (props: Props) => {
  const [triggerSave, setTriggerSave] = useState(false);

  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />
      {/* Workspace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document */}
        <div className="bg-blue-400 h-screen">Document</div>
        {/* Whiteboard/canvas */}
        <div className="bg-red-400 h-screen">Canvas</div>
      </div>
    </div>
  );
};

export default Workspace;
