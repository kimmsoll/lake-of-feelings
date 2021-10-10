import React from 'react';
import Emotion from '../emotion/emotion';

const LakeDetail = ({userId, name, emotions}) => {
    return(
        <>
        {
        emotions &&
        Object.keys(emotions).map(key=>(
            emotions[key]["number"] === name &&
            (<Emotion
            key={key}
            id={key}
            userId={userId}
            text={emotions[key]["text"]}
            emotionNum={emotions[key]["number"]}
            />)
            ))
        }
        </>
    );
}


export default LakeDetail;