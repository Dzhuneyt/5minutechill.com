'use client';

import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      {children}
    </MantineProvider>
  );
}
