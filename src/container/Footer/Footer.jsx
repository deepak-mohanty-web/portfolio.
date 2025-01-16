import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h3 className="footer__title">Deepak Kumar Mohanty</h3>
        <p className="footer__description">
          Aspiring Full-Stack Developer passionate about coding and creating
          meaningful projects.
        </p>
        <ul className="footer__socials">
          <li>
            <a
              href="https://github.com/deepak-mohanty-web"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/deepakmohanty12/"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/deepak.mohanty.3760430"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Deepak Kumar Mohanty. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
