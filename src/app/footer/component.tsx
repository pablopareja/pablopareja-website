import { useSelectedLanguage, useTranslation } from "next-export-i18n";
import Link from "next/link";
import { FC } from "react";

import { FOLLOW_ME_LINKS } from "./constants";
import { FooterProps } from "./types";

const Footer: FC<FooterProps> = () => {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();

  return (
    <footer
      id="footer"
      className="h-full p-8 text-xs bg-black md:py-20 md:px-36"
    >
      <div className="flex items-center justify-between">
        <div className="text-white">
          <Link
            href={`/?lang=${lang}`}
            className="mr-8 leading-4 md:mr-14"
            style={{ letterSpacing: "1px" }}
          >
            {t("footer.home")}
          </Link>
          <Link
            href={`/media?lang=${lang}`}
            className="mr-8 leading-4 md:mr-14"
            style={{ letterSpacing: "1px" }}
          >
            {t("footer.media")}
          </Link>
          <Link
            href={`/?lang=${lang}#bio`}
            className="mr-8 leading-4 md:mr-14"
            style={{ letterSpacing: "1px" }}
          >
            {t("footer.bio")}
          </Link>
          <Link
            href={`/contact?lang=${lang}`}
            className="mr-8 leading-4 md:mr-14"
            style={{ letterSpacing: "1px" }}
          >
            {t("footer.contact")}
          </Link>
        </div>
        <Link
          href={`/?lang=${lang}`}
          className="mr-8 leading-4 md:mr-14"
          style={{ letterSpacing: "1px" }}
        >
          <img src="/images/pablo_pareja_logo.svg" alt="Pablo Pareja logo" />
        </Link>
      </div>
      <div>
        <div className="mt-6 text-white underline md:mt-10">
          {" "}
          {t("footer.followMe")}
        </div>
        <div className="grid grid-cols-2 pb-6 mt-4 border-b border-white md:mt-10 md:pb-10 md:grid-cols-4">
          {FOLLOW_ME_LINKS.filter((l) => l.visible).map((l) => (
            <Link
              href={l.url}
              key={`follow-me-link-${l.label}`}
              className="mb-1 text-white uppercase md:mb-3"
              target="_blank"
              rel="noreferrer"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
