import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LanguageDetector from "i18next-browser-languagedetector";
import { I18nextProvider, initReactI18next } from "react-i18next";
import croTranslation from "./translations/cro.json";
import enTranslation from "./translations/en.json";
import chiTranslation from "./translations/chi.json";
import i18next from "i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next) // For React
  .init({
    resources: {
      en: { translation: enTranslation },
      cro: { translation: croTranslation },
      chi: { translation: chiTranslation },
    },
    fallbackLng: "cro",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
