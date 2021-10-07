import { useState } from 'react';
import Head from 'next/head';

// containers
import Footer from 'containers/footer';
import Header from 'containers/header';

// icons
import DIAGONAL from 'svgs/ui/diagonal.svg?sprite';

// components
import Icon from 'components/icon';

// utils
import { Desktop, Mobile } from 'utils/responsive';

const Contact: React.FC = () => {
  const [text, setText] = useState<string>('');
  const showSecretSections = text.includes('secret');

  const getContactForm = () => (
    <>
      <div className="mb-10 text-lg sm:mb-14">CONTACT</div>
      <form
        className="flex flex-col items-start w-full"
        action="https://formspree.io/f/xgerqnkk"
        method="POST"
      >
        <label className="flex flex-col w-full text-xs" htmlFor="name">
          <span className="mb-4">NAME</span>
          <input className="h-10 bg-black border border-white" name="Name" id="name" type="name" />
        </label>
        <label className="flex flex-col w-full mt-8 text-xs" htmlFor="email">
          <span className="mb-4">EMAIL</span>
          <input
            className="h-10 bg-black border border-white"
            name="Email"
            id="email"
            type="text"
          />
        </label>
        <label className="flex flex-col w-full mt-8 text-xs" htmlFor="message">
          <span className="mb-4">MESSAGE</span>
          <textarea className="h-24 bg-black border border-white" name="Message" id="message" />
        </label>
        <div className="flex justify-end w-full sm:justify-start">
          <button
            className="px-10 py-2 mt-8 font-sans text-xs leading-4 border border-white"
            style={{ letterSpacing: '0.6px' }}
            type="submit"
          >
            CONTACT
          </button>
        </div>
      </form>
    </>
  );
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
        {showSecretSections && <Header black />}
        <div className="h-screen">
          <img
            className="absolute top-0 left-0 object-cover w-full h-full"
            src="/images/PabloParejaPianoPlaying.jpg"
            alt="Media"
            style={{ filter: 'grayscale(100%)', zIndex: -1 }}
          />
        </div>
        {showSecretSections && (
          <div className="relative flex flex-col-reverse p-8 text-2xl text-white bg-black sm:p-56 sm:flex-row">
            <div>
              <div className="flex py-12 font-sans text-xl sm:mr-24 sm:py-0">
                <div>
                  <Icon className="w-9 h-9" icon={DIAGONAL} />
                </div>
                <div
                  className="flex py-6 text-base italic leading-8 sm:py-0 sm:px-8"
                  style={{ letterSpacing: '1px' }}
                >
                  When the dreams you've been chasing, never will come <br />
                  Like the fire that burnt in you is now just a glow <br />
                  Solitary, reminiscence, of what you once hoped <br />
                  But we will sail, agains the wind, hard though it may be <br />
                  after all we're just bound to cross the sea...
                </div>
                <div className="flex items-end">
                  <Icon className="w-9 h-9" icon={DIAGONAL} />
                </div>
              </div>
            </div>
            <Mobile>
              <div className="flex flex-col w-full">{getContactForm()}</div>
            </Mobile>
            <Desktop includeBiggerScreens>
              <div className="flex flex-col" style={{ minWidth: '352px', maxWidth: '352px' }}>
                {getContactForm()}
              </div>
            </Desktop>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
