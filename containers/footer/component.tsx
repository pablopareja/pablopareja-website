import { FC } from 'react';
import Link from 'next/link';

import { FooterProps } from './types';
import { FOLLOW_ME_LINKS } from './constants';

const Footer: FC<FooterProps> = () => (
  <footer id="footer" className="h-full p-8 text-xs bg-black md:py-20 md:px-36">
    <div className="flex items-center justify-between">
      <div className="text-white">
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="mr-8 leading-4 md:mr-14" style={{ letterSpacing: '1px' }}>
            HOME
          </a>
        </Link>
        <Link href="/media">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="mr-8 leading-4 md:mr-14" style={{ letterSpacing: '1px' }}>
            MEDIA
          </a>
        </Link>
        <Link href="/contact">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="mr-8 leading-4 md:mr-14" style={{ letterSpacing: '1px' }}>
            CONTACT
          </a>
        </Link>
      </div>
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <img src="/images/pablo_pareja_logo.svg" alt="Pablo Pareja" />
        </a>
      </Link>
    </div>
    <div>
      <div className="mt-6 text-white underline md:mt-10">FOLLOW ME:</div>
      <div className="grid grid-cols-2 pb-6 mt-4 border-b border-white md:mt-10 md:pb-10 md:grid-cols-4">
        {FOLLOW_ME_LINKS.map((l) => (
          <Link href={l.url} key={`follow-me-link-${l.label}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="mb-1 text-white uppercase md:mb-3">{l.label}</a>
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
