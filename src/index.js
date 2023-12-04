import React, { useState, useEffect } from "react";
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

const RootApp = () => {
  const [language, setLanguage] = useState(i18next.language);

  useEffect(() => {
    const changeLanguage = () => {
      setLanguage(i18next.language);
    };

    // Listen for language changes
    i18next.on("languageChanged", changeLanguage);

    // Clean up the listener when the component unmounts
    return () => {
      i18next.off("languageChanged", changeLanguage);
    };
  }, []);

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App language={language} />
      </I18nextProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootApp />);
