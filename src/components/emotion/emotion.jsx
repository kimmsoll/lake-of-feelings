import React from 'react';
import styles from './emotion.module.css';

const Emotion = ({emotionNum}) => {
    return(
        <img className={styles.image} id={styles.emotionNum} src={`/img/small${emotionNum.slice(-1)}.png`} alt="emotion"/>
    );
}

export default Emotion;