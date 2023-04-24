import React from 'react'
import dataFilter from '../assets/data/dataFilter'

const Filter = ({setLetter}) => {
  const handleButtonClick = (data) => {
    if (data && data.name) {
        setLetter(data.name);
    }
}
 
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      {
        dataFilter.map((data, i) => (
            <div onClick={() => handleButtonClick({ name: "example" })} key={i}  style={{display:"flex"  ,backgroundColor:"rgba(211,211,211,0.1)" ,width:"150px", height:"50px",alignItems:"center", justifyContent:"center", borderRadius:"6px"}}> {data.name} </div>
        ))
      }
    </div>
  )
}

export default Filter
