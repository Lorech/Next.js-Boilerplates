'use client';

import React from 'react';

import {
  LocalizationProvider,
  LocalizationProviderProps,
} from './Localization';

// The global provider may take in props from the root layout to pass down to the individual providers.
type ProvidersProps = {
  children: React.ReactNode;
} & LocalizationProviderProps;

function Providers({ locale, defaultLocale, children }: ProvidersProps) {
  return (
    <LocalizationProvider locale={locale} defaultLocale={defaultLocale}>
      {children}
    </LocalizationProvider>
  );
}

export default Providers;
