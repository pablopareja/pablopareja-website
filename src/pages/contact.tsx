import { useTranslation } from "next-export-i18n";

import CookiesBanner from "@/app/components/cookies-banner";
import Head from "next/head";

import Footer from "@/app/footer";
import { ContactContent } from "@/app/pages/ContactContent";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>{`Pablo Pareja - ${t("contact.pageTitle")}`}</title>
      </Head>
      <ContactContent />
      <Footer />

      <div className="fixed bottom-0 left-0">
        <CookiesBanner />
      </div>
    </div>
  );
};

export default Contact;
