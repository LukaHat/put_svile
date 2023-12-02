import React from "react";
import { useTranslation } from "react-i18next";

export const Vilijun = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="vilijun-box">
        <article className="text-box">
          <h2>{t("vilijun")}</h2>
          <p>{t("vilijun-description")}</p>
          <span>-JASNA HORVAT</span>
        </article>
      </section>
    </>
  );
};
