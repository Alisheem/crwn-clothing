import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
        apiKey: "AIzaSyBnzqkIWstddWi8dDLUSyEq-OBcmaIT9e4",
        authDomain: "crwn-db-220f3.firebaseapp.com",
        databaseURL: "https://crwn-db-220f3.firebaseio.com",
        projectId: "crwn-db-220f3",
        storageBucket: "crwn-db-220f3.appspot.com",
        messagingSenderId: "713266377038",
        appId: "1:713266377038:web:0c66671d5268f71a096e1f"

}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
        const snapShot = await userRef.get();
      
        if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
      };
      
      export const auth = firebase.auth();
      export const firestore = firebase.firestore();
      
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      export const signInWithGoogle = () => auth.signInWithPopup(provider);
      
      export default firebase;