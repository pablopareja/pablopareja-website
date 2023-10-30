import CookiesBanner from "@/app/components/cookies-banner";
import Footer from "@/app/footer";
import { MediaContent } from "@/app/pages/MediaContent";
import { useTranslation } from "next-export-i18n";
import Head from "next/head";

const Media: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div tabIndex={0} role="menu">
      <Head>
        <title>{`Pablo Pareja - ${t("media.pageTitle")}`}</title>
      </Head>
      <MediaContent />
      <Footer />
      <div className="fixed bottom-0 left-0">
        <CookiesBanner />
      </div>
    </div>
  );
};

export default Media;
