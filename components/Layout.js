import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, page }) => {
    return (
        <>
            <Head>
                <title>Music House - { page }</title>
                <meta name="description" content="Music House - musical instrument sales website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Header /> 

            { children }

            <Footer />
        </>
    )
}

export default Layout
