
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxhHYgt8AZEtSUNjFrqjcFph4Qrw7BKS0",
  authDomain: "live-pop.firebaseapp.com",
  projectId: "live-pop",
  storageBucket: "live-pop.appspot.com",
  messagingSenderId: "581124619669",
  appId: "1:581124619669:web:27e5077ae068f8e8b94a9c"
};

const app = initializeApp(firebaseConfig);

const queryDb = getFirestore();
const orderRef = collection(queryDb, "orders")

export const createOrder = async (data) => {
    const { id } = await addDoc(orderRef, data)
    return id
}