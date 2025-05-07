import localFont from 'next/font/local';
import '@/styles/main.css';
import generateMetadata from '@/utils/generateMetadata';
import { ViewTransitions } from 'next-view-transitions';
import Script from 'next/script';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});

const bricolageGrotesque = localFont({
  src: '../fonts/BricolageGrotesque.ttf',
  variable: '--font-bricolage-grotesque',
  weight: '100 900'
});

export const metadata = generateMetadata();

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  if (process.env.NODE_ENV === 'development') {
    window.rybbit = {
      // eslint-disable-next-line no-empty-function
      pageview: () => {},
      // eslint-disable-next-line no-empty-function
      event: () => {}
    };
  }

  return (
    <ViewTransitions>
      <html lang='en'>
        {process.env.NODE_ENV === 'production' && process.env.RYBBIT_ANALYTICS_SITE_ID && process.env.RYBBIT_ANALYTICS_URL && (
          <Script
            id='rybbit-analytics-script'
            src={`${process.env.RYBBIT_ANALYTICS_URL}/script.js`}
            site-id={process.env.RYBBIT_ANALYTICS_SITE_ID}
            defer={true}
            strategy='afterInteractive'
          />
        )}

        <body className={`${geistSans.variable} ${bricolageGrotesque.variable} font-geist text-primary antialiased`}>
          <div className='flex h-dvh flex-col px-6 sm:px-0'>
            {children}
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}