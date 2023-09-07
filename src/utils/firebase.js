import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()

export const login = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password)
}

export const logout = () => {
	return signOut(auth)
}

export const db = getFirestore()
