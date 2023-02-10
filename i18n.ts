import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { homeTranslateEn } from "@/public/locale/en/locale";
import { homeTranslateId } from "@/public/locale/id/locale";

i18n
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
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
