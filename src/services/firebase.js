import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy, QuerySnapshot, doc, updateDoc, getDocs } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const sendMessage = async (roomId, user, text) => {
    try {
        await addDoc(collection(db, 'chatrooms', roomId, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            text: text.trim(),
            timestamp: serverTimestamp(),
            emoji: '➕'
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateMessage = async (roomId, messageId, message) => {
    try {
        await updateDoc(doc(db, 'chatrooms', roomId, 'messages', messageId), {
            text: message,
            editted: true
        })
    } catch (error) {
        console.log(error)
    }
}


export const updateEmoji = async (roomId, messageId, emo) => {
    try {
        await updateDoc(doc(db, 'chatrooms', roomId, 'messages', messageId), {
            emoji: emo,
            
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteMessage = async (roomId, messageId) => {
    try {
        await updateDoc(doc(db, 'chatrooms', roomId, 'messages', messageId), {
            deleted: true
        })
        
    } catch (error) {
        
    }
}

export const loginWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();

        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider)

        return { uid: user.uid, displayName: user.displayName}
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }

        return null;
    }
}

export const getMessages = (roomId, callback) => {
    
    return onSnapshot(
        query (
            collection(db, 'chatrooms', roomId, 'messages'), orderBy('timestamp', 'asc')
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            callback(messages)
        }
    )
}

// export const getCollections = (callback) => {
//     return onSnapshot(
//         query (
//             collection(db, 'chatrooms')
//         ),
//         (querySnapshot) => {
//             const collections = querySnapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
//             callback(collections)
//         }
//     )
// }

export const getCollections = async (callback) => {
    const querySnapshot = await getDocs(collection(db, 'collectionNames'));
    const collections = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));

    callback(collections)
}

export const addCollection = async (collectionObj) => {
    
    const { name, url, emoji } = collectionObj;

    
    try {
        await addDoc(collection(db, 'collectionNames'), {
            colURL: url,
            colName: name,
            colEmoji: emoji
        })
        
    } catch (error) {
        console.log(error)
    }
}