import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { OverlayProvider } from '@react-aria/overlays';
import { Hydrate } from 'react-query/hydration';
import Modal from 'react-modal';

import store from 'store';

import 'styles/globals.css';
import { MediaContextProvider, Mobile } from 'utils/responsive';

const queryClient = new QueryClient();

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#__next');

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ReduxProvider store={store}>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <OverlayProvider>
          <MediaContextProvider>
            <Mobile includeBiggerScreens>
              <Component {...pageProps} />
            </Mobile>
          </MediaContextProvider>
        </OverlayProvider>
      </Hydrate>
    </QueryClientProvider>
  </ReduxProvider>
);

export default MyApp;
