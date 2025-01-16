import React from "react";
import "./Header.scss";

import Social from "./Social";
import Data from "./Data";

function Header() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content">
          <Social />

          <div className="home__img"></div>
          <Data />
        </div>
      </div>
    </section>
  );
}

export default Header;
