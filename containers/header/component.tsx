import { FC } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import { HeaderProps } from './types';

const Header: FC<HeaderProps> = ({ black }: HeaderProps) => (
  <nav
    className={cx({
      'relative flex justify-between w-full text-xs font-sans': true,
      'text-black': black,
      'text-white': !black,
    })}
  >
    <Link href="/">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>
        <img src={`/images/pablo_pareja_logo${black ? '_black' : ''}.svg`} alt="Pablo Pareja" />
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
          className={cx({
            'px-10 py-2 leading-4 border ml-14': true,
            'border-white': !black,
            'border-black': black,
          })}
          style={{ letterSpacing: '0.6px' }}
        >
          CONTACT
        </a>
      </Link>
    </div>
  </nav>
);

export default Header;
