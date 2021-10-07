import { getAuth,
    signInWithPopup,
    GoogleAuthProvider } from "firebase/auth";

class GoogleAuth {
    constructor(){
        this.googleProvider = new GoogleAuthProvider();
        this.firebaseAuth = getAuth();
    }
    
    login(){
        return signInWithPopup(this.firebaseAuth, this.googleProvider)
        .catch((error)=>console.log(error.message));
    }
    
    logout(){
        this.firebaseAuth.signOut()
        .catch((error)=>console.log(error.message));
    }

    onAuthChange(onUserChanged){
        this.firebaseAuth.onAuthStateChanged((user)=>
        onUserChanged(user));
    }
}

export default GoogleAuth;
