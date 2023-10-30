'use client';

import { useTranslation } from 'next-export-i18n';
import { useInView } from 'react-intersection-observer';

import { setIsWhiteBackground } from '@/store/common/slice';
import { useAppDispatch } from '@/store/hooks';
import ClientOnly from '@/utils/ClientOnly';
import { useResponsive } from '@/utils/useResponsive';
import { useEffect } from 'react';
import DiagonalIcon from '../../svgs/ui/diagonal.svg';
import Header from '../header';

export const ContactContent: React.FC = () => {
  const { ref: whiteSectionRef, inView: whiteSectionInView } = useInView({
    threshold: 0.1,
  });
  const { ref: blackSectionRef, inView: blackSectionInView } = useInView({
    threshold: 0.1,
  });
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { useMd, useSm } = useResponsive();

  useEffect(() => {
    dispatch(setIsWhiteBackground(whiteSectionInView && !blackSectionInView));
  }, [whiteSectionInView]);

  const getContactForm = () => (
    <div className="w-full max-w-[500px]">
      <div className="mb-10 text-lg">CONTACT</div>
      <form
        className="flex flex-col items-start w-full"
        action="https://formspree.io/f/xgerqnkk"
        method="POST"
      >
        <label className="flex flex-col w-full text-xs" htmlFor="name">
          <span className="mb-4">{t('contact.name')}</span>
          <input className="h-10 bg-black border border-white" name="Name" id="name" type="name" />
        </label>
        <label className="flex flex-col w-full mt-8 text-xs" htmlFor="email">
          <span className="mb-4">{t('contact.email')}</span>
          <input
            className="h-10 bg-black border border-white"
            name="Email"
            id="email"
            type="text"
          />
        </label>
        <label className="flex flex-col w-full mt-8 text-xs" htmlFor="message">
          <span className="mb-4">{t('contact.message')}</span>
          <textarea className="h-24 bg-black border border-white" name="Message" id="message" />
        </label>
        <div className="flex justify-end w-full lg:justify-start">
          <button
            className="px-10 py-2 mt-8 font-sans text-xs leading-4 border border-white"
            style={{ letterSpacing: '0.6px' }}
            type="submit"
          >
            {t('contact.contact')}
          </button>
        </div>
      </form>
    </div>
  );
  return (
    <div>
      <ClientOnly>
        <div>
          {useMd({ includeBiggerScreens: true }) && (
            <div className="h-screen">
              <Header black />
              <img
                className="absolute top-0 left-0 object-cover w-full h-full"
                src="/images/PabloParejaPianoPlaying.jpg"
                alt="Media"
                style={{ filter: 'grayscale(100%)', zIndex: -1 }}
              />
            </div>
          )}
          {useSm({}) && (
            <>
              <Header black={false} />
              <div className="h-screen">
                <img
                  ref={whiteSectionRef}
                  className="absolute top-0 left-0 object-cover w-full h-full"
                  src="/images/PabloParejaPianoPlaying_mobile.png"
                  alt="Media"
                  style={{ filter: 'grayscale(100%)', zIndex: -1 }}
                />
              </div>
            </>
          )}
        </div>
        <div
          ref={blackSectionRef}
          className="relative flex items-center flex-col-reverse p-8 text-2xl text-white bg-black lg:p-56 lg:flex-row"
        >
          <div className="max-w-[500px]">
            <div className="w-full flex py-12 font-sans text-xl lg:pr-12  justify-center">
              <div className="w-9 h-9">
                <DiagonalIcon />
              </div>
              <div
                className="flex py-6 text-base italic leading-8 sm:px-8"
                style={{ letterSpacing: '1px' }}
              >
                When the dreams you&apos;ve been chasing, never will come <br />
                Like the fire that burnt in you is now just a glow <br />
                Solitary, reminiscence, of what you once hoped <br />
                But we will sail, agains the wind, hard though it may be <br />
                after all we&apos;re just bound to cross the sea...
              </div>
              <div className="flex items-end">
                <div className="w-9 h-9">
                  <DiagonalIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full items-center justify-center">{getContactForm()}</div>
        </div>
      </ClientOnly>
    </div>
  );
};
