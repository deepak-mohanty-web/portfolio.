import React from "react";
import { FiAward, FiBriefcase } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <FiAward className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Years Experience</span>
      </div>
      <div className="about__box">
        <FiBriefcase className="about__icon" />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">20+ Project</span>
      </div>
      <div className="about__box">
        <BiSupport className="about__icon" />
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}

export default Info;
