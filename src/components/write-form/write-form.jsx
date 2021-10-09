import Button from '../button/button';
import styles from './write-form.module.css';

const WriteForm = ({onSelect, onAdd, formRef, messageRef}) => {
    return(
        <>
        <section className={styles.write}>
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
            <div className={styles.button} onClick={onAdd}>
                <Button icon="fas fa-plus" text="Add"/>
            </div>
        </section>
        </>
    );
}

export default WriteForm;