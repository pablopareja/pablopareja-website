'use client';

import cx from 'classnames';
import { motion } from 'framer-motion';
import { LanguageSwitcher, useSelectedLanguage, useTranslation } from 'next-export-i18n';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

// utils

// types
import { setIsWhiteBackground } from '@/store/common/slice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import ClientOnly from '@/utils/ClientOnly';
import { useResponsive } from '@/utils/useResponsive';
import { AvailableLanguages, LANGUAGES, SOCIAL_ACCOUNTS } from '../../constants';
import { HeaderProps } from './types';

const Header: FC<HeaderProps> = ({ black }: HeaderProps) => {
  const [isHoverLanguage, toggleHoverLanguage] = useState(false);
  const [isHoverSocial, toggleHoverSocial] = useState(false);
  const isWhiteBackground = useAppSelector((state) => state.common.isWhiteBackground);
  const dispatch = useAppDispatch();
  const { pathname } = useRouter();
  const { lang } = useSelectedLanguage();
  const { t } = useTranslation();
  const { useMd, useSm } = useResponsive();

  const currentLangLabel = LANGUAGES[lang as AvailableLanguages].label;

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
      <ClientOnly>
        {useMd({ includeBiggerScreens: true }) && (
          <nav
            className={cx({
              'relative md:px-32 md:py-16 flex justify-between w-full text-xs font-sans z-10': true,
              'text-black': black,
              'text-white': !black,
            })}
          >
            <Link href={`/?lang=${lang}`} className="flex items-center">
              <img
                src={`/images/pablo_pareja_logo${black ? '_black' : ''}.svg`}
                alt="Pablo Pareja"
              />
            </Link>
            <div className="flex items-center">
              <Link
                href={`/media?lang=${lang}`}
                className="leading-4 ml-14"
                style={{ letterSpacing: '0.6px' }}
              >
                {t('header.media')}
              </Link>
              <Link
                href={`/?lang=${lang}#bio`}
                className="leading-4 ml-14"
                style={{ letterSpacing: '0.6px' }}
              >
                {t('header.bio')}
              </Link>
              {/* <Link
                href="/events"
                className="leading-4 ml-14"
                style={{ letterSpacing: "0.6px" }}
              >
                EVENTS
              </Link> */}
              <motion.div
                className="uppercase ml-14"
                onHoverStart={() => toggleHoverLanguage(true)}
                onHoverEnd={() => toggleHoverLanguage(false)}
              >
                {currentLangLabel}
                <motion.div
                  className="absolute"
                  style={{ transformOrigin: '50% -30px' }}
                  initial="exit"
                  animate={isHoverLanguage ? 'enter' : 'exit'}
                  variants={subMenuAnimate}
                >
                  <div
                    className={cx({
                      'px-8 py-5 border mt-8': true,
                      'border-white': !black,
                      'border-black': black,
                    })}
                  >
                    {Object.values(LANGUAGES).map((l) => (
                      <div
                        key={l.id}
                        className="mb-2 text-xs leading-4 uppercase last:mb-0"
                        style={{ letterSpacing: '0.6px' }}
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          toggleHoverLanguage(false);
                        }}
                        onKeyPress={() => {
                          toggleHoverLanguage(false);
                        }}
                      >
                        <LanguageSwitcher lang={l.lang}>{l.label}</LanguageSwitcher>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                className="uppercase ml-14"
                onHoverStart={() => toggleHoverSocial(true)}
                onHoverEnd={() => toggleHoverSocial(false)}
              >
                {t('header.social')}
                <motion.div
                  className="absolute"
                  style={{ transformOrigin: '50% -30px' }}
                  initial="exit"
                  animate={isHoverSocial ? 'enter' : 'exit'}
                  variants={subMenuAnimate}
                >
                  <div
                    className={cx({
                      'px-8 py-5 border mt-8': true,
                      'border-white': !black,
                      'border-black': black,
                    })}
                  >
                    {SOCIAL_ACCOUNTS.map((sa) => (
                      <div
                        key={sa.id}
                        className="mb-2 text-xs leading-4 uppercase last:mb-0"
                        style={{ letterSpacing: '0.6px' }}
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          toggleHoverSocial(false);
                        }}
                        onKeyPress={() => {
                          toggleHoverSocial(false);
                        }}
                      >
                        <Link href={sa.url} target="_blank">
                          {sa.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              <Link
                href={`/contact?lang=${lang}`}
                className={cx({
                  'px-10 py-2 leading-4 border ml-14': true,
                  'border-white': !black,
                  'border-black': black,
                })}
                style={{ letterSpacing: '0.6px' }}
              >
                {t('header.contact')}
              </Link>
            </div>
          </nav>
        )}
        {useSm({}) && (
          <>
            <div className="absolute z-10 pt-8 pl-8">
              <Link href={`/?lang=${lang}`}>
                <img
                  src={`/images/pablo_pareja_logo${black ? '_black' : ''}.svg`}
                  alt="Pablo Pareja"
                />
              </Link>
            </div>
            <Menu styles={hamburgerMenuStyles} right>
              <Link
                href={`/media?lang=${lang}`}
                className="mb-8 leading-4 text-white"
                style={{ letterSpacing: '0.6px' }}
              >
                {t('header.media')}
              </Link>
              {/* <Link
                href="/events"
                className="mb-8 leading-4 text-white"
                style={{ letterSpacing: "0.6px" }}
              >
                EVENTS
              </Link> */}
              <Link
                href={`/contact?lang=${lang}`}
                className="mb-8 leading-4 text-white"
                style={{ letterSpacing: '0.6px' }}
              >
                {t('header.contact')}
              </Link>
              <Link
                href={`/?lang=${lang}#bio`}
                className="mb-8 leading-4 text-white"
                style={{ letterSpacing: '0.6px' }}
              >
                {t('header.bio')}
              </Link>
              {SOCIAL_ACCOUNTS.map((sa) => (
                <div key={`SA-${sa.id}`}>
                  <Link
                    href={sa.url}
                    className="mb-2 text-xs leading-4 uppercase last:mb-0"
                    style={{ letterSpacing: '0.6px' }}
                    target="_blank"
                  >
                    {sa.label}
                  </Link>
                </div>
              ))}
              <div className="h-full">
                <div className="flex flex-col justify-end h-full">
                  {Object.values(LANGUAGES).map((l) => (
                    <div
                      key={l.id}
                      className="mb-2 text-xs leading-4 uppercase"
                      style={{ letterSpacing: '0.6px' }}
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        toggleHoverLanguage(false);
                      }}
                      onKeyPress={() => {
                        toggleHoverLanguage(false);
                      }}
                    >
                      <LanguageSwitcher lang={l.lang}>{l.label}</LanguageSwitcher>
                    </div>
                  ))}
                </div>
              </div>
            </Menu>
            {!pathname.includes('contact') && (
              <Link
                href={`/contact?lang=${lang}`}
                className={cx({
                  'fixed z-10 p-2 text-xs leading-4 border bottom-4 right-4 ml-14': true,
                  'border-white text-white': !isWhiteBackground,
                  'border-black text-black': isWhiteBackground,
                })}
                style={{
                  letterSpacing: '0.6px',
                }}
              >
                {t('header.contact')}
              </Link>
            )}
          </>
        )}
      </ClientOnly>
    </div>
  );
};

export default Header;
