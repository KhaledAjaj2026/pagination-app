"use client";

import styles from '../../styles/Home.module.css'
import arrowLeft from '../../public/arrow-left.png'
import arrowRight from '../../public/arrow-right.png'
import Image from 'next/image'

export default function Paginator() {
    function movePageLeft() {
        console.log("LEFT");
    }
    function movePageRight() {
        console.log("RIGHT");
    }
    return (
        <>
            <div className={styles.paginator_body}>
                <div className={styles.page_arrow}>
                    <Image
                        className={styles.arrow_image} 
                        src={arrowLeft} 
                        alt="left arrow" 
                        onClick={movePageLeft}
                    />
                </div>
                <div className={styles.page_num}>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                </div>
                <div className={styles.page_arrow}>
                    <Image
                        className={styles.arrowImage} 
                        src={arrowRight} 
                        alt="right arrow"
                        onClick={movePageRight}
                    />
                </div>
            </div>
        </>
    )
}