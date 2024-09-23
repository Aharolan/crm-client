import React from "react";
import GenericSideBarButtons from "./SideBarButton";

const buttons = [{ id: 1, buttonName: "ימי מיונים", url: "/sorting-days" }];

const CandidatesButtons = ({ currentURL }: { currentURL: string }) => {
  return <GenericSideBarButtons buttons={buttons} currentURL={currentURL} />;
};

export default CandidatesButtons;
