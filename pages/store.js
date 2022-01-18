import Layout from '../components/Layout';
import List from '../components/List';


const Store = ({instruments}) => {

    // console.log(instruments)

    return (
        <>
            <Layout
                page="Store"
            >
                <main className='container'>
                    <h1 className='heading'>Our Products</h1>

                    <List instruments={instruments} />
                </main>
            </Layout>
        </>
    )
}

export async function getServerSideProps () {

    //instruments
    const urlInstrument = `${process.env.API_URL}/instruments`;
    const response = await fetch(urlInstrument);
    const instruments = await response.json();


    //categories

    return {
        props:{
            instruments
        }
    }
}

export default Store;