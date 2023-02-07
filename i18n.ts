import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { homeTranslateEn } from "@/public/locale/en/locale";
import { homeTranslateId } from "@/public/locale/id/locale";

const options = {
  order: ["localStorage"],
  lookupLocalStorage: "i18nextLng",
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...homeTranslateEn,
        },
      },
      id: {
        translation: {
          ...homeTranslateId,
        },
      },
    },
    detection: options,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
