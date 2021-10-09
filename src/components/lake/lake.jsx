import React from 'react';
import LakeDetail from '../lake-detail/lake-detail';
import styles from './lake.module.css';

const Lake = ({emotions}) => {
    return(<>
        {emotions && emotions.length >0 &&
            <section className={styles.content}>
                <div className={styles.emotion1}>
                <LakeDetail name="emotion1" emotions={emotions}/>
                </div>
                <div className={styles.emotion2}>
                <LakeDetail name="emotion2" emotions={emotions}/>
                </div>
                <div className={styles.emotion3}>
                <LakeDetail name="emotion3" emotions={emotions}/>
                </div>
                <div className={styles.emotion4}>
                <LakeDetail name="emotion4" emotions={emotions}/>
                </div>
                <div className={styles.emotion5}>
                <LakeDetail name="emotion5" emotions={emotions}/>
                </div>
            </section>
        }</>
    );
}

export default Lake;