import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// containers
import Footer from 'containers/footer';
import Header from 'containers/header';

const Contact: React.FC = () => {
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
        <div className="h-screen py-16 px-36">
          {showSecretSections && <Header />}

          <img
            className="absolute top-0 left-0 object-cover w-full h-full"
            src="/images/PabloParejaPianoPlaying.jpg"
            alt="Media"
            style={{ filter: 'grayscale(100%)' }}
          />
          <div
            className="absolute top-0 left-0 object-cover w-full h-full pointer-events-none"
            style={{ backdropFilter: 'blur(1px)' }}
          />
          <div
            className="relative flex items-center justify-center w-full h-full text-3xl leading-9 text-white"
            style={{ letterSpacing: '18px' }}
          >
            CONTACT
          </div>
        </div>
        {showSecretSections && <div className="relative flex w-full my-24 text-2xl text-white" />}
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
