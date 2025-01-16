import React from 'react'
import "./Skill.scss";
import FrontendSkill from './FrontendSkill';
import BackendSkill from './BackendSkill';



function Skill() {
  return (
    <div className="section__skill section" id="skill">
      <h3 className="section__title">Skills</h3>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <FrontendSkill />
        <BackendSkill />

      </div>
    </div>
  )
}

export default Skill
