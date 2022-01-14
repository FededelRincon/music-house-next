import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <>
            <Layout
                page="About"
            >
                <main className='container'>
                    <h2 className='heading'> About Us </h2>

                    <div className={styles.content}>
                        <Image 
                            layout='responsive'
                            width={600}
                            height={450}
                            src="/img/about.jpg"
                            alt="About image"
                        />

                        <div>
                            <p> Eu pariatur et aliqua magna irure minim proident voluptate dolore eiusmod ad. Ut duis laboris sit voluptate cillum adipisicing eu culpa aliqua. Quis aute aliquip anim pariatur do exercitation fugiat occaecat commodo cillum do culpa ad. Enim elit ut amet anim qui tempor enim reprehenderit consequat labore cillum. Elit aliqua est officia ad aute nulla excepteur in id qui aliquip amet amet excepteur. Ex aute tempor cupidatat ut adipisicing aliquip ullamco adipisicing sit. Dolore cillum incididunt anim ipsum excepteur aliquip commodo fugiat enim exercitation veniam do. </p>

                            <p> Fugiat dolor sunt ea ullamco ad voluptate. Culpa aliqua et ad laborum anim Lorem veniam esse ullamco eiusmod fugiat. Veniam deserunt ad mollit aliquip. Reprehenderit sint culpa cillum ex proident nostrud qui fugiat dolore excepteur ipsum anim cillum aute. Adipisicing amet duis incididunt irure anim commodo pariatur exercitation. </p>

                            <p> Ullamco esse aute ex officia dolor fugiat qui qui officia officia. Labore irure commodo dolor commodo mollit in qui incididunt nisi. Officia proident duis irure nulla aliqua sint. Duis adipisicing sit nostrud veniam do laboris. </p>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export default About;