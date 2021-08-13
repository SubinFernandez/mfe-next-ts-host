import type { AppProps } from 'next/app'

import Header from '../src/components/header'
import Nav from '../src/components/nav'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
