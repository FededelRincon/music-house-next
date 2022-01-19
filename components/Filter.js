import styles from '../styles/Filter.module.css';


const Filter = ({ categories, category, setCategory }) => {

    return (
        <>
            <div>
                <form className={styles.form}>
                    <select
                        onChange={ e => setCategory(e.target.value) }
                        value={category}
                        className={styles.select}
                    >
                        <option value=""> Filter by intrument </option>
                        {categories.map(option => (
                            <option key={option.id} value={option.name}>{option.name}</option>
                        ))}

                    </select>
                </form>
            </div>
        </>
    )
}

export default Filter;