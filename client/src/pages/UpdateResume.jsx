import React, { useState } from "react";

import Template from "../components/Templates";
import EditInfo from "../components/Resume/EditInfo";

const UpdateResume = () => {
  return (
    <div className="pt-24">
      <div className="flex flex-col xl:flex-row items-center gap-5 px-5">
        {/* User Info */}
        <div className="w-[95%]">
          <EditInfo />
        </div>

        {/* User CV */}
        <div className="w-[95%]">
          <Template />
        </div>
      </div>
    </div>
  );
};

export default UpdateResume;
