import React from 'react';
import LakeDetail from '../lake-detail/lake-detail';
import styles from './lake.module.css';

const Lake = ({emotions, userId}) => {
    return(
        <section className={styles.content}>
        <div className={styles.wave1}></div>
        <div className={styles.wave2}></div>
            <div className={styles.emotion1}>
            <LakeDetail userId={userId} name="emotion1" emotions={emotions}/>
            </div>
            <div className={styles.emotion2}>
            <LakeDetail userId={userId} name="emotion2" emotions={emotions}/>
            </div>
            <div className={styles.emotion3}>
            <LakeDetail userId={userId} name="emotion3" emotions={emotions}/>
            </div>
            <div className={styles.emotion4}>
            <LakeDetail userId={userId} name="emotion4" emotions={emotions}/>
            </div>
            <div className={styles.emotion5}>
            <LakeDetail userId={userId} name="emotion5" emotions={emotions}/>
            </div>
        </section>
    );
}

export default Lake;