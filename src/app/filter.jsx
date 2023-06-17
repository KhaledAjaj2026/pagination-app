"use client";

import attendees from '../../json/attendees.json'
import styles from '../../styles/Home.module.scss'

export default function Sort() {
    return (
        <>
            <div className={styles.sort_body}>
                <div className={styles.sort_form}>
                    <div className={styles.sort_filter_item}>
                        <label id={styles.sort_label} htmlFor="sort_select">Sort by: </label>
                        <select name="sort_select" id={styles.sort_select} >
                            <option value="name">Name</option>
                            <option value="color">Color</option>
                            <option value="id">ID</option>
                        </select>
                    </div>
                    <div className={styles.sort_filter_item}>
                        <label id={styles.filter_label} htmlFor="filter_select">Filter: </label>
                        <select name="filter_select" id={styles.filter_select} >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                    <button id={styles.filter_sort_button}>Enter</button>
                </div>
            </div>
        </>
    );
}