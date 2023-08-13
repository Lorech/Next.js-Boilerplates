import React from 'react';
import { IntlProvider } from 'react-intl';

import getTranslations from '@util/getTranslations';

export type LocalizationProviderProps = {
  locale: string;
  defaultLocale: string;
  children: React.ReactNode;
};

function LocalizationProvider({
  locale,
  defaultLocale,
  children,
}: LocalizationProviderProps) {
  // The locale currently loaded, which is the one routed to by Next.js if loaded or the default locale.
  const currentLocale = locale || defaultLocale;
  // Object of translations for react-intl consumption.
  const translations = getTranslations(currentLocale, defaultLocale);

  return (
    <IntlProvider
      messages={translations}
      locale={currentLocale}
      defaultLocale={defaultLocale}
    >
      {children}
    </IntlProvider>
  );
}

export default LocalizationProvider;
