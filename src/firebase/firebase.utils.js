import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAPpkpWleTf_q-ToviqYxpgjCjNuEW6fVs",
    authDomain: "cwrn-db-ee6b7.firebaseapp.com",
    databaseURL: "https://cwrn-db-ee6b7.firebaseio.com",
    projectId: "cwrn-db-ee6b7",
    storageBucket: "cwrn-db-ee6b7.appspot.com",
    messagingSenderId: "402834443683",
    appId: "1:402834443683:web:a4c83de23784ee05915e16",
    measurementId: "G-GK92V4MXJT"
}

export const createUserProfileDocument = async (usetAuth, additionalData) => {
    if (!usetAuth) return
    const userRef = firestore.doc(`users/${usetAuth.uid}`)
    const snapShot = await userRef.get()
    
    if (!snapShot.exists) {
        const { displayName, email } = usetAuth
        const createAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase