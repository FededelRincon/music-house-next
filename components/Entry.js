import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '../helpers'
import styles from '../styles/Entry.module.css'


const Entry = ({entry}) => {

    const { title, resume, id, Picture, published_at, url } = entry;

    return (
        <>
            <article className={styles.pointer}>
                <Link href={`/blog/${url}`} >
                    <div>
                        <Image 
                            priority
                            src={Picture.url}
                            alt={`Imagen blog ${title}`}
                            width={800}
                            height={600}
                            layout='responsive'
                        />
                    </div>
                </Link>

                <div className={styles.content}>
                    <h3>{title}</h3>
                    <p className={styles.date}>{ formatDate(published_at) }</p>
                    <p className={styles.resume}>{resume}</p>
                    <Link href={`/blog/${url}`} >
                        <a className={styles.butons}>
                            Leer Entrada
                        </a>
                    </Link>
                </div>
            </article>
        </>
    )
}

export default Entry
