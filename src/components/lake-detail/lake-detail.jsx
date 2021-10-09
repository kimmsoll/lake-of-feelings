import React from 'react';
import Emotion from '../emotion/emotion';

const LakeDetail = ({name, emotions}) => {
    return(
        <>
        {emotions && emotions.length > 0 &&
            Object.keys(emotions).map(key=>(
                emotions[key]["number"] === name &&
                (<Emotion
                key={key}
                id={key}
                emotionNum={emotions[key]["number"]}
                text={emotions[key]["text"]}
                />)
                ))
        }
        </>
    );
}


export default LakeDetail;