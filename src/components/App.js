import React, {useState, useEffect} from "react";

function App(){
   const [dogimage, setDogImage] = useState(null)

   useEffect(() => {
      fetch('https://dog.ceo/api/breeds/image/random')
         .then((res) => res.json())
         .then((data) => setDogImage(data.message))
   }, [])

   if (!dogimage) {return <p>Loading...</p>}

   return <img src={dogimage} alt="A Random Dog"/>
}

export default App;
