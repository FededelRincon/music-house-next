import Link from "next/link";
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import { useRouter } from "next/router";


const Header = ({ instrument }) => {

    const router = useRouter();

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
                        <Link href="/cart">
                            <a>
                                <Image 
                                    layout="fixed" 
                                    width={25} 
                                    height={18} 
                                    src='/img/cart.png'
                                    alt='Imagen carrito'
                                />
                            </a>
                        </Link>
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

            {
                router.pathname === '/' && (
                    <div
                        className={styles.guitar}
                    >
                        <Image
                            layout="fixed"
                            width={310}
                            height={690} 
                            src = '/img/strato_wood.png' 
                            alt='image header guitar' 
                        />
                    </div>
                )
            }


        </header>
    )
}

export default Header;