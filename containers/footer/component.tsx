import { FC } from 'react';
import Link from 'next/link';

import { FooterProps } from './types';

const Footer: FC<FooterProps> = () => (
  <footer id="footer" className="flex items-center justify-between h-full py-20 bg-black px-36">
    <div className="text-white">
      <Link href="/#bio">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="leading-4 ml-14" style={{ letterSpacing: '0.6px' }}>
          BIO
        </a>
      </Link>
      <Link href="/#media">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="leading-4 ml-14" style={{ letterSpacing: '0.6px' }}>
          MEDIA
        </a>
      </Link>
      <Link href="/#news">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="leading-4 ml-14" style={{ letterSpacing: '0.6px' }}>
          NEWS
        </a>
      </Link>
      <Link href="/#events">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="leading-4 ml-14" style={{ letterSpacing: '0.6px' }}>
          EVENTS
        </a>
      </Link>
      <Link href="/#contact">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="leading-4 ml-14" style={{ letterSpacing: '0.6px' }}>
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
  </footer>
);

export default Footer;
