import { getFireStore, setDoc } from "firebase/firestore"
import app from "../lib/firebase.config"

const db = getFireStore(app)

const Firestore = {
    writeDoc: (...args) => {
        return new Promise(resovle => {
            try {

            }
            catch (e) {

            }

        })
    }
}