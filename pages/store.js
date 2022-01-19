import Layout from '../components/Layout';
import List from '../components/List';

const Store = ({instruments, categories}) => {


    return (
        <>
            <Layout
                page="Store"
            >
                <main className='container'>
                    <h1 className='heading'>Our Products</h1>

                    <List 
                        instruments={instruments} 
                        categories={categories}
                    />
                </main>
            </Layout>
        </>
    )
}

export async function getServerSideProps () {

    //instruments
    const urlInst = `${process.env.API_URL}/instruments`;
    const responseInst = await fetch(urlInst);
    const instruments = await responseInst.json();


    //categories
    const urlCat = `${process.env.API_URL}/categories`;
    const responseCat = await fetch(urlCat);
    const categories = await responseCat.json();

    return {
        props:{
            instruments,
            categories
        }
    }
}

export default Store;