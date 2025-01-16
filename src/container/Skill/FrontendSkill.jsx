import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
const FrontendSkill = () => {
  return (
    <div className="skills__content">
      <div className="skills__title">Frontend Developer</div>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <FaHtml5 className="skill__icon" style={{ color: "darkorange" }} />

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Medium</span>
            </div>
          </div>
          <div className="skills__data">
            <FaCss3 className="skill__icon" style={{ color: "darkaqua" }} />

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <IoLogoJavascript
              className="skill__icon"
              style={{ color: "yellow" }}
            />

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <FaBootstrap className="skill__icon" />

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <FaReact className="skill__icon" style={{ color: "aqua" }} />

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <FaGitAlt className="skill__icon" style={{ color: "red" }} />

            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendSkill;
