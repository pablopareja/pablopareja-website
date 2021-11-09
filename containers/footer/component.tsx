import { FC } from 'react';
import Link from 'next/link';
import { useTranslation, useSelectedLanguage } from 'next-export-i18n';

import { FooterProps } from './types';
import { FOLLOW_ME_LINKS } from './constants';

const Footer: FC<FooterProps> = () => {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();

  return (
    <footer id="footer" className="h-full p-8 text-xs bg-black md:py-20 md:px-36">
      <div className="flex items-center justify-between">
        <div className="text-white">
          <Link href={`/?lang=${lang}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="mr-8 leading-4 md:mr-14" style={{ letterSpacing: '1px' }}>
              {t('footer.home')}
            </a>
          </Link>
          <Link href={`/media?lang=${lang}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="mr-8 leading-4 md:mr-14" style={{ letterSpacing: '1px' }}>
              {t('footer.media')}
            </a>
          </Link>
          <Link href={`/?lang=${lang}#bio`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="mr-8 leading-4 md:mr-14" style={{ letterSpacing: '1px' }}>
              {t('footer.bio')}
            </a>
          </Link>
          <Link href={`/contact?lang=${lang}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="mr-8 leading-4 md:mr-14" style={{ letterSpacing: '1px' }}>
              {t('footer.contact')}
            </a>
          </Link>
        </div>
        <Link href={`/?lang=${lang}`}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <img src="/images/pablo_pareja_logo.svg" alt="Pablo Pareja logo" />
          </a>
        </Link>
      </div>
      <div>
        <div className="mt-6 text-white underline md:mt-10"> {t('footer.followMe')}</div>
        <div className="grid grid-cols-2 pb-6 mt-4 border-b border-white md:mt-10 md:pb-10 md:grid-cols-4">
          {FOLLOW_ME_LINKS.filter((l) => l.visible).map((l) => (
            <Link href={l.url} key={`follow-me-link-${l.label}`}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="mb-1 text-white uppercase md:mb-3" target="_blank" rel="noreferrer">
                {l.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
