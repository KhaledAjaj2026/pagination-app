import Attendants from './attendant'
import styles from '../../styles/Home.module.css'

export default function List() {
    return (
        <>
            <div className={styles.list_body}>
                <ul id="attendants_list">
                    <Attendants />
                </ul>
            </div>
        </>
    )
}