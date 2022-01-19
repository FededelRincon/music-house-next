import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import styles from '../styles/PageNotFound.module.css';


const PageNotFound = () => {
    const router = useRouter();
    
    const handleClick = (e) => {
        e.preventDefault()
        router.back();
    }

    return (
        <>
            <Layout>
                <div className={styles.notFound}>
                    <h1 className='heading'>Page not found</h1>
                    <a 
                        onClick={handleClick}
                    >Go back</a>
                </div>
            </Layout>
        </>
    )
}

export default PageNotFound
