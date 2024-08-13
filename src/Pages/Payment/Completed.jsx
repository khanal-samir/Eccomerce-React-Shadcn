import { PayNav } from "@/components";
import React from "react";
import { CompleteBody } from "@/components";
const Completed = () => {
  return (
    <div>
      <PayNav second={true} third={true} />
      <CompleteBody />
    </div>
  );
};

export default Completed;
