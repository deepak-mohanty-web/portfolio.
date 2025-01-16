import React from "react";
import { FaPhp, FaPython, FaNodeJs } from "react-icons/fa";
import { SiMariadb, SiFirebase, SiMysql } from "react-icons/si";
const BackendSkill = () => {
  return (
    <div className="skills__content">
      <div className="skills__title">Backend Developer</div>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <FaPhp className="skill__icon" />

            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <FaPython
              className="skill__icon"
              style={{ color: "blue" }}
            />

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <FaNodeJs className="skill__icon" style={{ color: "green" }} />

            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <SiMariadb className="skill__icon" />

            <div>
              <h3 className="skills__name">MariaDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <SiMysql className="skill__icon" />

            <div>
              <h3 className="skills__name">My Sql</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <SiFirebase
              className="skill__icon"
              style={{ color: "rgb(201, 213, 32)" }}
            />

            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendSkill;
