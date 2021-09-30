import { FC } from 'react';
import Link from 'next/link';

import { FooterProps } from './types';
import { FOLLOW_ME_LINKS } from './constants';

const Footer: FC<FooterProps> = () => (
  <footer id="footer" className="h-full py-20 bg-black px-36">
    <div className="flex items-center justify-between">
      <div className="text-white">
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="leading-4 mr-14" style={{ letterSpacing: '0.6px' }}>
            HOME
          </a>
        </Link>
        <Link href="/#bio">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="leading-4 mr-14" style={{ letterSpacing: '0.6px' }}>
            BIO
          </a>
        </Link>
        <Link href="/#media">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="leading-4 mr-14" style={{ letterSpacing: '0.6px' }}>
            MEDIA
          </a>
        </Link>
        <Link href="/#news">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="leading-4 mr-14" style={{ letterSpacing: '0.6px' }}>
            NEWS
          </a>
        </Link>
        <Link href="/#events">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="leading-4 mr-14" style={{ letterSpacing: '0.6px' }}>
            EVENTS
          </a>
        </Link>
        <Link href="/#contact">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="leading-4 mr-14" style={{ letterSpacing: '0.6px' }}>
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
      <div className="mt-10 text-white underline">FOLLOW ME:</div>
      <div className="grid grid-cols-4 pb-10 mt-10 border-b border-white">
        {FOLLOW_ME_LINKS.map((l) => (
          <Link href={l.url}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="mb-3 text-white uppercase">{l.label}</a>
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
