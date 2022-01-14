import Link from "next/link";
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={`container ${styles.content}`}>
                    <nav className={styles.navigation}>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/store">Store</Link>
                    </nav>

                    {/* <p className={styles.copyright}>Todos los derechos reservados &copy;	</p> */}
                    <p className={styles.copyright}>Todos los derechos reservados &copy; </p>
        
                </div>
            </footer>
            <div className={styles.madeBy}>Sitio realizado por FDR</div>
        </>
    )
}

export default Footer;