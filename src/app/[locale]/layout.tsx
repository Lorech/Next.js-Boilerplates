import React from 'react';

import '@app/styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
