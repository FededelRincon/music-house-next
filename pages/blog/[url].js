import Image from "next/image";
import Link from "next/link";

import Layout from "../../components/Layout";
import { formatDate } from '../../helpers/index';
import styles from '../../styles/Entry.module.css'

const BlogEntry = ({ entry }) => {
    const { content, Picture, published_at, title} = entry;

    return (
        <>
            <Layout
                page={title}
            >
                <main className="container">
                    <h1 className="heading"> { title } </h1>
                    <article className={styles.entry}>
                        <Image
                            priority
                            layout='responsive'
                            width={800}
                            height={600}
                            src={ Picture.url }
                            alt={`Imagen ${title}`}
                        />

                        <div className={styles.content}>
                            <p className={styles.date}>{ formatDate(published_at) }</p>
                            <p className={styles.text}>{content}</p>
                        </div>

                    </article>

                    <div className={styles.buttonContainer}>
                        <Link href={`/blog`} >
                            <a className={styles.goBackButon}>
                                Volver
                            </a>
                        </Link>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`;

    const response = await fetch(url);
    const entries = await response.json();

    const paths = entries.map(entry => ({
        params: { url: entry.url},
    }))

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps ({ params }) {
    const {url} = params;

    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;

    const response = await fetch(urlBlog);
    const entry = await response.json();

    return {
        props:{
            entry: entry[0]
        }
    }
}

BlogEntry.defaultProps = {
    entry: null
}


export default BlogEntry
