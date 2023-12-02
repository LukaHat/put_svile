import React from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <p>{t("footer-description")}</p>
      <p>{t("rights-reserved")}</p>
    </footer>
  );
};
