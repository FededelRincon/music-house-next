import Link from "next/link";
import styles from '../styles/Header.module.css';
import Image from 'next/image';


const Header = ({ instrument }) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.bar}>
                    <div>
                        <Link href="/">
                            <a>
                                <Image
                                    src="/img/logo2.svg"
                                    width={400}
                                    height={100}
                                    alt="image Logo"
                                />
                            </a>
                        </Link>
                    </div>
                    <nav className={styles.navigation}>
                        <Link href="/">Home</Link>
                        <Link href="/store">Store</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/about">About</Link>
                    </nav>
                </div>

                {instrument && (
                    <div className={styles.model}>
                        <h2>Model: {instrument.name}</h2>
                        <p>{instrument.description}</p>
                        <p className={styles.price}>$ {instrument.price}</p>
                        <Link href={`/instruments/${instrument.url}`}>
                            <a className={styles.butons}>
                                Check Product
                            </a>
                        </Link>
                    </div>
                )}
            </div>


            
        </header>
    )
}

export default Header;