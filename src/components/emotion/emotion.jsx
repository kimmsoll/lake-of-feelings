import React from 'react';
import { Link } from 'react-router-dom';
import styles from './emotion.module.css';

const Emotion = ({userId, id, text, emotionNum}) => {
    const getNum = (emotionNum) => {
        if(emotionNum === "emotion1"){
            return styles.emotion1;
        }
        else if(emotionNum === "emotion2"){
            return styles.emotion2;
        }
        else if(emotionNum === "emotion3"){
            return styles.emotion3;
        }
        else if(emotionNum === "emotion4"){
            return styles.emotion4;
        }
        else if(emotionNum === "emotion5"){
            return styles.emotion5;
        }
    };
    
    return(<>
        {id &&
            <Link to={{
                pathname: `emotion/${id}`,
                state: {
                    id: id,
                    userId: userId,
                    num: emotionNum,
                    text: text
                }
            }}>
                <img className={`${styles.image} ${getNum(emotionNum)}`} src={`/img/small${emotionNum.slice(-1)}.png`} alt="emotion"/>
            </Link>
        }
        </>
    );
}

export default Emotion;