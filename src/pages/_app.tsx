import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import AuthProvider from '@/auth/AuthProvider';
import MessageModal from '@/components/Modal/MessageModal';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: 0,
      retry: 0
    },
  },
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  authGuard?: boolean;
  guestGuard?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const authGuard = Component.authGuard ?? true;
  const guestGuard = Component.guestGuard ?? false;
  return (
    <>
    <AuthProvider checkAuth={guestGuard === false && authGuard === true}>
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
      </AuthProvider>
    </>
  )
}
