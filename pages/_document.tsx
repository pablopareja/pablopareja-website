/* eslint-disable react/no-danger */
import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from 'lib/analytics/ga';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
            {
                "@context": "http://schema.org",
                "@type": "Logo",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Málaga",
                },
                "image": "janedoe.jpg",
                "jobTitle": "Singer, multi-instrumentalist, and composer",
                "name": "Pablo Pareja",
                "url": "https://www.pablopareja.com",
                "logo": "https://raw.githubusercontent.com/pablopareja/pablopareja.github.io/main/public/images/mediaBackground_mobile.png",
              }),
            }`,
            }}
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Cabin&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
