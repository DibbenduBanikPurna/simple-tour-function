import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Loading from './Components/Loading/Loading';
import Tour from './Components/Tour/Tour';

function App() {
  const [loading,setLoading]=useState(true)
  const [tour,setTour]=useState([])

  const removePost=(id)=>{
    const newPost=tour.filter(tour=>tour.id!==id)
      setTour(newPost)
    
  }
  useEffect(()=>{
    fetch('https://course-api.com/react-tours-project')
    .then(res=>res.json())
    .then(data=>{
      setTour(data)
      console.log(data)
      setLoading(false)
    })
  },[])
  return (
    <div className="App">
     {
       loading && <Loading/>
     }
     {
       tour.length===0 &&<> <p>No Tours Left</p>
        <button onClick={()=> window.location.replace("/")} className="btn btn-sm btn-primary">Refresh</button>
       </>
     }
     <Tour tour={tour} removePost={removePost} />
    </div>
  );
}

export default App;
