import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { homeTranslateEn, detailTranslateEn } from "@/public/locale/en/locale";
import { homeTranslateId, detailTranslateId } from "@/public/locale/id/locale";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...homeTranslateEn,
          ...detailTranslateEn,
        },
      },
      id: {
        translation: {
          ...homeTranslateId,
          ...detailTranslateId,
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
