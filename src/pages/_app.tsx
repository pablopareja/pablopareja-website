import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";

import store from "@/store";
import { SEO_DATA } from "../../next-seo.config";

import "@/styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ReduxProvider store={store}>
    <DefaultSeo {...SEO_DATA} />
    <SocialProfileJsonLd
      type="Person"
      name="Pablo Pareja"
      url="https://www.pablopareja.com"
      sameAs={[
        "http://www.facebook.com/pabloparejamusic",
        "http://instagram.com/pabloparejamusic",
      ]}
    />
    <Component {...pageProps} />
  </ReduxProvider>
);

export default MyApp;
