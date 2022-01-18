import Instrument from "./Instrument";
import styles from '../styles/List.module.css';

const List = ({ instruments }) => {

    console.log(instruments)
    return (
        <>
            <div className={styles.list}>
                {instruments.map(instrument => (
                    <Instrument 
                        key={instrument.url}
                        instrument={instrument}
                    />
                ))}
            </div>
        </>
    )
}

export default List;