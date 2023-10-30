import { FC, useEffect, useState } from 'react';
import { CONSENT_KEY } from './constants';

// types
import { CookiesBannerProps } from './types';

const CookiesBanner: FC<CookiesBannerProps> = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  useEffect(() => {
    if (!(window.localStorage.getItem(CONSENT_KEY) === 'true')) {
      setShowBanner(true);
    }
  }, []);
  return (
    <div className="relative w-screen">
      {showBanner && (
        <>
          <div className="absolute top-0 bottom-0 w-full h-full bg-black opacity-40" />
          <div className="relative flex flex-col items-center w-full px-8 py-4 text-xs text-white">
            <p className="overflow-auto" style={{ maxHeight: '40px' }}>
              This site uses cookies from Google to deliver its services and to analyze traffic.
              Information about your use of this site is shared with Google. By using this site, you
              agree to its use of cookies. Learn about{' '}
              <a
                className="underline"
                href="https://www.google.com/policies/privacy/"
                target="_blank"
                rel="noreferrer"
              >
                Google’s privacy practices
              </a>{' '}
              and how{' '}
              <a
                className="underline"
                href="https://www.google.com/policies/privacy/partners/"
                target="_blank"
                rel="noreferrer"
              >
                Google uses data on partner sites
              </a>
              .
            </p>
            <button
              className="px-3 py-1 mt-4 border border-white"
              type="button"
              onClick={() => {
                window.localStorage.setItem(CONSENT_KEY, 'true');
                setShowBanner(false);
              }}
            >
              Accept
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CookiesBanner;
