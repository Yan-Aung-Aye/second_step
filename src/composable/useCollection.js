// import { collection } from "firebase/firestore"
import { ref } from "vue"
import { db } from "../firebase/config.js"


let useCollection = () => {
    let error = ref("")
    let addDoc = async () => {
        try {
            await db.collection(collection).add(doc)

        } catch (err) {
            console.log(err.message)
            error.value = "Could not send the message"
        }
    }
    return { error, addDoc }
}

export default useCollection;