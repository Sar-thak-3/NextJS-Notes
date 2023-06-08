import 'styles/globals.css'
import Header from '@/layout/Header'
import 'styles/layout.css'
import Footer from '@/layout/Footer'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Head>
        <title>Codevolution</title>
      </Head>
      <Navbar />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
