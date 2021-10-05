import { useState } from 'react';
import Head from 'next/head';

// containers
import Footer from 'containers/footer';
import Header from 'containers/header';

const Media: React.FC = () => {
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
            src="/images/mediaBackground.jpg"
            alt="Media"
            style={{ filter: 'grayscale(100%)' }}
          />
          <div
            className="relative flex items-center justify-center w-full h-full text-3xl leading-9 text-white"
            style={{ letterSpacing: '18px' }}
          >
            MEDIA
          </div>
        </div>
        {showSecretSections && (
          <div className="relative flex w-full my-24 text-2xl text-white">
            <div className="flex flex-col mr-4" style={{ width: '60%' }}>
              <img
                className="mb-6 ml-32"
                src="/images/PabloParejaPiano.jpg"
                alt="Pablo Pareja playing piano at a recording studio"
              />
              <img
                src="/images/Pablo-Pareja-Vancouver.jpg"
                alt="Pablo Pareja playing piano in Vancouver"
              />
            </div>
            <div className="flex flex-col pr-32 pt-36" style={{ width: '40%' }}>
              <img
                className="mb-5"
                src="/images/Pablo-Pareja-jazz-Zahara.jpg"
                alt="Pablo Pareja singing at Jazzahara"
              />
              <img
                className="mr-9"
                src="/images/mediaBackground.jpg"
                alt="Pablo Pareja playing guitar at a recording studio"
              />
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Media;
