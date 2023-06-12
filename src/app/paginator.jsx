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
                <div className={styles.page_num_box}>
                    <div className={styles.box}>
                        <p className={styles.page_number}>1</p>
                    </div>
                    <div className={styles.box}>
                        <p className={styles.page_number}>2</p>
                    </div>
                    <div className={styles.box}>
                        <p className={styles.page_number}>3</p>
                    </div>
                    <div className={styles.box}>
                        <p className={styles.page_number}>4</p>
                    </div>
                    <div className={styles.box}>
                        <p className={styles.page_number}>5</p>
                    </div>
                </div>
                <div className={styles.page_arrow}>
                    <Image
                        className={styles.arrowImage} 
                        src={arrowRight} 
                        alt="right arrow"
                        onClick={movePageRight}
                        style={{
                            cursor: 'pointer'
                        }}
                    />
                </div>
            </div>
        </>
    )
}