import React, {useEffect} from 'react'
import {db} from '../firebaseConfig'
import { collection, getDocs} from 'firebase/firestore'
import {toast} from 'react-toastify'
function page() {
    const collectionref = collection(db, "lyrics")
    const [songs,setSongs] = useState([])

    useEffect(async()=>{

      const querySnapshot = await getDocs(collectionref);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setSongs(...doc)
      });

    },[])

  return (
    <>
    <h1>Back To Home</h1>
    <ul>
      {songs.map(song=>{
        return (

          <li><h1>{song.title}</h1></li>
        )
      })}
    </ul>
    </>
  )
}

export default page
