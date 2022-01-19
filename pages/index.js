import Layout from '../components/Layout';
import List from '../components/List';


export default function Home({instruments, categories}) {

    return (
        <Layout
            page='Index'
        >
            <main className='container'>
                <h1 className='heading'>Our Products</h1>
                <List 
                    instruments={instruments} 
                    categories={categories}
                />
            </main>
        </Layout>
)
}

export async function getServerSideProps () {

    //instruments
    const urlInst = `${process.env.API_URL}/instruments`;

    //categories
    const urlCat = `${process.env.API_URL}/categories`;
    
    //optimizacion de las promesas
    const [ responseInst, responseCat ] = await Promise.all([
        fetch(urlInst),
        fetch(urlCat),
    ])

    const [instruments, categories] = await Promise.all([
        responseInst.json(), 
        responseCat.json(),
    ])

    return {
        props:{
            instruments,
            categories,
        }
    }
}