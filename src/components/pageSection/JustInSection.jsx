import React from "react";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { CustomCard } from "../customCards/CustomCard";

export const JustInSection = () => {
  return (
    <div className="mt-5">
      <SectionTitle title="Just In " />
      <div className="d-flex gap-2 justify-content-center flex-wrap">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
};
