import attendees from '../../json/attendees.json'
import styles from '../../styles/Home.module.scss'

export default function Sort() {
    return (
        <>
            <div className={styles.sort_body}>
                <div className={styles.sort_form}>
                    <label id={styles.sort_label} htmlFor="sort_select">Sort by: </label>
                    <select name="sort_select" id={styles.sort_select} >
                        <option value="name">Name</option>
                        <option value="color">Color</option>
                        <option value="id">ID</option>
                    </select>
                </div>
            </div>
        </>
    );
}