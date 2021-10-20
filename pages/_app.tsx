import type { AppProps } from 'next/app';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { OverlayProvider } from '@react-aria/overlays';
import { Hydrate } from 'react-query/hydration';

import store from 'store';

import 'styles/globals.css';
import { Desktop, MediaContextProvider, Mobile } from 'utils/responsive';

import SEO from '../next-seo.config';

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ReduxProvider store={store}>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <OverlayProvider>
          <DefaultSeo {...SEO} />
          <SocialProfileJsonLd
            type="Person"
            name="Pablo Pareja"
            url="https://www.pablopareja.com"
            sameAs={[
              'http://www.facebook.com/pabloparejamusic',
              'http://instagram.com/pabloparejatobes',
            ]}
          />
          <MediaContextProvider>
            <Mobile>
              <Component {...pageProps} />
            </Mobile>
            <Desktop includeBiggerScreens>
              <Component {...pageProps} />
            </Desktop>
          </MediaContextProvider>
        </OverlayProvider>
      </Hydrate>
    </QueryClientProvider>
  </ReduxProvider>
);

export default MyApp;
