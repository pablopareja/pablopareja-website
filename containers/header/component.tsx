import { FC } from 'react';
import Link from 'next/link';

import { HeaderProps } from './types';

const Header: FC<HeaderProps> = () => (
  <nav className="relative flex justify-between w-full text-xs text-white">
    <Link href="/">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>
        <img src="/images/pablo_pareja_logo.svg" alt="Pablo Pareja" />
      </a>
    </Link>
    <div>
      <Link href="/media">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="leading-4 ml-14" style={{ letterSpacing: '0.6px' }}>
          MEDIA
        </a>
      </Link>
      <Link href="/news">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="leading-4 ml-14" style={{ letterSpacing: '0.6px' }}>
          NEWS
        </a>
      </Link>
      <Link href="/events">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="leading-4 ml-14" style={{ letterSpacing: '0.6px' }}>
          EVENTS
        </a>
      </Link>
      <Link href="/contact">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className="px-10 py-2 leading-4 border border-white ml-14"
          style={{ letterSpacing: '0.6px' }}
        >
          CONTACT
        </a>
      </Link>
    </div>
  </nav>
);

export default Header;
