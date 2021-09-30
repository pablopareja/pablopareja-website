import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
// import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Icon from 'components/icon';

// icons
import DIAGONAL from 'svgs/ui/diagonal.svg?sprite';
import PLAY from 'svgs/ui/play.svg?sprite';

const Home: React.FC = () => {
  const [text, setText] = useState<string>('');
  const showSecretSections = text === 'secret';
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
          <div className="relative">
            <Link href="/">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>
                <img src="/images/pablo_pareja_logo.svg" alt="Pablo Pareja" />
              </a>
            </Link>
          </div>

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
              <h2 className="leading-6" style={{ letterSpacing: '12px' }}>
                THE SEA
              </h2>
              {/* <AudioPlayer
                className="w-full"
                src="/audio/TheSea.mp3"
                showJumpControls={false}
                layout="horizontal"
                showSkipControls={false}
              /> */}
            </div>
          </section>
          {/* BIO SECTION */}
          <section
            id="bio"
            className="flex flex-col justify-center w-full h-screen text-white bg-black px-36"
          >
            <h1 className="text-2xl">BIO</h1>
            <div className="w-2/3 text-base leading-10">
              <p className="mb-8">
                Pablo Pareja comienza sus estudios de piano en Granada para años más tarde
                interesarse por la voz y el jazz. Estudia técnica vocal, armonía, composición y
                piano en Roma y Málaga, así como acude a numerosos seminarios de jazz
                internacionales donde ha recibido clases de artistas como Deborah Carter, Roberta
                Gambarini, Norma Winstone o Michael Kanan.
              </p>
              <p>
                Ha participado durante varios años como cantante de la Big Band de la Asociación de
                Jazz de Málaga así como participado en festivales y espectáculos como el Jazzahara
                festival o el International Jazz Day Torremolinos. En la actualidad recibe clases de
                composición y armonía de José Carra y se centra en la creación de su primer disco
                como compositor y cantante.
              </p>
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
        </>
      )}
    </div>
  );
};

export default Home;
