import React from 'react';
import Emotion from '../emotion/emotion';
import styles from './lake.module.css';

const Lake = ({emotions}) => {
    return(
        <section className={styles.content}>
            {Object.keys(emotions).map(key=>(
                <Emotion
                key={key}
                emotionNum={emotions[key]["number"]}
                />))}
        </section>
    );
}

export default Lake;