import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Symptoms from '../components/symptoms/Symptoms'
import TypeOfPatient from '../components/typeOfPatient/TypeOfPatient'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Doctor's world page</title>
        <meta name="description" content="Doctor's world test task page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='page' >
        <h1 className='page__heading' >
          А вдруг СМА?
        </h1>
        <h2 className='page__description'>Выберите, кто Ваш пациент:</h2>
        <TypeOfPatient />
        <Symptoms />
      </main>
    </>
  )
}

export default Home
