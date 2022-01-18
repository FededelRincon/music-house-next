import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Instrument.module.css';

const Instrument = ({ instrument }) => {
    const {Picture, category, description, id, name, price, url} = instrument
    return (
        <>
            <div className={styles.instrument}>
                <Image
                    layout='responsive'
                    width={180}
                    height={350}
                    src={Picture.url}
                    alt={`Image product ${name}`}
                />
                <div className={styles.content}>
                    <h3>{name}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>${price}</p>
                    <Link href={`/instruments/${url}`}>
                        <a className={styles.butons}>
                            Ver Producto
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Instrument;