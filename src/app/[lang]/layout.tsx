import React from 'react';

import { Providers } from '@app/context';
import { DEFAULT_LOCALE } from '@intl';

import '@app/styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers locale={lang} defaultLocale={DEFAULT_LOCALE}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
