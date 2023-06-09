import Attendant from './attendant'
import styles from '../../styles/Home.module.css'

export default function List() {
    return (
        <>
            <h1 className={styles.list_title}>List:</h1>
            <div className={styles.list_body}>
                <ul id="attendants_list">
                    <Attendant />
                </ul>
            </div>
        </>
    )
}