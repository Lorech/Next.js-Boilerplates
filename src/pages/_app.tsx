import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import getTranslations from '@util/getTranslations';

import '@app/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const { locale, defaultLocale } = useRouter();

  // The default locale of the site, which is either the NextJS default locale if set, or English.
  const fallbackLocale = defaultLocale || 'en';
  // The locale currently loaded, which is the one routed to by NextJS if loaded or the default locale.
  const currentLocale = locale || fallbackLocale;
  // Object of translations for react-intl consumption.
  const translations = getTranslations(currentLocale, fallbackLocale);

  return (
    <IntlProvider
      messages={translations}
      locale={currentLocale}
      defaultLocale={fallbackLocale}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}
