import  Rebase from "re-base";
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp =  firebase.initializeApp({
apiKey: "AIzaSyC_eL_LtW-eWIXrXCaDsChdMwevnCGjjAU",
authDomain: "chat-box-320e8.firebaseapp.com",
databaseURL: "https://chat-box-320e8-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp}
export default  base 