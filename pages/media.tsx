import { useState } from 'react';
import Head from 'next/head';
import Modal from 'react-modal';

// containers
import Footer from 'containers/footer';
import Header from 'containers/header';

// types
import { ImageData } from 'types';

const Media: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [modalImage, setModalImage] = useState<ImageData>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const showSecretSections = text.includes('secret');

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
        <div className="h-screen py-16 px-36">
          {showSecretSections && <Header />}

          <img
            className="absolute top-0 left-0 object-cover w-full h-full"
            src="/images/mediaBackground.jpg"
            alt="Media"
            style={{ filter: 'grayscale(100%)', zIndex: -1 }}
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
        )}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          closeTimeoutMS={500}
          style={{
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            {modalImage && <img className="h-full" src={modalImage?.src} alt={modalImage?.alt} />}
          </div>
        </Modal>
        <Footer />
      </div>
    </div>
  );
};

export default Media;
