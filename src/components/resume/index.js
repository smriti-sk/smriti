import React from "react";
import "./style.css";
import Iframe from "react-iframe";
import resumepdf from "../../assets/Smriti_Kumari_CV.pdf"

export const Resume = () => {
  return (
    <div id="resume">
      <Iframe
        src={resumepdf}
        id="MyResume"
        display="block"
        position="relative"
      />
    </div>
  );
};

