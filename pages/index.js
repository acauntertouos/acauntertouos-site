import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Acaunt Tertouos</title>
      </Head>
      <Navbar />
      <div>
        <div className={styles.landing}>
          <div>
            <span>Welcome to</span>
            <span>Acaunt Tertouos!</span>
          </div>
        </div>
        <div className={styles.info}>

        </div>
      </div>
      <Footer />
    </>
  )
}
