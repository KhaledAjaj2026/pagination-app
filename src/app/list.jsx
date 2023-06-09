import Attendant from './attendant'
import styles from '../../styles/list.scss'

export default function List() {
    return (
        <>
            <h1 className={styles.list_title}>List:</h1>
            <div className={styles.list_body}>
                <ul id="attendants_list" className={styles.list_ul}>
                    <Attendant />
                </ul>
            </div>
        </>
    )
}