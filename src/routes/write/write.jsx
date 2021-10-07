import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/button/button';
import Header from '../../components/header/header';
import styles from './write.module.css';

const Write = ({googleAuth}) => {
    const messageRef = useRef();
    const formRef = useRef();
    const history = useHistory();
    const [emotions, setEmotions] = useState({});
    let selects = [];
    const onLogout = () => {
        googleAuth.logout();
    };
    
    const onSelect= (event) => {
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
        history.push({
            pathname: "/lake"
        });
    }
    return(
        <section className={styles.write}>
        <Header onLogout={onLogout}/>
        <div className={styles.main}>
            <h1 className={styles.title}>오늘 하루는 어땠나요?</h1>
            <form ref={formRef} className={styles.emotions} onClick={onSelect}>
                <input type="radio" name="emotion1" id="emotion1"/>
                <label htmlFor="emotion1" className={styles.img1}/>
                <input type="radio" name="emotion2" id="emotion2"/>
                <label htmlFor="emotion2" className={styles.img2}/>
                <input type="radio" name="emotion3" id="emotion3"/>
                <label htmlFor="emotion3" className={styles.img3}/>
                <input type="radio" name="emotion4" id="emotion4"/>
                <label htmlFor="emotion4" className={styles.img4}/>
                <input type="radio" name="emotion5" id="emotion5"/>
                <label htmlFor="emotion5" className={styles.img5}/>
                <textarea
                ref={messageRef}
                name="textInput"
                className={styles.textInput}
                rows="6" cols="25"
                ></textarea>
            </form>
            <div className={styles.buttons}>
                <div onClick={createEmotion}>
                    <Button icon="fas fa-plus" text="Add"/>
                </div>
                <Link to="/lake">
                    <Button icon="fas fa-arrow-right" text="Next"/>
                </Link>
            </div>
        </div>
        </section>
    );
}

export default Write;