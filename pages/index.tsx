import type { NextPage } from 'next'
import Head from 'next/head'

import Welcome from '../src/components/welcome'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Host MFE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome />
    </>
  )
}

export default Home
