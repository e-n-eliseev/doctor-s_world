import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Doctor's world page</title>
        <meta name="description" content="Doctor's world test task page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1 >
          Welcome
        </h1>
      </main>
    </div>
  )
}

export default Home
