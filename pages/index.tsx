import { useEffect, useState } from 'react';
import Head from 'next/head';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'next-export-i18n';

// components
import Icon from 'components/icon';
import Player from 'components/player';

// slices
import { setIsWhiteBackground } from 'store/common/slice';

// containers
import Footer from 'containers/footer';
import Header from 'containers/header';

// hooks
import { useAppDispatch } from 'store/hooks';

// icons
import DIAGONAL from 'svgs/ui/diagonal.svg?sprite';
import PLAY from 'svgs/ui/play.svg?sprite';

// utils
import { Desktop, Mobile } from 'utils/responsive';
import CookiesBanner from 'components/cookies-banner';

const Home: React.FC = () => {
  const [playSound, setPlaySound] = useState<boolean>(false);
  const { ref: whiteSectionRef, inView: whiteSectionInView } = useInView({ threshold: 0 });
  const { ref: videoSectionRef, inView: videoSectionInView } = useInView({ threshold: 0 });
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsWhiteBackground(whiteSectionInView && !videoSectionInView));
  }, [whiteSectionInView, videoSectionInView]);

  return (
    <div>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Head>
      <div>
        <Header />
        {/* FIRST SECTION: VIDEO */}
        <div ref={videoSectionRef} className="h-screen py-12 md:py-16 md:px-36">
          <Desktop>
            <video
              id="backgroundVideo"
              className="absolute top-0 left-0 object-cover w-full h-full"
              style={{ zIndex: -1 }}
              autoPlay
              muted
              loop
            >
              <source src="/videos/the_sea_teaser.mp4" type="video/mp4" />
            </video>
          </Desktop>
          <Mobile>
            <video
              id="backgroundVideo"
              className="absolute top-0 left-0 object-cover w-full h-full"
              style={{ zIndex: -1 }}
              autoPlay
              muted
              loop
            >
              <source src="/videos/the_sea_teaser_mobile.mp4" type="video/mp4" />
            </video>
          </Mobile>
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-2xl text-white">
            <Desktop includeBiggerScreens>
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
                  <Icon className="w-3 h-3 mx-4" icon={PLAY} />
                  <div className="text-sm leading-4" style={{ letterSpacing: '5.6px' }}>
                    {t('homepage.playAnchorLink')}
                  </div>
                </div>
              </AnchorLink>
            </Desktop>
            <Mobile>
              <div className="flex flex-col h-12">
                <div
                  className="flex items-start h-full text-3xl leading-9 text-center text-white"
                  style={{ letterSpacing: '18px' }}
                >
                  THE SEA
                </div>
                <AnchorLink href="#music">
                  <div
                    role="button"
                    tabIndex={0}
                    className="flex items-center w-full mt-6 ml-12"
                    onClick={() => setPlaySound(true)}
                    onKeyPress={() => setPlaySound(true)}
                  >
                    <Icon className="w-3 h-3 mx-4" icon={PLAY} />
                    <div className="text-sm leading-4" style={{ letterSpacing: '5.6px' }}>
                      {t('homepage.playAnchorLink')}
                    </div>
                  </div>
                </AnchorLink>
              </div>
            </Mobile>
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
        className="flex flex-col w-full px-6 py-24 text-white bg-black md:pb-36 md:px-36"
      >
        <h1 className="pb-4 text-xl md:text-2xl md:pb-28">BIO</h1>
        <div className="flex">
          <div className="flex flex-start">
            <Icon className="w-6 h-6 mr-3 md:w-9 md:h-9 md:mr-0" icon={DIAGONAL} />
          </div>
          <div
            className="leading-7 md:leading-10 md:text-xl md:mx-12"
            style={{
              letterSpacing: '1px',
              maxWidth: '720px',
            }}
            dangerouslySetInnerHTML={{ __html: t('homepage.bio') }}
          />
          <div className="flex items-end">
            <Icon className="w-6 h-6 ml-2 md:w-9 md:h-9 md:ml-0" icon={DIAGONAL} />
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <Footer />
      <div className="fixed bottom-0 left-0">
        <CookiesBanner />
      </div>
    </div>
  );
};

export default Home;
