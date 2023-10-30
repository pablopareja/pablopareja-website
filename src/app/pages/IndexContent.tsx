'use client';

import { setIsWhiteBackground } from '@/store/common/slice';
import { useAppDispatch } from '@/store/hooks';
import { useResponsive } from '@/utils/useResponsive';
import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import DiagonalIcon from '../../svgs/ui/diagonal.svg';
import PlayIcon from '../../svgs/ui/play.svg';

import ClientOnly from '@/utils/ClientOnly';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Player } from '../components/Player';
import Header from '../header';

export const IndexContent = () => {
  const [playSound, setPlaySound] = useState<boolean>(false);
  const { ref: whiteSectionRef, inView: whiteSectionInView } = useInView({
    threshold: 0,
  });
  const { ref: videoSectionRef, inView: videoSectionInView } = useInView({
    threshold: 0,
  });
  const bioDivRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsWhiteBackground(whiteSectionInView && !videoSectionInView));
  }, [whiteSectionInView, videoSectionInView, dispatch]);

  const { useMd, useSm } = useResponsive();

  useEffect(() => {
    if (window.location.hash === '#bio') {
      console.log('Hey!');
      setTimeout(() => bioDivRef.current?.scrollIntoView(), 200);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{`Pablo Pareja - ${t('homepage.pageTitle')}`}</title>
      </Head>
      <ClientOnly>
        <div>
          <Header />
          {/* FIRST SECTION: VIDEO */}
          <div ref={videoSectionRef} className="h-screen py-12 md:py-16 md:px-36">
            <video
              id="backgroundVideo"
              className="absolute top-0 left-0 object-cover w-full h-full"
              style={{ zIndex: -1 }}
              autoPlay
              muted
              loop
            >
              <source
                src={`/videos/the_sea_teaser${useSm({}) ? '_mobile' : ''}.mp4`}
                type="video/mp4"
              />
            </video>
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-2xl text-white">
              {useMd({ includeBiggerScreens: true }) && (
                <div>
                  <div className="flex" style={{ height: '100%' }}>
                    <div
                      className="flex items-start text-3xl leading-9 text-center text-white"
                      style={{ letterSpacing: '18px' }}
                    >
                      THE SEA
                    </div>
                  </div>
                  <AnchorLink href="#music">
                    <div
                      role="button"
                      tabIndex={0}
                      className="absolute left-0 flex items-center justify-center w-full pr-4 bottom-6"
                      onClick={() => setPlaySound(true)}
                      onKeyPress={() => setPlaySound(true)}
                    >
                      <div className="mr-2">
                        <PlayIcon fill="white" />
                      </div>
                      <div className="text-sm leading-4" style={{ letterSpacing: '5.6px' }}>
                        {t('homepage.playAnchorLink')}
                      </div>
                    </div>
                  </AnchorLink>
                </div>
              )}
              {useSm({}) && (
                <div className="flex flex-col h-12">
                  <div
                    className="flex items-center justify-center h-full text-3xl leading-9 text-center text-white"
                    style={{ letterSpacing: '18px' }}
                  >
                    THE SEA
                  </div>
                  <AnchorLink href="#music">
                    <div
                      role="button"
                      tabIndex={0}
                      className="flex items-center justify-center w-full mt-6"
                      onClick={() => setPlaySound(true)}
                      onKeyPress={() => setPlaySound(true)}
                    >
                      <div className="mr-2">
                        <PlayIcon fill="white" />
                      </div>
                      <div className="text-sm leading-4" style={{ letterSpacing: '5.6px' }}>
                        {t('homepage.playAnchorLink')}
                      </div>
                    </div>
                  </AnchorLink>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* MUSIC SECTION */}
        <section
          id="music"
          ref={whiteSectionRef}
          className="flex-col w-full py-12 text-black md:py-20 md:flex-row md:flex md:px-36"
        >
          <div className="flex w-full px-6 pt-4 pb-8 md:p-0 md:mx-8 md:w-1/2">
            <img src="/images/TheSeaCover.svg" alt="The Sea - Pablo Pareja" />
          </div>
          <div className="flex flex-col w-full px-6 font-sans text-xl md:pr-0 md:pl-24">
            <h2
              className="mb-6 leading-6 text-center md:mb-8 md:text-left"
              style={{ letterSpacing: '12px' }}
            >
              THE SEA
            </h2>
            <Player src="/audio/TheSea.mp3" autoPlay={playSound} />
            <div className="flex justify-end w-full mt-3 text-xs italic">
              {t('homepage.listenOnMessage')}
              <a
                className="ml-1 underline hover:text-gray-500"
                href="https://open.spotify.com/track/6y8Pd4cp53zmbOAT7TrLKL?si=06b706471c8847e3"
                target="_blank"
                rel="noreferrer"
              >
                Spotify
              </a>
            </div>
          </div>
        </section>
        {/* BIO SECTION */}
        <section
          id="bio"
          ref={bioDivRef}
          className="flex flex-col w-full px-6 py-24 text-white bg-black md:pb-36 md:px-36"
        >
          <h1 className="pb-4 text-xl md:text-2xl md:pb-28">BIO</h1>
          <div className="flex">
            <div className="flex flex-start">
              <DiagonalIcon />
            </div>
            <div
              className="leading-7 md:leading-10 md:text-xl md:mx-12 link-underline"
              style={{
                letterSpacing: '1px',
                maxWidth: '720px',
              }}
              dangerouslySetInnerHTML={{ __html: t('homepage.bio') }}
            />
            <div className="flex items-end">
              <DiagonalIcon />
            </div>
          </div>
        </section>
      </ClientOnly>
    </>
  );
};
