import React from 'react';
import Emotion from '../emotion/emotion';

const LakeDetail = ({name, emotions}) => {
    return(
        <>
        {Object.keys(emotions).map(key=>(
            emotions[key]["number"] === name &&
            (<Emotion
            key={key}
            id={key}
            text={emotions[key]["text"]}
            emotionNum={emotions[key]["number"]}
            />)
            ))
        }
        </>
    );
}


export default LakeDetail;