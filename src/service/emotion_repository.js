import { getDatabase, onValue, ref, set, remove, off  } from "firebase/database";

class EmotionRepository {
    constructor(app) {
        this.db = getDatabase(app);
    }
    
    syncEmotions(userId, onUpdate) {
        const query = ref(this.db, `${userId}/emotions`);
        onValue(query, (snapshot) => {
        const value = snapshot.val();
        value && onUpdate(value);
        });
        return () => off(query);
    }

    saveEmotion(userId, emotion) {
        set(ref(this.db, `${userId}/emotions/${emotion.id}`), emotion);
    }

    removeEmotion(userId, id) {
        remove(ref(this.db, `${userId}/emotions/${id}`));
    }
}

export default EmotionRepository;