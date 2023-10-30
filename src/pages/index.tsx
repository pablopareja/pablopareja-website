import CookiesBanner from "@/app/components/cookies-banner";
import Footer from "@/app/footer";
import { IndexContent } from "@/app/pages/IndexContent";
import { useTranslation } from "next-export-i18n";
import Head from "next/head";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
      </Head>
      <IndexContent />
      <Footer />
      <div className="fixed bottom-0 left-0">
        <CookiesBanner />
      </div>
    </div>
  );
};

export default Home;
