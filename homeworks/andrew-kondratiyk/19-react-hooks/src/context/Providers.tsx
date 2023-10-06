'use client';

import {SessionProvider} from 'next-auth/react';
import {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

type Props = {
  children?: ReactNode;
};

export const queryClient = new QueryClient();

export const Providers = ({children}: Props) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
};
