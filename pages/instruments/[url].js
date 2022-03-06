import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';

import Layout from "../../components/Layout";
import styles from '../../styles/Product.module.css';


const Product = ({ instrument, addCart }) => {
    const { Picture, category, description, name, price, id } = instrument[0];

    const [quantity, setQuantity] = useState(1);

    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault()
        router.back();
    }

    const handleSubmit = e => {
        e.preventDefault();

        if ( quantity < 1 ) {
            alert('not valid quantity');
            return
        }
        
        // Agregar al carrito
        const InstrumentSelected = {
            id, 
            picture: Picture.url,
            name,
            price,
            quantity,
        }

        addCart( InstrumentSelected );
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

                        <form 
                            className={styles.form}
                            onSubmit={handleSubmit}
                        >
                            <label>How many Pays:</label>
                            <select
                                value={quantity}
                                onChange={ e => setQuantity(parseInt(e.target.value) ) }
                            >
                                <option value="0">--Select an option--</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="6">6</option>
                            </select>

                            <input
                                type="submit"
                                value="Add to cart"
                                className={`${styles.buyButton} ${styles.button}`}

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

Product.defaultProps = {
    instrument: null
}

export default Product;