import { useState } from 'react';
import Head from 'next/head';

// containers
import Footer from 'containers/footer';
import Header from 'containers/header';

// components
import Modal from 'components/modal';

// utils
import { Desktop, Mobile } from 'utils/responsive';

// types
import { ImageData } from 'types';
import CookiesBanner from 'components/cookies-banner';

const Media: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [modalImage, setModalImage] = useState<ImageData>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openImageModal = ({ src, alt }) => {
    setModalImage({ src, alt });
    setModalIsOpen(true);
  };

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
        <div className="relative h-screen">
          <Header />
          <Desktop includeBiggerScreens>
            <img
              className="absolute top-0 left-0 object-cover w-full h-full"
              src="/images/mediaBackground.jpg"
              alt="Media"
              style={{ filter: 'grayscale(100%)', zIndex: -1 }}
            />
          </Desktop>
          <Mobile>
            <img
              className="absolute top-0 left-0 object-cover w-full h-full"
              src="/images/mediaBackground_mobile.png"
              alt="Media"
              style={{ filter: 'grayscale(100%)', zIndex: -1 }}
            />
          </Mobile>
          <div
            className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-3xl leading-9 text-white"
            style={{ letterSpacing: '18px' }}
          >
            MEDIA
          </div>
        </div>
        <Desktop includeBiggerScreens>
          <div className="relative flex w-full my-24 text-2xl text-white">
            <div className="flex flex-col mr-4" style={{ width: '60%' }}>
              <div
                className="flex mb-6 ml-32"
                role="button"
                tabIndex={0}
                onClick={() =>
                  openImageModal({
                    src: '/images/PabloParejaPiano.jpg',
                    alt: 'Pablo Pareja playing piano at a recording studio',
                  })
                }
                onKeyPress={() =>
                  openImageModal({
                    src: '/images/PabloParejaPiano.jpg',
                    alt: 'Pablo Pareja playing piano at a recording studio',
                  })
                }
              >
                <img
                  src="/images/PabloParejaPiano.jpg"
                  alt="Pablo Pareja playing piano at a recording studio"
                />
              </div>
              <div
                className="flex"
                role="button"
                tabIndex={0}
                onClick={() =>
                  openImageModal({
                    src: '/images/Pablo-Pareja-Vancouver.jpg',
                    alt: 'Pablo Pareja playing piano in Vancouver',
                  })
                }
                onKeyPress={() =>
                  openImageModal({
                    src: '/images/Pablo-Pareja-Vancouver.jpg',
                    alt: 'Pablo Pareja playing piano in Vancouver',
                  })
                }
              >
                <img
                  src="/images/Pablo-Pareja-Vancouver.jpg"
                  alt="Pablo Pareja playing piano in Vancouver"
                />
              </div>
            </div>
            <div className="flex flex-col pr-32 pt-36" style={{ width: '40%' }}>
              <div
                className="flex mb-5"
                role="button"
                tabIndex={0}
                onClick={() =>
                  openImageModal({
                    src: '/images/Pablo-Pareja-jazz-Zahara.jpg',
                    alt: 'Pablo Pareja singing at Jazzahara',
                  })
                }
                onKeyPress={() =>
                  openImageModal({
                    src: '/images/Pablo-Pareja-jazz-Zahara.jpg',
                    alt: 'Pablo Pareja singing at Jazzahara',
                  })
                }
              >
                <img
                  src="/images/Pablo-Pareja-jazz-Zahara.jpg"
                  alt="Pablo Pareja singing at Jazzahara"
                />
              </div>
              <div
                className="flex mr-9"
                role="button"
                tabIndex={0}
                onClick={() =>
                  openImageModal({
                    src: '/images/mediaBackground.jpg',
                    alt: 'Pablo Pareja playing guitar in a recording studio',
                  })
                }
                onKeyPress={() =>
                  openImageModal({
                    src: '/images/mediaBackground.jpg',
                    alt: 'Pablo Pareja playing guitar in a recording studio',
                  })
                }
              >
                <img
                  src="/images/mediaBackground.jpg"
                  alt="Pablo Pareja playing guitar at a recording studio"
                />
              </div>
            </div>
          </div>
          <Modal
            size="wide"
            title=""
            open={modalIsOpen}
            onDismiss={() => setModalIsOpen(false)}
            dismissable
          >
            <div className="flex items-center justify-center w-full h-full overflow-hidden">
              {modalImage && <img className="w-full" src={modalImage?.src} alt={modalImage?.alt} />}
            </div>
          </Modal>
        </Desktop>
        <Mobile>
          <div className="flex flex-col">
            <img
              src="/images/PabloParejaPiano.jpg"
              alt="Pablo Pareja playing piano at a recording studio"
            />
            <img
              src="/images/Pablo-Pareja-Vancouver.jpg"
              alt="Pablo Pareja playing piano in Vancouver"
            />
            <img
              src="/images/Pablo-Pareja-jazz-Zahara.jpg"
              alt="Pablo Pareja singing at Jazzahara"
            />
            <img
              src="/images/mediaBackground.jpg"
              alt="Pablo Pareja playing guitar at a recording studio"
            />
          </div>
        </Mobile>
        <Footer />
        <div className="fixed bottom-0 left-0">
          <CookiesBanner />
        </div>
      </div>
    </div>
  );
};

export default Media;
