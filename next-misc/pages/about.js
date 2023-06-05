import Footer from "@/components/Footer"
import Head from "next/head"

export default function About(){
    return (
        <> 
            <Head>
                <title>About Codevolution</title>
                <meta name="description" content="Free tutorials about on web dev"/>
            </Head>
            <div className='content'>About</div>
        </>
    )
}

About.getLayout = function PageLayout(page){
    return (
        <>
            {page}
            <Footer />
        </>
    )
}