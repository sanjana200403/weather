import React, { useState } from 'react'
import'./components/style.css'

export default function Tem() {
    const [city,setCity] = useState()
  return (
   <>
   <div className="box">
    <div className="main">
      
      <div className="inputDiv">
      <input type="search" 
        className='inputField'
        onChange={(e)=>{
setCity(e.target.value)
        }}
        />
      </div>
   
   

    <div className="info">
    
    
    <i className="fa-solid street fa-3x fa-street-view"></i>
    <h2 className='location'>{city}</h2>
    
    
    </div>

<div className="tempInfo">
<h1 className="temp">
        gfddgh
    </h1>
    <h3>min:5.32c | Max:5.76c </h3>
</div>

   </div>
   </div>



   {/* infoo */}
 
 
  
  

   </>
   
  )
}