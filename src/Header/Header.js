import React from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <header>
      <div className="header-links" id="home">
        <a href="/#home">
          <img
            src={process.env.PUBLIC_URL + "/assets/logo/Logo_Milenijsko.png"}
            alt="milenijsko-natjecanje"
            className="main-logo"
          />
        </a>
      </div>
      <div className="header-links">
        <div className="header-social-links">
          <a
            href="https://www.facebook.com/millennial.competition22"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="header-social-link"
              src={process.env.PUBLIC_URL + "/assets/social/facebook.png"}
              alt="facebook-link"
            />
          </a>
          <a
            href="https://www.instagram.com/millennial.competition/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="header-social-link"
              src={process.env.PUBLIC_URL + "/assets/social/instagram.png"}
              alt="instagram-link"
            />
          </a>
          <a
            href="https://kreativna-riznica.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="header-social-link"
              src={
                process.env.PUBLIC_URL + "/assets/social/kreativna-riznica.png"
              }
              alt="x-link"
            />
          </a>
          <div className="language-picker">
            <select
              name="languages"
              id="language-select"
              onChange={handleLanguageChange}
            >
              <option value="cro">Hrvatski</option>
              <option value="en">English</option>
              <option value="chi">内斯基</option>
            </select>
          </div>
        </div>
      </div>
      <nav className="main-nav">
        <a href="/#home" className="nav-link" id="active">
          {t("home")}
        </a>
        <a href="/#accordion-menu" className="nav-link">
          {t("cultural-passport")}
        </a>
        <a href="/#kruzna-kreativnost-box" className="nav-link">
          {t("creativity")}
        </a>
        <a href="/#poziv-na-suradnju-box" className="nav-link">
          {t("contact")}
        </a>
      </nav>
    </header>
  );
};
