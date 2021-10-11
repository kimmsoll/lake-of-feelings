import React, { useState, useRef, useEffect } from 'react';
import Header from '../../components/header/header';
import WriteForm from '../../components/write-form/write-form';
import Lake from '../../components/lake/lake';
import styles from './home.module.css';
import { useHistory } from 'react-router-dom';

const Home = ({googleAuth, emotionRepo}) => {
    const messageRef = useRef();
    const formRef = useRef();
    const history = useHistory();
    const historyState = history?.location?.state;
    const [emotions, setEmotions] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);
    let selects = [];

    const onLogout = () => {
        googleAuth.logout();
    };

    useEffect(() => {
        googleAuth.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                history.push('/');
            }
        });
    }, [googleAuth, userId, history]);
    
    useEffect(() => {
        if (!userId) return;
        const stopSync = emotionRepo.syncEmotions(userId, emotions => {
            setEmotions(emotions);
        });
        return () => stopSync();
    }, [userId, emotionRepo]);

    const selectEmotion = (event) => {
        if(event.target.checked){
            console.log(event.target);
            selects.push(event.target.id);
        }
    };

    const createEmotion = () => {
        const emotion = {
            id: Date.now(),
            number: selects[selects.length-1] || "",
            text: messageRef.current.value || "",
        };
        setEmotions(emotions => {
            const updated = {...emotions};
            if(emotion && emotion.number !== "" && emotion.text !== ""){
                updated[emotion.id] = emotion;
                selects=[];
                return updated;
            };
            return updated;
        });
        if(emotion && emotion.number !== "" && emotion.text !== ""){
            emotionRepo.saveEmotion(userId, emotion);
        }
        formRef.current.reset();
    };

    return(
        <>
        <section className={styles.home}>
        <Header onLogout={onLogout}/>
        <div className={styles.lake}>
            <Lake
            userId={userId}
            emotions={emotions}
            />
        </div>
        <div className={styles.write}>
            <WriteForm
            formRef={formRef}
            messageRef={messageRef}
            onSelect={selectEmotion}
            onAdd={createEmotion}
            />
        </div>
        </section>
        </>
    )
};

export default Home;