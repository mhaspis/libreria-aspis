import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB9p5Ws6jTRPtY3MswirxCXXvvz1DCyv_Y",
    authDomain: "mhaspis-ecommerce.firebaseapp.com",
    projectId: "mhaspis-ecommerce",
    storageBucket: "mhaspis-ecommerce.appspot.com",
    messagingSenderId: "995721867392",
    appId: "1:995721867392:web:e29e865ac6da9cbf873665",
    measurementId: "G-DPK6DRLSBJ"
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
