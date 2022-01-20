import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, page, instrument }) => {
    return (
        <>
            <Head>
                <title>Music House - { page }</title>
                <meta name="description" content="Music House - musical instrument sales website" />
                <link rel="icon" href="/favicon.ico" />
                
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Raleway:wght@300;400;700;900&display=swap" rel="stylesheet" />
            </Head>


            <Header 
                instrument={instrument}
            /> 

            { children }

            <Footer />
        </>
    )
}

Layout.defaultProps = {
    instrument: null
}

export default Layout
