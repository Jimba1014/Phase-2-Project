import React from "react";
import HeaderImage from "../assets/musicalCohort.png"
import NoteImage from "../assets/eighthnotes.png"


function Header() {
  return (
    <div id="main-header">
      <img src={NoteImage} alt="eighth note"></img>
      <img src={HeaderImage} alt="Musical Cohort" id="mainHeader"></img>
      <img src={NoteImage} alt="eighth note"></img>
    </div>
  );
}

export default Header;
