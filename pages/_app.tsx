import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import store from "@/store";
import i18n from "../i18n";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </I18nextProvider>
    </Provider>
  );
}
