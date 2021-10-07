import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// components
import Icon from 'components/icon';
import Player from 'components/player';

// containers
import Footer from 'containers/footer';
import Header from 'containers/header';

// icons
import DIAGONAL from 'svgs/ui/diagonal.svg?sprite';
import PLAY from 'svgs/ui/play.svg?sprite';

// utils
import { Desktop, MediaContextProvider, Mobile } from 'utils/responsive';

const Home: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [playSound, setPlaySound] = useState<boolean>(false);
  const showSecretSections = text.includes('secret');
  return (
    <div
      onKeyDown={({ key }) => {
        setText(`${text}${key}`);
      }}
      tabIndex={0}
      role="menu"
    >
      <Head>
        <title>Pablo Pareja</title>
      </Head>
      <div>
        {showSecretSections && <Header />}
        {/* FIRST SECTION: VIDEO */}
        <div className="h-screen py-12 md:py-16 md:px-36">
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
          {!showSecretSections && (
            <motion.div
              className="flex items-center justify-center w-full h-full text-2xl text-white"
              transition={{ duration: 4, time: [0, 1, 0], repeat: Infinity }}
              animate={{ opacity: [0, 1, 0] }}
            >
              22 - 10 - 2021
            </motion.div>
          )}
          {showSecretSections && (
            <div className="relative flex items-center justify-center w-full h-full text-2xl text-white">
              <MediaContextProvider>
                <Desktop includeBiggerScreens>
                  <div className="flex h-12">
                    <div
                      className="flex items-start h-full text-3xl leading-9 text-center text-white"
                      style={{ letterSpacing: '18px' }}
                    >
                      THE SEA
                    </div>
                  </div>
                  <AnchorLink href="#music">
                    <div
                      role="button"
                      tabIndex={0}
                      className="absolute bottom-0 left-0 flex items-center justify-center w-full"
                      onClick={() => setPlaySound(true)}
                      onKeyPress={() => setPlaySound(true)}
                    >
                      <Icon className="w-3 h-3 mx-4" icon={PLAY} />
                      <div className="text-sm leading-4" style={{ letterSpacing: '5.6px' }}>
                        PLAY
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
                          PLAY
                        </div>
                      </div>
                    </AnchorLink>
                  </div>
                </Mobile>
              </MediaContextProvider>
            </div>
          )}
        </div>
      </div>
      {showSecretSections && (
        <>
          {/* MUSIC SECTION */}
          <section
            id="music"
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
              >
                {/* <p className="mb-8">
                  Pablo Pareja comienza sus estudios de piano en Granada para años más tarde
                  interesarse por la voz y el jazz. Estudia técnica vocal, armonía, composición y
                  piano en Roma y Málaga, así como acude a numerosos seminarios de jazz
                  internacionales donde ha recibido clases de artistas como Deborah Carter, Roberta
                  Gambarini, Norma Winstone o Michael Kanan.
                </p> */}
                <p className="mb-8">
                  Pablo Pareja starts studying piano in Granada focusing first on classical and
                  contemporary classical music. Later on he starts developing an interest in film
                  scoring and he composes his first solo piano piece at the age of 17. Years later
                  he studies vocal technique, music theory, jazz, and composition in Rome and
                  Málaga, attending also various international jazz seminars where he has the chance
                  to meet renowned artists like Viktorija Pilatovic, Deborah Carter, Roberta
                  Gambarini, Norma Winstone, Michael Kanan, and Aarong Goldberg among others.
                </p>
                <p>
                  More recently Pablo has been performing with the Big Band from the Málaga Jazz
                  Association as the lead singer as well as has participated in various festivals
                  and concerts such as the Jazzahara festival or the International Jazz day
                  Torremolinos. He is currently studying advanced composition with José Carra and
                  focuses on the creation of his first album boh as a composer and singer.
                </p>
                {/* <p>
                  Ha participado durante varios años como cantante de la Big Band de la Asociación
                  de Jazz de Málaga así como participado en festivales y espectáculos como el
                  Jazzahara festival o el International Jazz Day Torremolinos. En la actualidad
                  recibe clases de composición y armonía de José Carra y se centra en la creación de
                  su primer disco como compositor y cantante.
                </p> */}
              </div>
              <div className="flex items-end">
                <Icon className="w-6 h-6 ml-2 md:w-9 md:h-9 md:ml-0" icon={DIAGONAL} />
              </div>
            </div>
          </section>
          {/* FOOTER */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
