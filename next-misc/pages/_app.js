import '@/styles/globals.css'
import Header from '@/layout/Header'
import 'styles/layout.css'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Head>
        <title>Codevolution</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
