import { useEffect, useState } from "react";
import Instrument from "./Instrument";
import Filter from "./Filter";

import styles from '../styles/List.module.css';


const List = ({ instruments, categories }) => {

    const [category, setCategory] = useState('');   
    const [filterList, setFilterList] = useState([]);

    useEffect(() => {
        if(category){
            //with category filter
            const arrayFilter = instruments.filter(instrument => instrument.category.name === category);
            setFilterList( arrayFilter );
        } else {
            //without any filter
            setFilterList(instruments)
        }
    // eslint-disable-next-line no-use-before-define
    }, [category])

    return (
        <>
            <Filter 
                categories={categories} 
                category={category}
                setCategory={setCategory} 
            />

            <div className={styles.list}>
                {filterList.map(instrument => (
                    <Instrument 
                        key={instrument.url}
                        instrument={instrument}
                    />
                ))}
            </div>
        </>
    )
}

List.defaultProps = {
    instruments: null
}

export default List;