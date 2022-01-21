import Entry from '../components/Entry';
import Layout from '../components/Layout';
import styles from '../styles/Blog.module.css';

const Blog = ({ entries }) => {

    return (
        <>
            <Layout
                page="Blog"
            >
                <main className='container'>
                    <h2 className='heading'>Blog</h2>

                    <div className={styles.blog}>
                        {entries.map(entry => (
                            <Entry 
                                key={entry.id}
                                entry={entry} 
                            />
                        ))}
                    </div>
                </main>
            </Layout>
        </>
    )
}


export async function getServerSideProps() {

    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;


    const response = await fetch(url);
    const entries = await response.json();

    return {
        props: {
            entries
        }
    }
}

Blog.defaultProps = {
    entries: null
}


export default Blog;