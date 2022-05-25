import '../styles/globals.css'
import {NextPage} from 'next'
import { AppProps } from '../node_modules/next/app';
import { ReactElement, ReactNode } from 'react';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}
type AppPropsWithLayout = AppProps &{
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
 
  const getLayout = Component.getLayout || ((page: JSX.Element) => page)
 
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
