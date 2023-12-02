import React from "react";
import { useTranslation } from "react-i18next";

export const Vilijun = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <section className="vilijun-box">
        <article className="text-box">
          <h2>{t("vilijun")}</h2>
          <p>{t("vilijun-description")}</p>
          <span>-JASNA HORVAT</span>
        </article>
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
      </section>
    </>
  );
};
