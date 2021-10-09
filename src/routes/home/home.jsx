import React, { useState, useRef } from 'react';
import Header from '../../components/header/header';
import WriteForm from '../../components/write-form/write-form';
import Lake from '../../components/lake/lake';
import styles from './home.module.css';

const Home = ({googleAuth}) => {
    const messageRef = useRef();
    const formRef = useRef();
    const [emotions, setEmotions] = useState({});
    let selects = [];
    const onLogout = () => {
        googleAuth.logout();
    }
    const selectEmotion= (event) => {
        if(event.target.checked){
            console.log(event.target);
            selects.push(event.target.id);
        }
    };
    const createEmotion = () => {
        const emotion = {
            id: Date.now(),
            number: selects[selects.length-1],
            text: messageRef.current.value,
        };
        setEmotions(emotions => {
            const updated = {...emotions};
            updated[emotion.id] = emotion;
            selects=[];
            return updated;
        });
        formRef.current.reset();
    }
    return(
        <>
        <section className={styles.home}>
        <Header onLogout={onLogout}/>
            <div className="lake">
        <Lake emotions={emotions}/>
            </div>
            <div className="write">
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
}

export default Home;