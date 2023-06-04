import React from "react";
import { Shamir } from "./Shamir";
import { ElGamal } from "./ElGamal";

export const App: React.FC = () => {
  return (
    <div className="App">
      <div className="pt-4">
        <Shamir />
        <ElGamal />
      </div>
    </div>
  );
};
