import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { slide as Menu } from 'react-burger-menu';
import { useRouter } from 'next/router';

// constants
import { LANGUAGES } from 'components/constants';

// slices
import { setLanguageSelected } from 'store/language/slice';
import { setIsWhiteBackground } from 'store/common/slice';

// hooks
import { useAppDispatch, useAppSelector } from 'store/hooks';

// utils
import { Desktop, Mobile } from 'utils/responsive';

// types
import { HeaderProps } from './types';

const Header: FC<HeaderProps> = ({ black }: HeaderProps) => {
  const [isHover, toggleHover] = useState(false);
  const language = useAppSelector((state) => state.language.languageSelected);
  const isWhiteBackground = useAppSelector((state) => state.common.isWhiteBackground);
  const dispatch = useAppDispatch();
  const { pathname } = useRouter();

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

  const hamburgerMenuStyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '32px',
      height: '28px',
      right: '32px',
      top: '32px',
      outline: 'none',
    },
    bmBurgerBars: {
      background: isWhiteBackground ? '#000000' : '#ffffff',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      outline: 'none',
    },
    bmCross: {
      background: '#ffffff',
      outline: 'none',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: 'rgba(0, 0, 0)',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  };

  useEffect(() => {
    dispatch(setIsWhiteBackground(false));
  }, []);

  return (
    <div>
      <Desktop includeBiggerScreens>
        <nav
          className={cx({
            'relative md:px-32 md:py-16 flex justify-between w-full text-xs font-sans': true,
            'text-black': black,
            'text-white': !black,
          })}
        >
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <img
                src={`/images/pablo_pareja_logo${black ? '_black' : ''}.svg`}
                alt="Pablo Pareja"
              />
            </a>
          </Link>
          <div className="flex items-center">
            <Link href="/media">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="leading-4 ml-14" style={{ letterSpacing: '0.6px' }}>
                MEDIA
              </a>
            </Link>
            {/* <Link href="/events">
              <a className="leading-4 ml-14" style={{ letterSpacing: '0.6px' }}>
                EVENTS
              </a>
            </Link> */}
            {/* <motion.div
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
            </motion.div> */}
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
      </Desktop>
      <Mobile>
        <div className="absolute z-10 pt-8 pl-8">
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <img
                src={`/images/pablo_pareja_logo${black ? '_black' : ''}.svg`}
                alt="Pablo Pareja"
              />
            </a>
          </Link>
        </div>
        <Menu styles={hamburgerMenuStyles} right>
          <Link href="/media">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="my-8 leading-4 text-white" style={{ letterSpacing: '0.6px' }}>
              MEDIA
            </a>
          </Link>
          {/* <Link href="/events">
            <a className="leading-4 text-white" style={{ letterSpacing: '0.6px' }}>
              EVENTS
            </a>
          </Link> */}
          <Link href="/contact">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="leading-4 text-white" style={{ letterSpacing: '0.6px' }}>
              CONTACT
            </a>
          </Link>
        </Menu>
        {!pathname.includes('contact') && (
          <Link href="/contact">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className={cx({
                'fixed z-10 p-2 text-xs leading-4 border bottom-4 right-4 ml-14': true,
                'border-white text-white': !isWhiteBackground,
                'border-black text-black': isWhiteBackground,
              })}
              style={{
                letterSpacing: '0.6px',
              }}
            >
              CONTACT
            </a>
          </Link>
        )}
      </Mobile>
    </div>
  );
};

export default Header;
