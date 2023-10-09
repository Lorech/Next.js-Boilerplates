'use client';

import React from 'react';

// The global provider may take in props from the root layout to pass down to the individual providers.
type ProvidersProps = {
  children: React.ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return { children };
}

export default Providers;
