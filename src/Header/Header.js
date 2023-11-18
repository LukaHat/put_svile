import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="header-links">
        <a href="#">
          <img
            src={process.env.PUBLIC_URL + "/assets/logo/Logo_Milenijsko.png"}
            alt="milenijsko-natjecanje"
            className="main-logo"
          />
        </a>
        <div className="header-social-links">
          <a href="https://www.facebook.com/" target="_blank">
            <img
              className="header-social-link"
              src={process.env.PUBLIC_URL + "/assets/social/facebook.png"}
              alt="facebook-link"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img
              className="header-social-link"
              src={process.env.PUBLIC_URL + "/assets/social/instagram.png"}
              alt="instagram-link"
            />
          </a>
          <a href="https://kreativna-riznica.com/" target="_blank">
            <img
              className="header-social-link"
              src={
                process.env.PUBLIC_URL + "/assets/social/kreativna-riznica.png"
              }
              alt="x-link"
            />
          </a>
        </div>
      </div>
      <nav className="main-nav">
        <a href="#" className="nav-link" id="active">
          Početna
        </a>
        <a href="#" className="nav-link">
          Hrvatska kulturna putovnica
        </a>
        <a href="#" className="nav-link">
          Kružna kreativnost
        </a>
        <a href="#" className="nav-link">
          Kontakt
        </a>
      </nav>
    </header>
  );
};
