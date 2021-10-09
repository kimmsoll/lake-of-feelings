import React from 'react';
import { Link } from 'react-router-dom';
import styles from './emotion.module.css';

const Emotion = ({id, text, emotionNum}) => {
    return(<>
        {id &&
            <Link to={{
                pathname: `/${id}`,
                state: {
                    num: emotionNum,
                    text: text
                }
            }}>
                <img className={styles.image} src={`/img/small${emotionNum.slice(-1)}.png`} alt="emotion"/>
            </Link>
        }
        </>
    );
}

export default Emotion;