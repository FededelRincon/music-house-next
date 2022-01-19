import Image from "next/image";
import { useRouter } from 'next/router';

import Layout from "../../components/Layout";

import styles from '../../styles/Product.module.css';


const Product = ({ instrument }) => {
    const { Picture, category, description, name, price } = instrument[0];

    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault()
        router.back();
    }

    const handleSubmit = e => {
        e.preventDefault();

        alert('Call us... \n 0800-888-123456');
    }

    return (
        <>
            <Layout
                page={`Instrument ${name}`}
            >
                <div className={styles.instrument}>
                    <Image
                        priority
                        layout='responsive'
                        width={100}
                        height={180}
                        src={Picture.url}
                        alt={`Image product ${name}`}
                    />
                    <div className={styles.content}>
                        <h3>{name}</h3>
                        <p className={styles.description}>{description}</p>
                        <p className={styles.price}>$ {price}</p>

                        <p>Do you want it ?</p>
                        <form 
                            className={styles.form}
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="submit"
                                value="Buy it"
                                className={styles.button}
                            />
                        </form>
                        <a 
                            className={styles.button}
                            onClick={handleClick}
                        >
                            Go back
                        </a>
                    </div>
                </div>
            </Layout>
        </>
    )
};

export async function getServerSideProps({ query: {url} }) {

    const urlInstrument = `${process.env.API_URL}/instruments?url=${url}`
    const response = await fetch(urlInstrument);
    const instrument = await response.json();

    return {
        props: {
            instrument
        }
    }
}

export default Product;