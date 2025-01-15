import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getItems = async () => {
const querySnapshot = await getDocs(collection(db, "items"));
const items = [ ]

querySnapshot.forEach((doc) => {
  items.push(doc.data())
});
return items
}

export const getItemsByCategory = async (categoria )=> {
    const q = query(collection(db, "items"), where("categoria", "==", categoria));
    const items = [ ]

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        items.push(doc.data())
    });
return items
}


export const getItem = async (id, setItem) => {
  const docRef = doc(db, "items", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  setItem(docSnap.data())
} else {
  console.log("No such document!");
}
}