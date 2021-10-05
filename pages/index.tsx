import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// components
import Icon from 'components/icon';
import Player from 'components/player';

// containers
import Footer from 'containers/footer';

// icons
import DIAGONAL from 'svgs/ui/diagonal.svg?sprite';
import PLAY from 'svgs/ui/play.svg?sprite';

const Home: React.FC = () => {
  const [text, setText] = useState<string>('');
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
        {/* FIRST SECTION: VIDEO */}
        <div className="h-screen py-16 px-36">
          <video
            id="backgroundVideo"
            className="absolute top-0 left-0 object-cover w-full h-full"
            autoPlay
            muted
            loop
          >
            <source src="/videos/the_sea_teaser.mp4" type="video/mp4" />
          </video>
          <nav className="relative flex justify-between w-full text-xs text-white">
            <Link href="/">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>
                <img src="/images/pablo_pareja_logo.svg" alt="Pablo Pareja" />
              </a>
            </Link>
            {showSecretSections && (
              <div>
                <Link href="/#media">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="leading-4 ml-14" style={{ letterSpacing: '0.6px' }}>
                    MEDIA
                  </a>
                </Link>
                <Link href="/#news">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="leading-4 ml-14" style={{ letterSpacing: '0.6px' }}>
                    NEWS
                  </a>
                </Link>
                <Link href="/#events">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="leading-4 ml-14" style={{ letterSpacing: '0.6px' }}>
                    EVENTS
                  </a>
                </Link>
                <Link href="/#contact">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    className="px-10 py-2 leading-4 border border-white ml-14"
                    style={{ letterSpacing: '0.6px' }}
                  >
                    CONTACT
                  </a>
                </Link>
              </div>
            )}
          </nav>

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
              <div className="flex h-12">
                <div
                  className="flex items-start h-full mr-6 text-3xl leading-9 text-white"
                  style={{ letterSpacing: '18px' }}
                >
                  THE SEA
                </div>
                <div className="flex items-end h-full">
                  <Icon className="w-9 h-9" icon={DIAGONAL} />
                  <AnchorLink href="#music">
                    <div
                      role="button"
                      tabIndex={0}
                      className="flex items-center"
                      onClick={() => console.log('play click')}
                      onKeyPress={() => console.log('play click')}
                    >
                      <Icon className="w-3 h-3 mx-4" icon={PLAY} />
                      <div className="text-sm leading-4" style={{ letterSpacing: '5.6px' }}>
                        PLAY
                      </div>
                    </div>
                  </AnchorLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {showSecretSections && (
        <>
          {/* MUSIC SECTION */}
          <section id="music" className="flex w-full py-20 text-black px-36">
            <div className="flex w-1/2">
              <img src="/images/TheSeaCover.svg" alt="The Sea - Pablo Pareja" />
            </div>
            <div className="flex flex-col w-full pl-24 font-sans text-xl">
              <h2 className="mb-8 leading-6" style={{ letterSpacing: '12px' }}>
                THE SEA
              </h2>
              <Player src="/audio/TheSea.mp3" />
            </div>
          </section>
          {/* BIO SECTION */}
          <section id="bio" className="flex flex-col w-full pb-20 text-white bg-black px-36">
            <h1 className="pt-24 text-2xl pb-28">BIO</h1>
            <div className="flex">
              <Icon className="w-9 h-9" icon={DIAGONAL} />
              <div
                className="mx-12 text-xl leading-10"
                style={{
                  letterSpacing: '1px',
                  maxWidth: '720px',
                }}
              >
                <p className="mb-8">
                  Pablo Pareja comienza sus estudios de piano en Granada para años más tarde
                  interesarse por la voz y el jazz. Estudia técnica vocal, armonía, composición y
                  piano en Roma y Málaga, así como acude a numerosos seminarios de jazz
                  internacionales donde ha recibido clases de artistas como Deborah Carter, Roberta
                  Gambarini, Norma Winstone o Michael Kanan.
                </p>
                <p>
                  Ha participado durante varios años como cantante de la Big Band de la Asociación
                  de Jazz de Málaga así como participado en festivales y espectáculos como el
                  Jazzahara festival o el International Jazz Day Torremolinos. En la actualidad
                  recibe clases de composición y armonía de José Carra y se centra en la creación de
                  su primer disco como compositor y cantante.
                </p>
              </div>
              <div className="flex items-end">
                <Icon className="w-9 h-9" icon={DIAGONAL} />
              </div>
            </div>
          </section>
          {/* NEWS SECTION */}
          <section id="news" className="py-16 px-36">
            <h1 className="text-2xl">NEWS</h1>
          </section>
          {/* CONTACT SECTION */}
          <section id="contact" className="py-16 px-36">
            <h1 className="text-2xl">CONTACT</h1>
          </section>
          {/* FOOTER */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
