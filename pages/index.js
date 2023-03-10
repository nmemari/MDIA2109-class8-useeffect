import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Link className={styles.link} href='/useEffectOne'>UseEffect One</Link>
          <Link className={styles.link} href='/useEffectTwo'>UseEffect Two</Link>
          <Link className={styles.link} href='/useEffectThree'>UseEffect Three</Link>
          <Link className={styles.link} href='/carouselPage'>Carousel Page</Link>
        </div>
      </main>
    </>
  )
}
