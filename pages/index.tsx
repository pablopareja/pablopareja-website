import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const [text, setText] = useState<string>('');
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
      <div className="pt-16 px-36">
        {/* FIRST SECTION: VIDEO */}
        <div className="h-screen">
          <video
            id="backgroundVideo"
            className="absolute top-0 left-0 object-cover h-screen min-w-full"
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
          <motion.div
            className="absolute text-2xl text-white top-1/2 left-1/2"
            transition={{ duration: 4, time: [0, 1, 0], repeat: Infinity }}
            animate={{ opacity: [0, 1, 0] }}
          >
            Coming soon...
          </motion.div>
        </div>
      </div>
      {text === 'secret' && (
        <>
          {/* MUSIC SECTION */}
          <div className="w-full h-screen px-36">
            <div className="flex w-1/2">
              <img src="/images/TheSea.jpg" alt="The Sea - Pablo Pareja" />
            </div>
          </div>
          {/* BIO SECTION */}
          <div className="flex flex-col justify-center w-full h-screen text-white bg-black px-36">
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
          </div>
          {/* NEWS SECTION */}
          <div className="py-16 px-36">
            <h1 className="text-2xl">NEWS</h1>
          </div>
          {/* CONTACT SECTION */}
          <div className="py-16 px-36">
            <h1 className="text-2xl">CONTACT</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
