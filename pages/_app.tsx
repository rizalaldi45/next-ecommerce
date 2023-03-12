import { useEffect } from 'react';
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { I18nextProvider, useTranslation } from "react-i18next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import store from "@/store";
import I18n from "../i18n";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    window.location.href = `/${lang}`
  };

  useEffect(() => {
    if (router.locale) {
      i18n.changeLanguage(router.locale);
    }
  }, [])

  return (
    <Provider store={store}>
      <I18nextProvider i18n={I18n}>
        <Header changeLanguage={handleChangeLanguage} />
        <div className='min-h-[50vh]'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </I18nextProvider>
    </Provider>
  );
}
