import styles from '../../styles/Home.module.css'

export default function SearchBar() {
    return (
        <>
            <div className="searchbar_body">
                <input className={styles.search_field} type="text" placeholder="search here..."/>
            </div>
        </>
    );
}