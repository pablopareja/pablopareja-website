import { FC, useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { motion } from 'framer-motion';

// constants
import { LANGUAGES } from 'components/constants';

// slices
import { setLanguageSelected } from 'store/language/slice';

// hooks
import { useAppDispatch, useAppSelector } from 'store/hooks';

// types
import { HeaderProps } from './types';

const Header: FC<HeaderProps> = ({ black }: HeaderProps) => {
  const [isHover, toggleHover] = useState(false);
  const language = useAppSelector((state) => state.language.languageSelected);
  const dispatch = useAppDispatch();

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };

  return (
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
      <div className="flex items-center">
        <Link href="/media">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="leading-4 ml-14" style={{ letterSpacing: '0.6px' }}>
            MEDIA
          </a>
        </Link>
        <Link href="/events">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="leading-4 ml-14" style={{ letterSpacing: '0.6px' }}>
            EVENTS
          </a>
        </Link>
        <motion.div
          className="uppercase ml-14"
          onHoverStart={() => toggleHover(!isHover)}
          onHoverEnd={() => toggleHover(!isHover)}
        >
          {language.label}
          <motion.div
            className="absolute"
            style={{ transformOrigin: '50% -30px' }}
            initial="exit"
            animate={isHover ? 'enter' : 'exit'}
            variants={subMenuAnimate}
          >
            <div
              className={cx({
                'px-8 py-5 border mt-8': true,
                'border-white': !black,
                'border-black': black,
              })}
            >
              {LANGUAGES.map((l) => (
                <div
                  key={l.id}
                  className="mb-2 text-xs leading-4 uppercase"
                  style={{ letterSpacing: '0.6px' }}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    toggleHover(!isHover);
                    dispatch(setLanguageSelected(l));
                  }}
                  onKeyPress={() => {
                    toggleHover(!isHover);
                    dispatch(setLanguageSelected(l));
                  }}
                >
                  {l.label}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
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
};

export default Header;
